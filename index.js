'use strict'

const express = require('express')
const cors = require('cors')
const faker = require('faker')
const io = require('socket.io-client')
require('dotenv').config()
const HOST = process.env.HOST || 'http://localhost:3000'

const capsConnection = io.connect(`${HOST}/caps`);

const app = express();
const PORT_API = process.env.PORT_API || 3003;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/pickup', (req, res) => {
  let fakeOrder = req.body || {
    storeName: process.env.STORE_NAME || '1-800-flowers',
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
  }

  capsConnection.emit('pickup', fakeOrder);
  res.status(200).send('Order is confirmed')
});

app.listen(PORT_API, () => {
  console.log(`SERVER is up ${PORT_API}`)
})