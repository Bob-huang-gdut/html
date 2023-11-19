const routes = [
  {
    path: '/',
    name: '网页资源',
    component: './Home',
    icon: 'Html5TwoTone'
  },
  {
    name: '常见问题',
    path: '/faq',
    component: './Faq',
    icon: 'QuestionCircleTwoTone'
  },
  {
    name: '网页定制',
    path: '/customize',
    component: './Customize',
    icon: 'RedEnvelopeTwoTone'
  },
  {
    name: '计算器',
    path: '/calculator',
    component: './Calculator',
    icon: 'RedEnvelopeTwoTone'
  }
]
export default routes