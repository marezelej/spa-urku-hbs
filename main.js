const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
 
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/portfolio', function (req, res) {
    res.render('portfolio')
})

app.get('/about', function (req, res) {
    res.render('about')
})

app.get('/blog', function (req, res) {
    res.render('blog')
})

app.get('/contact', function (req, res) {
    res.render('contact')
})
 
app.listen(3000)