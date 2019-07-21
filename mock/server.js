// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router(require('./db.js')())
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)

// server.listen(3000, function() {
//   console.log('JSON Server is running at: http://127.0.0.1:3000/')
// })

const path = require('path')
const chalk = require('chalk')
const jsonServer = require('json-server')
const apis = require('../src/api/index')

const routes = {}

for (const key in apis) {
  // const arr = key.split('/')
  // const route = key
  // const filename = arr[arr.length - 1]
  // routes[route] = './data/' + filename + '.json'

  const route = apis[key]
  routes[route] = './data/' + key + '.json'
}

console.log(chalk.cyan(' 🐹  ROUTES LISTS '))
console.dir(routes)
console.log(chalk.cyan(' 🐹  END ROUTES LISTS '))
// routes expect
// {
//   '/product/lists': './data/lists.json',
// }

var server = jsonServer.create()
var middlewares = jsonServer.defaults()

server.use(middlewares)

Object.keys(routes).map(name => {
  let json = path.resolve('./mock/', routes[name])
  server.use(name, (req, res) => {
    res.sendFile(json)
  })
})

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }

  next()
})

server.listen(3000, function() {
  console.log('JSON Server is running at: http://127.0.0.1:3000/')
})
