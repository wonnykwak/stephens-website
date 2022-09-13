const express = require("express");
const app = express();
const PORT = process.env.PORT || 4747;
const path = require("path");
const publicPath = path.join(__dirname, "..", "public");

//app.use(express.urlencoded({extended: true}));

// app.use(express.static("/Users/wonnykwak/Desktop/interactive-resume/stephens-website/" + '/src'));


// app.use(express.static(thePath.join(__dirname, 'build')));
 app.use(express.static(publicPath), function (req, res, next) {
     console.log("Middleware public called")
     next();});
 // app.use(express.static("/Users/wonnykwak/Desktop/interactive-resume/stephens-website" + '/src')), function (req, res, next) {
 //     console.log("Middleware src called")
 //     next();};
 // app.use(express.static("/Users/wonnykwak/Desktop/interactive-resume/stephens-website" + '/src'));
 // app.use(express.static("/Users/wonnykwak/Desktop/interactive-resume/stephens-website" + '/components'));
 // app.use(function (req, res, next) {
 //     console.log("Middleware called")
 //     next();
 // });

 // app.use(express.static("public"));
 // app.use(express.static("src"));
 //
 //
 // app.use((req, res, next) => {
 //   res.sendFile(thePath.join(__dirname, "..", "build", "/index.html"));
 // })

// app.use('/index.js', express.static("/Users/wonnykwak/Desktop/interactive-resume/stephens-website/src/index.js"));
// app.use('/style.css', express.static("/Users/wonnykwak/Desktop/interactive-resume/stephens-website/public/style.css"));
// app.get('/user', function (req, res) {
//     console.log("/user request called");
//     res.send('Welcome to GeeksforGeeks');
// });
app.get("/", function(request, response){
    //response.send("hello");
  console.log("Server has started on port: " + PORT);
  //response.sendFile(__dirname + "/index.html");
//  response.sendFile(thePath.join(__dirname, "../public",  '/index.html'));
  response.sendFile(path.join(publicPath, '/index.html'));

});
// app.get("/", function(request, response){
//     //response.send("hello");
//   console.log("Server has started on port: " + PORT);
//   //response.sendFile(__dirname + "/index.html");
//   response.sendFile(thePath.join(__dirname,  '/index.html'));
//
// });
// //
// app.post("/", function(req, res) {
//   response.sendFile(thePath.join(__dirname, '/index.html'));
// });

//
// app.get("*", (req, res) => {
//      res.sendFile(__dirname + "404.html");
//      res.redirect("/");
// });

app.listen(PORT, function() {console.log(__dirname);});
