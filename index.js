const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();
var cors = require("cors");
const port = process.env.PORT||8000;
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/api', createProxyMiddleware({ target: 'https://mailtmc-test.chargebee.com', changeOrigin: true }));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
