this project contains 2 branches

1 : backend
2 : frontend

Backend has the below following npm package dependency to make the backend code to compile without any issue and install mongoDB 

"dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.6.8"
}

To install the above package type npm install or npm i body-parse cors express mongoose

express: Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.

body-parser: Node.js body parsing middleware.

cors: CORS is a node.js package for providing an Express middleware that can be used to enable CORS with various options. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

mongoose: A Node.js framework which lets us access MongoDB in an object-oriented way.


frontend is built using create-react-app 

Create React App is a great fit for:

Learning React in a comfortable and feature-rich development environment.
Starting new single-page React applications.
Creating examples with React for your libraries and components.


You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

npx
npx create-react-app my-app
