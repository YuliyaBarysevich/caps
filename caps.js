'use strict'

require('dotenv').config()
const PORT = process.env.PORT || 3002;
const io = require('socket.io')(PORT)

//log the client id that has connected to app
io.on('connection', socket => {
  console.log('APP connected user:', socket.id)
})

const caps = io.of('/caps')




caps.on('connection', socket => {

  console.log('NAMESPACE connected user:', socket.id)

  socket.on('join', room => {
    console.log('room name:', room);
    socket.join(room)
  })


  socket.on('pickup', payload => {
    console.log('EVENT', {event: 'pickup', date: new Date(), payload: payload})
    caps.emit('pickup', payload)
  })

  socket.on('in-transit', payload => {
    console.log('EVENT', {event: 'in-transit', date: new Date(), payload: payload})
    caps.to(payload.store).emit('in-transit', payload)
  })

  socket.on('delivered', payload => {
    console.log('EVENT', {event: 'delivered', date: new Date(), payload: payload})
    caps.to(payload.store).emit('delivered', payload)
  })
})


// events.on('pickup', pickupHandler )
// events.on('in-transit', transitHandler)
// events.on('delivered', deliverydHandler)


// function pickupHandler(payload){
//   console.log('EVENT' + JSON.stringify({event: 'pickup', date: new Date(), payload: payload})) 
// }

// function transitHandler(payload){
//   console.log('EVENT' + JSON.stringify({event: 'in-transit', date: new Date(), payload: payload})) 
// }

// function deliverydHandler(payload){
//   console.log('EVENT' + JSON.stringify({event: 'delivered', date: new Date(), payload: payload})) 
// }