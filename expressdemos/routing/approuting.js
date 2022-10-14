var express = require('express')
var app = require('express')

var app = express()

app.all('/',function (req,res,next) {
    res.write('all\n') // there's still something to read later on
    res.end('all\n') // this is all we need
    //next()  //needed to pass to the next functions
  })

app.get('/',function (req,res,next) {
    res.end('get')
  })

app.put('/',function (req,res,next) {
    res.end('put')
  })

app.post('/',function (req,res,next) {
    res.end('post')
  })

app.delete('/',function (req,res,next) {
    res.end('delete')
  })

app.listen(3000)