const http=require('http');
const app= require("./app");
const ports= process.env.PORT || 4000;
const { initializeSocket } = require('./socket');

const server= http.createServer(app);

initializeSocket(server);

server.listen(ports, ()=>{
    console.log(`Server is running on port ${ports}`);
});