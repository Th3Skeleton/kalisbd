// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const youtubeApi = require("./public/api/yt");

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.set('view engine', 'ejs');
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render('index');
});

app.use("/yt", youtubeApi);
app.use('/public', express.static('public'))

// listen for requests :)
const listener = app.listen(1337, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
