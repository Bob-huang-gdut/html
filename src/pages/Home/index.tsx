import { useModel } from '@umijs/max';
import { Card, Col, Row, Spin, Tabs, Image, Carousel, Empty, Divider } from 'antd';
import
  {
    ProFormSelect,
    QueryFilter,
    ProForm,
    ModalForm
  } from '@ant-design/pro-components';
import './index.less';
import { useState } from 'react';
import FloatBtnGroup from '@/components/FloatBtnGroup';

const HomePage: React.FC = () =>
{
  const { list, queryList } = useModel('global');
  const [loading, setLoading] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);
  const [cur, setCur] = useState({});

  return (
    <>
      <QueryFilter
        style={{
          backgroundColor: '#fff',
          borderRadius: 10
        }}
        layout="vertical"
        defaultCollapsed={false}
        onReset={() =>
        {
          setLoading(true)
          setTimeout(() =>
          {
            queryList({})
            setLoading(false)
          }, 500)
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
          borderRadius: 10
        }}>
          {
            list.length ? <Row gutter={[16, 16]}>
              {
                list.map((item: any, index: number) =>
                {
                  return (<Col xs={24} sm={24} md={6} key={index}>
                    <Card title={item.title} bordered={false} onClick={() =>
                    {
                      setCur(item)
                      setDrawerVisit(true)
                    }} style={{
                      cursor: 'pointer'
                    }}>
                      <div className='css-eyizcg'>
                        <img src={item.img} alt="" />
                      </div>
                    </Card>
                  </Col>)
                })
              }
            </Row> : <Empty description="暂无资源" style={{
              marginTop: '100px'
            }} />
          }
        </div>
      </Spin>
      <ModalForm
        onOpenChange={setDrawerVisit}
        title="网页详情"
        modalProps={{
          destroyOnClose: true
        }}
        open={drawerVisit}
        request={async () =>
        {
          return {
            ...cur
          }
        }}
        onFinish={async () =>
        {
          setDrawerVisit(false)
          return true;
        }}
        submitter={{
          searchConfig: {
            submitText: '关闭'
          },
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
          submitButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
      >
        <h2>{cur.title}</h2>
        <Divider />
        <ProForm.Group>
          <ProFormSelect
            width="xs"
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
            width="xs"
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
            width="x's"
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
            width="xs"
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
        </ProForm.Group>

        <Tabs
          style={{
            width: '100%'
          }}
          defaultActiveKey="1"
          size={"small"}
          items={[{
            label: `介绍`,
            key: '1',
            children: <>
              <div>
【html+css+js 】五页个人网页源码 渐变风格  学生个人网页制作设计模板采用DIV CSS布局制作
首页 作品 技能 日常 联系
javascript 在联系页面  用于表单的验证 不需要可删除
内容图片可修改 可以改成多种主题网页 
个人网主页模板作品下载后可自行修改，所看到的文字都可以编辑修改，图片可直接在文件夹中替换覆盖。可使用Dreamweaver、Notepad++、HBuilder等很多软件修改为信息。
              </div>
              <Carousel autoplay>
                <div className='css-eyizcg'>
                  <Image width={200} src={cur.img} />
                </div>
                <div className='css-eyizcg'>
                  <Image width={200} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                </div>
              </Carousel>
            </>,
          }, {
            label: `演示图集`,
            key: '2',
            children: <>
              <Image.PreviewGroup>
                <Image width={200} src={cur.img} />
                <Image width={200} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
              </Image.PreviewGroup>
            </>,
          }]}
        />
      </ModalForm>
      <FloatBtnGroup />
    </>
  );
};

export default HomePage;
