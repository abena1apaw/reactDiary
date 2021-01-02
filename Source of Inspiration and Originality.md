Source of Documentation

I entered closed the route for the Diary into the login/auth app in the dashboard.js

In the package json of the backend, I installed the new dependencies and added a concurrent package to run two apps at one time.
"Diary-install": "npm install --prefix Diary",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
"Diary": "npm start --prefix Diary",
    "dev": "concurrently \"npm run server\" \"npm run client\" \"npm run Diary\""
  },
  "author": "Abena",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "concurrently": "^5.2.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "is-empty": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.25",

I added Diary. js to the api folder to get Diarys saved. 

I added bootstrap to the Diary by importing bootsrap into the router.js in the components of the Diary file.
I added bootstrap to the client side by importing the same bootstrap. I added a Navbar. js to the Diary and client. I included a footerjs to the Diary and client.
I modified the router by removing a div class to make the navbar broader. I also deleted the edit post from router.js. I changed the css for the login/auth app.
I added a proxy link to the package JSON to the Diary and client.

I added a Diary route to the server.js to save to mongo. I added cors to the server.js
