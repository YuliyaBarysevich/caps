# LAB - Class 11  


## Project: Event Driven Applications

### Author: Yuliya Barysevich

### Links and Resources

### Business Requirements

**Phase 1:**

1. As a vendor, I want to alert the system when I have a package to be picked up
2. As a driver, I want to be notified when there is a package to be delivered
3. As a driver, I want to alert the system when I have picked up a package and it is in transit
4. As a driver, I want to alert the system when a package has been delivered
5. As a vendor, I want to be notified when my package has been delivered


### Setup

- **.env requirements** 
i.e.
  - STORE_NAME=1-206-flowers
  - PORT=3000
  - HOST=http://localhost:3000

### How to initialize/run your application

- Download all dependencies `npm install`
- Create **.env** file and declare **STORE_NAME**, **PORT** and **HOST** variables 
- Need to start servers up in the right order in different terminal windows so that we can visually test things out.
  - `node caps.js`
  - `node vendor.js`
  - `node driver.js`



### WRRC


