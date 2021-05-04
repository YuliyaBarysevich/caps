'use strict'

const events = require('./events.js')
const faker = require('faker');
const dotenv = require('dotenv')
require('dotenv').config()

events.on('delivered', thankYou)

setInterval(() => {
  let fakeOrder = {
    storeName: process.env.STORE_NAME,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
  }

  events.emit('pickup', fakeOrder)
}, 5000);


function thankYou(){
  console.log('Thank you!')
}