const http = require("http");
const app = require("./src/app");

const port = process.env.port || 2000;

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}`)
);
