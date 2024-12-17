const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy to User Service
app.use(
  "/users",
  createProxyMiddleware({ target: "http://localhost:5001", changeOrigin: true })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
