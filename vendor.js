'use strict'

// const events = require('./events.js')
const io = require('socket.io-client')
const faker = require('faker');
require('dotenv').config()

const HOST = process.env.HOST || 'http://localhost:3000'
const capsConnection = io.connect(`${HOST}/caps`)


const store = '1-206-flowers';
const store2 = 'acme-widgets';


capsConnection.emit('join', store)
capsConnection.emit('join', store2)


capsConnection.on('delivered', thankYou)
function thankYou(payload){
  console.log('VENDOR: Thank you for delivering', payload.orderID)
}

setInterval(() => {
  let fakeOrder = {
    storeName: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
  }
  capsConnection.emit('pickup', fakeOrder)
}, 5000);

setInterval(() => {
  let fakeOrder = {
    storeName: store2,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
  }
  capsConnection.emit('pickup', fakeOrder)
}, 5000);

