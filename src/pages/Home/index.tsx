import { useModel } from '@umijs/max';
import { Card, Col, Row, Spin, FloatButton, Empty } from 'antd';
import {
  ProFormSelect,
  QueryFilter,
} from '@ant-design/pro-components';
import './index.less';
import { useState } from 'react';
import { CustomerServiceOutlined } from '@ant-design/icons';

const HomePage: React.FC = () =>
{
  const { list, queryList } = useModel('global');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <QueryFilter
        style={{
          backgroundColor: '#fff',
          borderRadius: 10
        }}
        layout="vertical"
        defaultCollapsed={true}
        onReset={() =>
        {
          queryList({})
        }}
        onFinish={async (values) =>
        {
          setLoading(true)
          setTimeout(() =>
          {            
            queryList(values)
            setLoading(false)
          }, 500)
        }}
      >
        <ProFormSelect
          name="type"
          label="站点分类"
          request={async () => [
            {
              value: 'blog',
              label: '个人博客',
            },
            {
              value: 'food',
              label: '美食系列',
            },
            {
              value: 'school',
              label: '学校院校',
            },
            {
              value: 'tourist',
              label: '旅游景点',
            },
            {
              value: 'mall',
              label: '商城类',
            },
            {
              value: 'movie',
              label: '动漫电影',
            },
            {
              value: 'game',
              label: '游戏',
            },
            {
              value: 'animal',
              label: '动物类',
            },
            {
              value: 'festival',
              label: '节日类',
            },
            {
              value: 'beautyMakeup',
              label: '美妆',
            },
            {
              value: 'enterprise',
              label: '企业站',
            },
            {
              value: 'star',
              label: '人物明星',
            },
            {
              value: 'other',
              label: '其它',
            },
          ]}
          placeholder="选择分类"
        />
        <ProFormSelect
          name="page"
          label="页数"
          request={async () => [
            { label: '1页', value: '1' },
            { label: '2页', value: '2' },
            { label: '3页', value: '3' },
            { label: '4页', value: '4' },
            { label: '5页', value: '5' },
            { label: '6页', value: '6' },
            // { label: '6页-10页', value: '6-10' },
            // { label: '11页-15页', value: '11-15' },
            // { label: '15页以上', value: '16-99' },
          ]}
          placeholder="选择页数"
        />
        <ProFormSelect
          name="technology"
          label="技术"
          request={async () => [
            { label: 'html', value: '1' },
            { label: 'html+css', value: '2' },
            { label: 'html+css+javascript', value: '3' },
            { label: 'Bootstrap', value: '4' },
          ]}
          placeholder="请选页数"
        />
        <ProFormSelect
          name="expense"
          label="费用"
          request={async () => [
            { label: '免费', value: '0' },
            { label: '10', value: '10' },
            { label: '20', value: '20' },
            { label: '30', value: '30' },
          ]}
          placeholder="选择技术"
        />
      </QueryFilter>
      <Spin tip="加载中" size="large" spinning={loading}>
        <div style={{
          marginTop: '20px',
          backgroundColor: '#fff',
          padding: '20px',
          minHeight: '400px',
          borderRadius: 10,
        }}>
          {
            list.length ? <Row gutter={[16, 16]}>
              {
                list.map((item: any, index: number) =>
                {
                  return (<Col xs={24} sm={24} md={6} key={index}>
                    <Card title={item.title} bordered={false}>
                      <div className='css-eyizcg'>
                        <img src={item.img} alt="" />
                      </div>
                    </Card>
                  </Col>)
                })
              }
            </Row> : <Empty description="暂无资源" style={{
              marginTop: '100px'
            }}/>
          }
        </div>
        <FloatButton.Group shape="circle">
          <FloatButton icon={<CustomerServiceOutlined />} tooltip={<div>联系客服</div>} />
          <FloatButton.BackTop visibilityHeight={0} tooltip={<div>回到顶部</div>} />
        </FloatButton.Group>
      </Spin>
    </>
  );
};

export default HomePage;
