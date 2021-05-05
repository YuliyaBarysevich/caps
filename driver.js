'use strict'

// const events = require('./events.js')

const io = require('socket.io-client')
const HOST = process.env.HOST || 'http://localhost:3000'
const capsConnection = io.connect(`${HOST}/caps`)

capsConnection.on('pickup', pickupHandler);

function pickupHandler(payload){
  setTimeout(() =>{
    console.log(`DRIVER: picked up ${payload.orderID}`)
    capsConnection.emit('in-transit', payload)

  }, 1500)

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    capsConnection.emit('delivered', payload)
  }, 3000)
}