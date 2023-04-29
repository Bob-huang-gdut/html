import { useModel } from '@umijs/max';
import { Card, Col, Row } from 'antd';
import {
  ProFormRadio,
  ProFormSelect,
  QueryFilter,
} from '@ant-design/pro-components';
import './index.less';

const HomePage: React.FC = () =>
{
  const { list } = useModel('global');

  console.log('%c⧭', 'color: #ff0000', list);
  return (
    <div>
      <QueryFilter
        style={{
          backgroundColor: '#fff'
        }}
        layout="vertical"
        initialValues={{
          type: 'all',
          page: 'all',
          technology: 'all',
          expense: 'all'
        }}
        collapsed={false}
        onFinish={async (values) =>
        {
          console.log('%c⧭', 'color: #00e600', values);
          return false
        }}
      >
        <ProFormRadio.Group
          name="type"
          label="查询频度"
          options={[
            {
              value: 'all',
              label: '全部',
            },
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
        />
        <ProFormSelect
          name="page"
          label="页数"
          request={async () => [
            { label: '全部', value: 'all' },
            { label: '1页', value: '1' },
            { label: '2页', value: '2' },
            { label: '3页', value: '3' },
            { label: '4页', value: '4' },
            { label: '5页', value: '4' },
            { label: '6页-10页', value: '6-10' },
            { label: '11页-15页', value: '11-15' },
            { label: '15页以上', value: '16-99' },
          ]}
          placeholder="请选择一项技术"
        />
        <ProFormSelect
          name="technology"
          label="技术"
          request={async () => [
            { label: '全部', value: 'all' },
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
            { label: '全部', value: 'all' },
            { label: '免费', value: 'free' },
            { label: '10-20', value: '10-20' },
            { label: '20-30', value: '20-30' },
            { label: '31-50', value: '31-50' },
            { label: '51-100', value: '51-100' },
            { label: '100-999', value: '100-999' },
          ]}
          placeholder="请选择一项技术"
        />
      </QueryFilter>
      <div style={{
        marginTop: '20px',
        backgroundColor: '#fff',
        padding: '20px',
        minHeight: '300px'
      }}>
        <Row gutter={[16, 16]}>
          {
            list.map((item: any, index: number) =>
            {
              return (<Col span={6} key={index}>
                <Card title={item.title} bordered={false}>
                  <div className='css-eyizcg'>
                    <img src={item.img} alt="" />
                  </div>
                </Card>
              </Col>)
            })
          }
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
