const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/openai',
    createProxyMiddleware({
      target: 'https://xvuser27425-6065-resource.openai.azure.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/openai': '/openai' },
    })
  );
};
