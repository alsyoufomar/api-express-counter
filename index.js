const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
//Tell express we want to use the cors library
app.use(cors())

//Start up our server
const port = 3030
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`)
})

let count = 0

app.get('/counter', (req, res) => {
  res.json({ counter: count })
})

app.post('/counter/increment', (req, res) => {
  console.log('params', req.params)
  console.log('route', req.route)
  console.log('path', req.path)
  count++
  res.json({ counter: count })
})
app.post('/counter/decrement', (req, res) => {
  count--
  res.json({ counter: count })
})
app.post('/counter/double', (req, res) => {
  count = count ** 2
  res.json({ counter: count })
})
app.delete('/counter', (req, res) => {
  count = 0
  res.json({ counter: count })
})
app.put('/counter?', (req, res) => {
  console.log('params', req.params)
  console.log('route', req.route)
  console.log('path', req.path)
  count = 0
  res.json({ counter: count })
})

