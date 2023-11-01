import { webpack } from './unplugin';
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.dynamic.@(js|jsx|ts|tsx)', '../src/**/*.story.tsx'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      './preset',
    ],
    framework: {
      name: '@storybook/react-webpack5',
      options: {},
    },
    webpackFinal: (config) => ({
        ...config,
        plugins: [...config.plugins, webpack({})],
    }),
    docs: {
      autodocs: 'tag',
    },
  };
  export default config;
  