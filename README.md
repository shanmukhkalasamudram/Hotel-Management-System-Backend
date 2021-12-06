# Hotel-Management-System-Backend

API to book hotel rooms, Manage which was created using Node,Express Js and MongoDB


## Functionalities & Features 

### User Module
* Login
* Sign Up 
* Search for a hotel
* Book a Hotel 
* Payment Gateway

### Admin Module
* Login
* Sign Up 
* Insert Hotel
* Delete Hotel
* Update rooms in a hotel


### Installation

$ git clone https://github.com/shanmukhkalasamudram/Hotel-Management-System-Backend.git
$ npm install
$ node app



### Postman Collections
https://go.postman.co/workspace/temp~50a672fb-e37d-4833-bda7-713001c7b9aa/collection/18008013-3022e517-a9cc-4379-91f7-2bf895b99418


## Routes
### Authentication 
| URL                             | Method | Description                                              | Content (Body)          |
|---------------------------------|:-----------:|----------------------------------------------------------|-------------------------|
| /signup              |     POST    | Registers a user           | `username` `firstname` `lastname` `email` `password`        |
| /signin                 |     POST    | Login a user   | `email` `password`          |
| /signout             |    GET       | Sign out a user   | 




### Admin Module

| URL                             | Method | Description                                              | Content (Body)          |
|---------------------------------|:-----------:|----------------------------------------------------------|-------------------------|
| /hotels             |     POST    | Create a  a hotel           | `name` `address` `startsfrom` `rooms`         |
| /hotels             |     GET     | Get all Hotels available            |  'name' |
| /hotels/:id              |   PUT       | Update Hotel details               | 
| /hotels/:id              |   DELETE       | Delete Hotel details               | 



| URL                             | Method | Description                                              | Content (Body)          |
|---------------------------------|:-----------:|----------------------------------------------------------|-------------------------|
| /rooms             |     POST    | Create a Room in a hotel           | `hotel` `number` `type` `price` `maxGuests`        |
| /rooms             |     GET     | Get all Rooms available            |  'hotel' |
| /rooms              |   PUT       | Update Room details               | 


### User Module 

| URL                             | Method | Description                                              | 
|---------------------------------|:-----------:|----------------------------------------------------------|
| /book             |     POST    | Book a hotel          | 
| /book             |     GET     | Get all hotels            |  



### Technologies Used 
* [Node.js]- Backend Framework
* [Express]- Network 
* [MongoDB]- DataBase
* [Stripe]- Payment API
* [POSTMAN]- Testing



[Node.js]: <http://nodejs.org>
   [Express]: <http://expressjs.com>
   [MongoDB]:<https://www.mongodb.com/>
