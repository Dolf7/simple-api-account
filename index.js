import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import accountRoutes from './routes/account.js'
import uploadImgRoutes from './routes/uploadImg.js'
import http from 'http';
import { Server } from "socket.io"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const server = http.createServer(app);
const io = new Server(server, {cors:{origin: '*'}});

var corOption = {
    origin: `https://localhost${PORT}`,
}

// middleware
app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

//test
app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

//server run
app.use('/account', accountRoutes);
app.use('/upload', uploadImgRoutes);


server.listen(PORT, () =>
{
    console.log(`server is running on PORT : ${PORT}`);
})


//Web socket configuration
io.on('connection', (socket) =>
{
    console.log('User Connceted');
    //HANDSAKE
    socket.emit('hello-from-server', {hello : "Hello FROM SEVER"});
    socket.on('hello-from-client', (msg)=>{console.log(msg)})

    //FOR RECEIVENG THE MESSSAGE
    socket.on('msg', (msg)=>console.log(msg));

    socket.on('disconnected', ()=>{console.log(`user disconected`)});
})
