import type { DynamicConfig } from './types';
export const defineStories = async (config: DynamicConfig) => {
  console.log(JSON.stringify(config));
  return config;
};
export * from './types';
