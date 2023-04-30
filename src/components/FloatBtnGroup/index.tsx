

import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from 'react';

interface Props {}

// 脚手架示例组件
const FloatBtnGroup: React.FC<Props> = (props) => {
  return (
    <FloatButton.Group shape="circle">
      <FloatButton icon={<CustomerServiceOutlined />} tooltip={<div>联系客服</div>} />
      <FloatButton.BackTop visibilityHeight={0} tooltip={<div>回到顶部</div>} />
    </FloatButton.Group>
  );
};

export default FloatBtnGroup;
