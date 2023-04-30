import { Row, Col, Card, Anchor } from 'antd';
import './index.less';
import FloatBtnGroup from '@/components/FloatBtnGroup';

const Page: React.FC = () =>
{
  return (
    <>
      <Row>
        <Col span={4}>
          <Anchor
            targetOffset={100}
            style={{
              marginRight: '40px'
            }}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: '一、edge浏览器阻止文件下载怎么办？',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: '二、使用Edge浏览器下载某些文件会被拦截无法下载的解决方法(图文)',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: '三、下载的压缩包怎么用？',
              },
              {
                key: 'part-4',
                href: '#part-4',
                title: '四、下载网页源码作品后如何把源码导入HBuilder中运行查看代码',
              },
            ]}
          />
        </Col>
        <Col span={20}>
          <Row gutter={[16, 16]}>
            <Col id="part-1" xs={24}>
              <Card title={<span className="title">一、edge浏览器阻止文件下载怎么办？</span>}>
                <p>首先进入edge浏览器，点击右上的下载图标。</p>
                <img src="http://www.ddywysj.com/upload/article/202206/10/11151862a2b7460979bD0jg4R.png" alt="" />
                <p>然后找到带有×符号被阻止下载的文件。</p>
                <img src="http://www.ddywysj.com/upload/article/202206/10/11151862a2b74630dc00NB25g.png" alt="" />
                <p>最后鼠标右键被阻止下载的文件，选择保留，文件将会继续被下载，并下载成功。</p>
                <img src="http://www.ddywysj.com/upload/article/202206/10/11151862a2b74664bd7sDPu7e.png" alt="" />
              </Card>
            </Col>
            <Col id="part-2" xs={24}>
              <Card title={<span className="title">二、使用Edge浏览器下载某些文件会被拦截无法下载的解决方法(图文)</span>}>
                <p>1、首先打开Edge浏览器，在浏览器右上角可以看到由三个点组成的“设置及其它”图标，使用鼠标点击该图标。</p>
                <img src="http://www.ddywysj.com/upload/article/202205/23/091513628ae02149c17ULKgsq.jpg" alt="" />
                <p>2、点击之后会在下方弹出Edge浏览器的菜单窗口，在窗口中找到“设置”这一项，点击进入设置页面中。</p>
                <img src="http://www.ddywysj.com/upload/article/202205/23/091513628ae02154f6dL8Nrqk.jpg" alt="" />
                <p>3、这时我们会进入到Edge浏览器的设置页面，在页面左侧的菜单中点击切换到“隐私搜索和服务”设置页面。</p>
                <img src="http://www.ddywysj.com/upload/article/202205/23/091513628ae0215c16a7a4m4z.jpg" alt="" />
                <p>4、在隐私和服务页面中找到“安全性”这一栏，在其中找到“阻止可能不需要的应用”选项，点击其右侧的开关将其关闭就可以了。</p>
                <img src="http://www.ddywysj.com/upload/article/202205/23/091513628ae0215d0349JH89u.jpg" alt="" />
                <p>以上就是使用Edge浏览器下载某些文件会被拦截无法下载的解决方法，大家按照上面的方法来进行设置后，再使用Edge浏览器下载文件的时候就不会再被拦截了。</p>
              </Card>
            </Col>
            <Col id="part-3" xs={24}>
              <Card title={<span className="title">三、下载的压缩包怎么用？</span>}>
                <p>可以看这个视频：https://www.bilibili.com/video/BV1AM4y1u7Jw/</p>
                <p>下载的压缩包怎么用？</p>
                <p>什么是网页？</p>
                <p>网页是很多元素的集合，包含：html（网页文件）、css（样式表文件）、images（图片文件夹）、js（脚本文件）等，并不是单单某个文件~ 下载到的网页会全部发给您~你交也是交全部文件~</p>
                <h4>第一步：下载！</h4>
                <p>1、在线购买后，得到的是网盘的分享链接，可以直接保存到自己网盘下载，复制到浏览器地址，输入提取码（如果不会下载可联系我 ddywysj）。</p>
                <img src="http://www.ddywysj.com/upload/article/202111/28/22493761a397012612fyZSWpL.png" alt="" />
                <img src="http://www.ddywysj.com/upload/article/202111/28/22181661a38fa899868l87YFv.png" alt="" />
                <p>2、输入提取码</p>
                <img src="http://www.ddywysj.com/upload/article/202111/28/22242861a3911ca2c25fdyHky.png" alt="" />
                <p>3、下载</p>
                <p>这里如果要登录账号是你自己的百度云 没办法百度云的机制是这样的 （注：这一步不需要充会员啥的 只要登录就好了）</p>
                <img src="http://www.ddywysj.com/upload/article/202111/28/22261861a3918a72796ufEc2x.png" alt="" />
                <p>发的是压缩包。压缩包不能直接看网页！一定要解压！！！</p>
                <img src="http://www.ddywysj.com/upload/article/202111/28/22311461a392b24719eR0Eann.png" alt="" />
                <p>下载后，鼠标右键选择解压到某个文件夹</p>
                <h4>第二步：解压</h4>
                <p>网页是本地文件，需要下载解压才能看，不能通过压缩包直接预览可能会样式图片错误~</p>
                <p>所以一定要先下载~ 手机看到的网页可能样式会有问题，因为网页都是基于电脑网页的，所以尽量用电脑查看~</p>
                <h4>第三步：双击查看</h4>
                <p>解压后一定要找到html文件，html才是网页！双击就能看效果！不要去双击样式表！</p>
                <img src="http://www.ddywysj.com/upload/article/202111/28/22353861a393baec0102Se4eU.png" alt="" />
                <p>注意：</p>
                <p>为什么看不到预览图？打开的全是代码？为啥打开没样式</p>
                <p>如果打开的文件只看到代码无法切换到视图界面，您打开的应该是CSS样式表文件！</p>
                <p>不会的看这个视频 https://www.bilibili.com/video/BV1AM4y1u7Jw/</p>
              </Card>
            </Col>
            <Col id="part-4" xs={24}>
              <Card title={<span className="title">四、下载网页源码作品后如何把源码导入HBuilder中运行查看代码</span>}>
                <p>下载网页源码作品后如何把源码导入HBuilder中运行查看代码，按照下面的图示进行操作</p>
                <img src="http://www.ddywysj.com/upload/article/202105/16/18511260a0f92038160lkVAU9.png" alt="" />
                <img src="http://www.ddywysj.com/upload/article/202105/16/18511260a0f9204fcf7Eac9zL.png" alt="" />
                <img src="http://www.ddywysj.com/upload/article/202105/16/18511260a0f92095e76e1eDrT.png" alt="" />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <FloatBtnGroup />
    </>
  );
};

export default Page;
