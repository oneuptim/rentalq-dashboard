console.log('Server Hit!');
// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
// app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/src'));
// Start the app by listening on the default
// Heroku port
// app.listen(process.env.PORT || 8080);

app.listen(4200, function(){
  console.log("BeltExam App Listening on Port 8000");
});

