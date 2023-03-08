import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import envCompatible from 'vite-plugin-env-compatible'


// Without it dynamic require is not possible in config file
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  // resolve: {
  //   alias: {
  //     './runtimeConfig' : './runtimeConfig.browser',
  //   },
  // },

  // optimizeDeps: {
  //   esbuildOptions: {
  //     //Node.js global to browser globalThis
  //     define: {
  //       global: 'globalThis',
  //     },
  //     //enable esbuild polyfill plugins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         buffer: true,
  //       }),
  //     ]
  //   },
  // },
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  // build: {
  //   outDir: 'build',
  // },
  build: {
    commonjsOptions: {
      defaultIsModuleExports(id) {
        const module = require(id);
        if (module?.default) {
          return false;
        }
        return "auto";
      },
    },
  },
  plugins: [
    react(),
    envCompatible(),
    // svgrPlugin({
    //   svgrOptions: {
    //     icon: true,
    //     // ...svgr options (https://react-svgr.com/docs/options/)
    //   },
    // }),
  ],
});