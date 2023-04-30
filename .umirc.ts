import { defineConfig } from '@umijs/max';
import routes from './routes';

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
  routes,
  npmClient: 'pnpm',
});

