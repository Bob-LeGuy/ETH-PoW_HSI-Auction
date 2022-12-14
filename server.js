var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/build')))

// this * route is to serve project on different page routes except root `/`
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Connected on : ' + port)
});
