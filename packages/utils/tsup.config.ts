import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'data-masking': 'src/data-masking.ts',
    'sanitize': 'src/sanitize.ts',
    devices: 'src/devices.ts',
    envs: 'src/envs.ts',
    format: 'src/format.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
});
