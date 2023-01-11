const express = require('express')
const app = express()
const port = 3000
const path=require('path')
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('maps')
})
app.get('/maps', (req, res) => {
    res.render('maps')
})
app.get('/database', (req, res) => {
  res.render('database')
})
app.get('/search', (req, res) => {
  res.render('search')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
app.use( express.static( "public" ) );
app.use(express.static(path.join(__dirname,'public')));
