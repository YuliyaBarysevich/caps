'use strict'

const events = require('./events.js')

events.on('pickup', pickupHandler);

function pickupHandler(payload){
  setTimeout(() =>{
    console.log(`DRIVER: picked up ${payload.orderID}`)
    events.emit('in-transit', payload)

  }, 1000)

  setTimeout(() => {
    console.log('Delivered');
    events.emit('delivered', payload)
  }, 3000)
}