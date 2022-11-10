import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    './src/index',
  ],
  clean: true,
  rollup: {
    emitCJS: true
  },
  // Change outDir, default is 'dist'
  // outDir: 'build',
  // Generates .d.ts declaration file
  declaration: true,
})