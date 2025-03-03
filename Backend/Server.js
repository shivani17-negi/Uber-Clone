const http = require('http');
const app = require('./App');
const Port = process.env.PORT||3000;

const server = http.createServer(app);

server.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
});