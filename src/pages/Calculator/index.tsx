import { ProFormSelect, ProFormDigit, ProFormText, ProFormInstance, ProFormRadio, ProFormDependency, ProForm, EditableProTable, ProColumns, ActionType, EditableFormInstance } from '@ant-design/pro-components';
import { Row, Col, Card, Badge, Button, Descriptions, DescriptionsProps, Space, message, Tag, Input, Divider } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  price: number;
  hands: number;
  state?: string;
};

const Page: React.FC = () => {
  const formRef = useRef<ProFormInstance>(null)
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const [records, setRecords] = useState([])

  const decimal = (data: number) => {
    return data.toFixed(3)
  }

  const decimalToPercentage = (data: number) => {
    return `${(data * 100).toFixed(3)} %`
  }

  const saveCache = (data: any) => {
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory') || '[]')
    localStorage.setItem('calculatorHistory', JSON.stringify([data, ...calculatorHistory]))
  }

  const loadCache = () => {
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory') || '[]')
    if (formRef && calculatorHistory && calculatorHistory[0]) {
      setRecords(calculatorHistory)
      formRef.current?.setFieldsValue(calculatorHistory[0])
      if (calculatorHistory[0].dataSource) {
        setEditableRowKeys(calculatorHistory[0].dataSource.map((item: DataSourceType) => item.id))
      }
      message.success('成功回填数据')
    } else {
      setRecords([])
    }
  }

  const clearCache = () => {
    localStorage.setItem('calculatorHistory', '[]')
    message.success('成功清空缓存')
  }

  useEffect(() => {
    loadCache()
    formRef.current?.submit()
  }, [])

  return (
    <Card title={`ETF资金持仓`} extra={[
      <Space>
        <Button type='primary' onClick={() => {
          formRef.current?.submit()
        }}>保存表单</Button>
        <Button onClick={() => {
          formRef.current?.resetFields()
        }}>重置表单</Button>
        {/* <Button type='primary' onClick={() => {
          loadCache()
        }}>需要历史记录</Button> */}
        <Button onClick={() => {
          clearCache()
        }}>清空缓存</Button>
      </Space>
    ]}>
      <ProForm
        grid
        colProps={{ md: 8 }}
        rowProps={{
          gutter: [16, 0],
        }}
        formRef={formRef}
        initialValues={{
          currentPrice: 0.801,
          transaction: 0.0003
        }}
        submitter={false}
        onFinish={async (values: any) => {
          // 默认保存缓存
          saveCache(values)
          message.success('保存缓存')
        }}>
        <ProFormDigit
          name="currentPrice"
          label="现价"
          placeholder="请输入现价"
          fieldProps={{
            step: 0.001
          }}
        />
        <ProFormText
          name="name"
          label="基金名称"
          placeholder="请输入基金名称"
        />
        <ProFormText
          name="code"
          label="基金编码"
          placeholder="请输入基金编码"
        />
        <ProForm.Item
          label="数组数据"
          name="dataSource"
          initialValue={[]}
          trigger="onValuesChange"
        >
          <EditableProTable<DataSourceType>
            rowKey="id"
            toolBarRender={false}
            columns={[
              {
                title: '买入价格',
                dataIndex: 'price',
                valueType: 'digit',
                fieldProps: {
                  step: 0.001
                }
              },
              {
                title: '手数',
                dataIndex: 'hands',
                valueType: 'digit'
              },
              // {
              //   title: '是否模拟',
              //   key: 'isSimulation',
              //   dataIndex: 'isSimulation',
              //   valueType: 'select',
              //   valueEnum: {
              //     yes: {
              //       text: '模拟'
              //     },
              //     no: {
              //       text: '实盘'
              //     },
              //   },
              // },
              {
                title: '操作时间',
                dataIndex: 'actionTime',
                valueType: 'dateTime',
                width: 250
              },
              {
                title: '操作',
                valueType: 'option',
                render: (_, row) => [
                  <a
                    key="edit"
                    onClick={() => {
                      actionRef.current?.startEditable(row.id);
                    }}
                  >
                    编辑
                  </a>,
                  <a
                    key="delete"
                    onClick={() => {
                      const actionDataSource = formRef.current?.getFieldValue(
                        'dataSource',
                      ) as DataSourceType[] || [];
                      formRef.current?.setFieldsValue({
                        DataSourceType: actionDataSource.filter((item) => item.id !== row?.id),
                      });
                    }}
                  >
                    删除
                  </a>,
                ],
              },
            ]}
            actionRef={actionRef}
            editableFormRef={editableFormRef}
            recordCreatorProps={{
              newRecordType: 'dataSource',
              position: 'top',
              record: () => ({
                id: Date.now(),
                price: 0.801,
                state: 'buy',
                hands: 1000,
                isSimulation: 'yes',
                actionTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
              }),
            }}
            editable={{
              type: 'multiple',
              editableKeys,
              onChange: setEditableRowKeys,
              actionRender: (row, _, dom) => {
                return [dom.delete];
              },
            }}
          />
        </ProForm.Item>
        <ProFormDependency name={['dataSource', 'transaction' , 'currentPrice']}>
          {({ dataSource = [], transaction, currentPrice }) => {
            let totalHands: number = 0;
            let totalCost: number = 0;
            let serviceCharge: number = 0;
            let avgPrice: number = 0;

            dataSource.forEach((item: DataSourceType) => {
              item.hands = item.hands || 0
              totalHands += item.hands
              totalCost += item.hands * item.price
            })

            serviceCharge = totalCost * transaction
            
            avgPrice = totalCost / totalHands    

            return (
              <div style={{
                width: '100%'
              }}>
                <Descriptions title="计算结果" bordered size={'small'} style={{
                  marginTop: 24
                }} column={1}>
                  <Descriptions.Item label="持有收益"><Tag color={currentPrice < avgPrice ? 'success' : 'error'}>￥{decimal(totalHands * (currentPrice - avgPrice) - serviceCharge * 2)}（差价￥{decimal(totalHands * (currentPrice - avgPrice))} - 手续费￥{decimal(serviceCharge * 2)}）</Tag></Descriptions.Item>
                  <Descriptions.Item label="持有收益率"><Tag color={currentPrice < avgPrice ? 'success' : 'error'}>{decimalToPercentage((currentPrice - avgPrice) / avgPrice)}</Tag></Descriptions.Item>
                  <Descriptions.Item label="持仓成本"><Tag>￥{(decimal((totalCost + serviceCharge * 2) / totalHands))} / 手</Tag></Descriptions.Item>
                  <Descriptions.Item label="手续费（买+卖）"><Tag>￥{decimal(serviceCharge * 2)}</Tag></Descriptions.Item>
                  <Descriptions.Item label="持仓份额"><Tag>{decimal(totalHands)} 手</Tag></Descriptions.Item>
                </Descriptions>
              </div>
            );
          }}
        </ProFormDependency>
      </ProForm>
      <Divider />
    </Card>
  );
};

export default Page;
