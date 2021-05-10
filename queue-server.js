'use strict'

require('dotenv').config();
const uuid = require('uuid').v4;
const PORT_QUEUE = process.env.PORT_QUEUE || 3333;
const io = require('socket.io')(PORT_QUEUE)

const caps = io.of('/hub')

const queue = {};

caps.on('connection', socket => {

  socket.on('recieved', payload => {
    delete queue[payload.store][payload.event][payload.messageId]
    console.log('order has been deleted')
  })

  socket.on('getAll', () => {
    Object.keys(queue[payload.store][payload.event]).forEach(messageId => {
      socket.emit(queue[payload.store][payload.event][messageId])
    })
  })

  // socket.on('delivered', payload => {
  //   queue[payload.store]['delivered'][payload.messageId] = payload.message;
  //   caps.emit({messageId: payload.messageId, payload: payload})
  // })

})