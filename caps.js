'use strict'

const events = require('./events.js')

require('./vendor.js')
require('./driver.js')


events.on('pickup', pickupHandler )
events.on('in-transit', transitHandler)
events.on('delivered', deliverydHandler)


function pickupHandler(payload){
  console.log('EVENT' + JSON.stringify({event: 'pickup', date: new Date(), payload: payload})) 
}

function transitHandler(payload){
  console.log('EVENT' + JSON.stringify({event: 'in-transit', date: new Date(), payload: payload})) 
}

function deliverydHandler(payload){
  console.log('EVENT' + JSON.stringify({event: 'delivered', date: new Date(), payload: payload})) 
}