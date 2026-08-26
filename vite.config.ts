import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const configuredBase = (
  globalThis as {
    process?: {
      env?: Record<string, string | undefined>;
    };
  }
).process?.env?.VITE_BASE_PATH;
const base =
  configuredBase && configuredBase.length > 0
    ? configuredBase.endsWith('/')
      ? configuredBase
      : `${configuredBase}/`
    : './';

export default defineConfig({
  base,
  plugins: [react()],
});
