module.exports = {
  devServer: {
    port: 8081
  }
}

// module.exports = {
//   devServer: {
//     host: '0.0.0.0', // Allow LAN access
//     port: 8081,       // or whatever port you want Vue to run on
//     proxy: {
//       '/api': {
//         target: 'http://192.168.100.116:8080',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' }
//       }
//     }
//   }
// }
