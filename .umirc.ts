import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '网页成品',
    locale: false,
  },
  routes: [
    {
      path: '/',
      name: '网页资源',
      component: './Home'
    },
    {
      name: '常见问题',
      path: '/faq',
      component: './Faq',
    },
    {
      name: '网页定制',
      path: '/customize',
      component: './Customize',
    }
  ],
  npmClient: 'pnpm',
});

