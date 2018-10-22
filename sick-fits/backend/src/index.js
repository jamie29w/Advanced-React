require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//TODO use epxress mdlwr to handle cookies (JWT)
// TODO use express mdlwr to populate current users

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  res =>
    console.log(`server is now running on port https:/localhost:${res.port}`)
);
