
import type { UserConfigExport } from "@tarojs/cli";
export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      host: 'localhost',
      port: '10086',
      https: true,
      proxy: {
        '/api': {
          target: 'https://byk-test.billjc.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
        '/byk': {
          target: 'http://byk-dev.billjc.com',
          changeOrigin: true
        },
      },
    }
  }
} satisfies UserConfigExport

  