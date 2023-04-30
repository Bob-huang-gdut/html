import { Row, Col, Card, Table } from 'antd';
import FloatBtnGroup from '@/components/FloatBtnGroup';
import './index.less';

const data: any[] = [
  {
    key: '1',
    "质量指标": "作品原创度",
    "免费作品": "极差",
    "其他平台网页": "差",
    "多多鱼网页作品": "均为原创",
    "按要求定制开发": "均为原创"
  },
  {
    key: '2',
    "质量指标": "作品重复率",
    "免费作品": "极高",
    "其他平台网页": "高",
    "多多鱼网页作品": "极低",
    "按要求定制开发": "不重复"
  },
  {
    key: '3',
    "质量指标": "作品达标率",
    "免费作品": "自己把控",
    "其他平台网页": "自己把控",
    "多多鱼网页作品": "自己把控",
    "按要求定制开发": "完全符合要求"
  },
  {
    key: '4',
    "质量指标": "网页难易度",
    "免费作品": "自己把控",
    "其他平台网页": "自己把控",
    "多多鱼网页作品": "符合学生水平",
    "按要求定制开发": "符合学生水平"
  },
];

const columns = [{
  title: '质量指标',
  dataIndex: '质量指标',
  key: '质量指标',
}, {
  title: '免费作品',
  dataIndex: '免费作品',
  key: '免费作品',
}, {
  title: '其他平台网页',
  dataIndex: '其他平台网页',
  key: '其他平台网页',
}, {
  title: '多多鱼网页作品',
  dataIndex: '多多鱼网页作品',
  key: '多多鱼网页作品',
}, {
  title: '按要求定制开发',
  dataIndex: '按要求定制开发',
  key: '按要求定制开发',
}]

const Page: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Card title={<span className="title">一、网页成品和定制的区别</span>}>
            <p>多多鱼网页成品的定制的唯一区别就是 网页成品源码已经写好的可以卖给很多人，不需要我们二次开发，比较方面便捷。（当然你们购买下载后可以自己修改，没有任何限制）</p>
            <p>定制会贵些，因为需要根据您的要求去开发，从0到1比较耗时，所以费用比成品源码贵一些。但是保证不会重复撞车。</p>
            <p>其他的没有什么区别了，因为代码都是基础的，符合国际标准的代码。</p>
            <p>就相当车子一样，成品是一个全世界已经生产出来并且都可以购买的产品。定制就是全球限量一台，按照你的要求为你一个人定做的一辆车子。</p>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title={<span className="title">二、网页成品和定制开发的对比</span>}>
            <Table columns={columns} dataSource={data} bordered pagination={false} />
          </Card>
        </Col>
        <Col xs={24}>
          <Card title={<span className="title">三、网页成品介绍</span>}>
            <p>别的网站不知道，多多鱼网站上的源码均为原创，代码简单清晰，没有多余的东西。</p>
            <p>每个网页成品详情页都有详细的介绍，可以看一下上面几页什么技术都有介绍，下载过后是包含所有素材代码的文件，下载过后就可以直接运行到浏览器。想看或者修改代码的话可以在代码编辑软件打开。不会可以看这里点击查看</p>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title={<span className="title">四、网页定做流程</span>}>
            <p>1、说明网页设计要求：制作静态HTML网页还是PHP动态网站、作品页数、网页题材、页面效果（如行为、JS、轮播、滚动等）</p>
            <p>2、网页作品资料准备：说明网页作品中所需的资料由 个人准备还是 我们网上搜集</p>
            <p>3、网页设计定做流程：咨询售前客服提供要求 —— 沟通费用及工期 —— 沟通付款方式 —— 开始制作网页 —— 完成验收交付</p>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title={<span className="title">五、静态网页价格：(定制起步价格不低于30)</span>}>
            <p>具体价格要按照页面内容多少以及功能点综合起来报价格哈。下面仅作为参考，具体请联系客服微信 ddywysj</p>
            <img src="http://www.ddywysj.com/upload/products/202106/05/202106/05/19192160bb5db9382eaolP7Bg.png" alt="" />
            <p>这种简单的一页定制是30起</p>
            <img src="http://www.ddywysj.com/upload/products/202207/24/18122962dd1b0de4fa39VNApD.png" alt="" />
            <p>这种简单的一页定制是60起</p>
            <img src="http://www.ddywysj.com/upload/products/202206/13/21543562a7419b6b016jvfEqC.png" alt="" />
            <p>这种简单的一页定制是80起</p>
            <p>注：定制发要求 静态页面一页30起 客服微信</p>
            <img src="http://www.ddywysj.com/upload/page/202106/30/15410060dc200c81a73wUMuKI.jpeg" alt="" />
          </Card>
        </Col>
      </Row>
      <FloatBtnGroup />
    </>
  );
};

export default Page;
