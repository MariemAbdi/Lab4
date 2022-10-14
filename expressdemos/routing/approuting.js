var app = require('express')

var app = express()

app.all('/',function (req,res,next) {
    res.write('all\n')
    next()
  })

app.get('/',function (req,res,next) {
    res.end('get')
  })

app.put('/',function (req,res,next) {
    res.end('putget')
  })

app.post('/',function (req,res,next) {
    res.end('post')
  })

app.delete('/',function (req,res,next) {
    res.end('delete')
  })

app.listen(3000)