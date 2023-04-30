import data from './data.json';
export const DEFAULT_NAME = 'Umi Max';

export const LIST = data
// export const LIST = [
//   {
//     "title": "Button 按钮",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original",
//     "type": "blog",
//     "page": '4',
//     "technology": '1',
//     "expense": '0'
//   },
//   {
//     "title": "Icon 图标",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PdAYS7anRpoAAAAAAAAAAAAADrJ8AQ/original",
//     "type": "food",
//     "page": '6',
//     "technology": '2',
//     "expense": '10'
//   },
//   {
//     "title": "Typography 排版",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MLt3R6m9huoAAAAAAAAAAAAADrJ8AQ/original",
//     "type": "school",
//     "page": '16',
//     "technology": '3',
//     "expense": '20'
//   },
//   {
//     "title": "Divider 分割线",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Grid 栅格",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Layout 布局",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*4i58ToAcxaYAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Space 间距",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Anchor 锚点",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*TBTSR4PyVmkAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Breadcrumb 面包屑",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*I5a2Tpqs3y0AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Dropdown 下拉菜单",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mBBcQ6goljkAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Menu 导航菜单",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Pagination 分页",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8y_iTJGY_aUAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Steps 步骤条",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*677sTqCpE3wAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "AutoComplete 自动完成",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*g8THS4NpV6sAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Cascader 级联选择",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*tokLTp73TsQAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Checkbox 多选框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DzgiRbW3khIAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "DatePicker 日期选择框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xXA9TJ8BTioAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Form 表单",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-lcdS5Qm1bsAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Input 输入框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Y3R0RowXHlAAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "InputNumber 数字输入框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JvWbSYhuNlIAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Mentions 提及",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e4bXT7Uhi9YAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Radio 单选框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M-YKTJnWM2kAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Rate 评分",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*oyOcTrB12_YAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Select 选择器",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*zo76T7KQx2UAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Slider 滑动输入条",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_4heQaUrFn4AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Switch 开关",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rtArRpBNDZcAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "TimePicker 时间选择框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*kGmGSLk_1fwAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Transfer 穿梭框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EAApQ5ephigAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "TreeSelect 树选择",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DfTMRYSDngEAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Upload 上传",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*93ymR4RD4S0AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Avatar 头像",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JJBSS5lBG4IAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Badge 徽标数",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e0qITYqF394AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Calendar 日历",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*nF6_To7pDSAAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Card 卡片",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VXtCTp93KPAAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Carousel 走马灯",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bPMSSqbaTMkAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Collapse 折叠面板",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*B7HKR5OBe8gAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Descriptions 描述列表",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*fHdlTpif6XQAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Empty 空状态",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZdiZSLzEV0wAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Image 图片",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "List 列表",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EYuhSpw1iSwAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Popover 气泡卡片",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XhL3QpRw92kAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "QRCode 二维码",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Segmented 分段控制器",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*papwTpNscPIAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Statistic 统计数值",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YL7PRYNtH-4AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Table 表格",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3yz3QqMlShYAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Tabs 标签页",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Tag 标签",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_SBsSrKLg00AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Timeline 时间轴",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FkTySqNt3sYAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Tooltip 文字提示",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3u9eSZO_4c0AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Tour 漫游式引导",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8CC_Tbe3_e4AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Tree 树形控件",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Ag9_Q6ArswEAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Alert 警告提示",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Ct7bT7rrTTAAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Drawer 抽屉",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*v3TvSq2E0HAAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Message 全局提示",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JjZBT6N1MusAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Modal 对话框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wM3qQ5XrhlcAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Notification 通知提醒框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6RWNQ78WtvEAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Popconfirm 气泡确认框",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sAGpRoBtTXcAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Progress 进度条",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gK_4S6fDRfgAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Result 结果",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-e2IRroDJyEAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Skeleton 骨架屏",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uae3QbkNCm8AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Spin 加载中",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5mC5TomY4B0AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Affix 固钉",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YSm4RI3iOJ8AAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "App 包裹组件",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HJz8SZos2wgAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "ConfigProvider 全局化配置",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*NVKORa7BCVwAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "FloatButton 悬浮按钮",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HS-wTIIwu0kAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "Watermark 水印",
//     "img": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wr1ISY50SyYAAAAAAAAAAAAADrJ8AQ/original"
//   },
//   {
//     "title": "ProLayout 高级布局",
//     "img": "https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg"
//   },
//   {
//     "title": "ProForm 高级表单",
//     "img": "https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg"
//   },
//   {
//     "title": "ProTable 高级表格",
//     "img": "https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg"
//   },
//   {
//     "title": "ProDescriptions 高级定义列表",
//     "img": "https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg"
//   },
//   {
//     "title": "ProList 高级列表",
//     "img": "https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg"
//   },
//   {
//     "title": "EditableProTable 可编辑表格",
//     "img": "https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg"
//   }
// ]
