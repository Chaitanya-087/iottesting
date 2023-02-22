const Gpio = require('onoff').Gpio;
const LED = new Gpio(4,'out');
const {Server} = require('socket.io');
const express = require('express');
app = express();
const http = require('http');
const httpServer = http.createServer(app);
const io =  new Server(httpServer, {
cors: {
   origin: '*',
  }
})

const PORT = 3000;
app.use(express.json());

app.get('/' , (req,res) => {
     res.send({"message":"hello, world!"})
})

app.get('/light/on', (req,res) => {
	LED.writeSync(1);
	res.send({status:'Ok',data:{light:'on'}})
})

app.get('/light/off', (req,res) => {
	LED.writeSync(0);
	res.send({status: 'Ok', data:{light: 'off'} })
})


app.listen(PORT,()=> {  
  console.log(`server running at ${PORT}`);
})
