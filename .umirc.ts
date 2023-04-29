import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'html',
    locale: false,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: '网页作业资源',
      component: './Home',
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

