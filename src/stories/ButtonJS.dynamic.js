import { defineStories } from './dynamic';
import { dedent } from 'ts-dedent';

export default defineStories({
  baseCsf: dedent`
    import { Button } from "./Button";
    export default { component: Button };
  `,
  stories: async () => {
    const result = {};
    for (let i = 0; i < 3; i++) {
      result[`Story${i}`] = { args: { label: `Button ${i}` } };
    }
    return result;
  },
});
