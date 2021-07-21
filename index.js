const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();

const port = process.env.PORT||8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/api', createProxyMiddleware({ target: 'https://mailtmc-test.chargebee.com', changeOrigin: true }));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
