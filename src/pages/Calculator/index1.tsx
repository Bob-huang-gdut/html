import { ProFormSelect, ProFormDigit, ProFormText, ProFormInstance, ProFormRadio, ProFormDependency, ProForm } from '@ant-design/pro-components';
import { Row, Col, Card, Badge, Button, Descriptions, DescriptionsProps, Space, message, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';

const transactionOptions = [
  { label: '0 手续费', value: 0 },
  { label: '百分之 0.1', value: 0.001 },
  { label: '百分之 0.5', value: 0.005 },
  { label: '百分之 1.5', value: 0.015 },
  { label: '万分之 3', value: 0.0003 },
  { label: '万分之 1', value: 0.00010 },
  { label: '万分之 0.5', value: 0.00005 },
]

const Page: React.FC = () => {
  const [coseShare, setCoseShare] = useState<number>(0) // 持仓份额
  const [BHAR, setBHAR] = useState<number>(0) // 持有收益率
  const [serviceCharge, setServiceCharge] = useState<number>(0) // 手续费
  const [amount, setAmount] = useState<number>(0) // 持有金额
  const [principal, setPrincipal] = useState<number>(0) // 持仓成本
  const formRef = useRef<ProFormInstance>(null)

  const decimal = (data: number) => {
    return data.toFixed(2)
  }

  const decimalToPercentage = (data: number) => {
    return `${(data * 100).toFixed(2)} %`
  }

  const saveCache = (data: any) => {
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory') || '[]')
    localStorage.setItem('calculatorHistory', JSON.stringify([data, ...calculatorHistory]))
  }

  const loadCache = () => {
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory') || '[]')
    if (formRef && calculatorHistory && calculatorHistory[0]) {
      formRef.current?.setFieldsValue(calculatorHistory[0])
      message.success('成功回填数据')
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
    <Card title={`计算器`} extra={[
      <Space>
        <Button type='primary' onClick={() => {
          loadCache()
        }}>获取上次提交的数据</Button>
        <Button danger onClick={() => {
          clearCache()
        }}>清空缓存</Button>
      </Space>
    ]}>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>

        <div style={{
          flex: 1
        }}>
          <ProForm
            grid
            colProps={{ md: 8 }}
            rowProps={{
              gutter: [16, 0],
            }}
            formRef={formRef}
            initialValues={{
              etfType: 'in',
              transaction: 0.0003,
              transactionIn: 0,
              transactionOut: 0,
              costPrice: 0.5,
              principal: 1000,
              currentPrice: 0.55
            }}
            onFinish={async (values: any) => {
              const { etfType, transaction, transactionIn, transactionOut, costPrice, principal, currentPrice } = values

              // 默认保存缓存
              saveCache(values)

              setPrincipal(principal || 0)

              setCoseShare(principal / costPrice)

              setBHAR((currentPrice - costPrice) / costPrice)

              const tempAmount = principal / costPrice * currentPrice
              setAmount(tempAmount)

              let tempServiceCharge = transaction * principal + transaction * tempAmount

              // if (etfType === 'in') {
              //   tempServiceCharge = (transaction * principal > 5 ? transaction * principal : 5) + (transaction * tempAmount > 5 ? transaction * tempAmount : 5)
              // } else {
              //   tempServiceCharge = transactionIn * principal + transactionOut * tempAmount
              // }
              // tempServiceCharge = transactionIn * principal + transactionOut * tempAmount

              setServiceCharge(tempServiceCharge)

              message.success('完成计算')
            }}>

            <ProFormText
              name="code"
              label="基金编码"
              placeholder="请输入基金编码"
            />
            <ProFormText
              name="name"
              label="基金名称"
              placeholder="请输入基金名称"
            />
            <ProFormRadio.Group
              name="etfType"
              label="ETF类型"
              options={[
                {
                  label: '场内',
                  value: 'in',
                },
                {
                  label: '场外',
                  value: 'out',
                },
              ]}
            />
            <ProFormDependency name={['etfType']}>
              {({ etfType }) => {
                return (
                  etfType === 'in' && <ProFormSelect
                    name="transaction"
                    label="交易手续费"
                    request={async () => transactionOptions}
                    placeholder="选择交易手续费"
                  />
                );
              }}
            </ProFormDependency>
            <ProFormDependency name={['etfType']}>
              {({ etfType }) => {
                return (
                  etfType === 'out' && (
                    [
                      <ProFormSelect
                        name="transactionIn"
                        label="买入手续费"
                        request={async () => transactionOptions}
                        placeholder="选择交易手续费"
                      />
                    ]
                  )
                );
              }}
            </ProFormDependency>
            <ProFormDependency name={['etfType']}>
              {({ etfType }) => {
                return (
                  etfType === 'out' && (
                    [
                      <ProFormSelect
                        name="transactionOut"
                        label="卖出手续费"
                        request={async () => transactionOptions}
                        placeholder="选择交易手续费"
                      />
                    ]
                  )
                );
              }}
            </ProFormDependency>
            <ProFormDigit
              name="costPrice"
              label="持仓成本价"
              placeholder="请输入持仓成本价"
            />
            <ProFormDigit
              name="principal"
              label="持仓本金"
              placeholder="请输入持仓本金"
            />
            <ProFormDigit
              name="currentPrice"
              label="持仓现价"
              placeholder="请输入持仓现价"
            />

          </ProForm>
          <Descriptions title="计算结果" bordered size={'small'} style={{
            marginTop: 24
          }}>
            <Descriptions.Item label="到手收益"><Tag color='success'>￥{decimal(amount - principal - serviceCharge)}</Tag></Descriptions.Item>
            <Descriptions.Item label="持有收益率"><Tag color={BHAR < 0 ? 'error' : 'success'}>{decimalToPercentage(BHAR)}</Tag></Descriptions.Item>
            <Descriptions.Item label="持有金额"><Tag color='default'>￥{decimal(amount)}</Tag></Descriptions.Item>
            <Descriptions.Item label="持仓成本"><Tag color='default'>￥{decimal(principal)}</Tag></Descriptions.Item>
            <Descriptions.Item label="手续费"><Tag color='warning'>￥{serviceCharge}</Tag></Descriptions.Item>
            <Descriptions.Item label="持仓份额"><Tag color='default'>{decimal(coseShare)} 手</Tag></Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Card>
  );
};

export default Page;
