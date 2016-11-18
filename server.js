const hapi = require('hapi');
const joi = require('joi');
const inert = require('inert')
const schema = {
  userid: joi.string().max(5),
  password: joi.valid('email', 'pet-name')
}
let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

server.register(inert, (err) => {
  if (err) { throw err; }
    server.route([{
      path: '/',
      method: 'GET',
      handler: (req, rep) => {
        rep.file('./public/index.html')
      }
    },
    {
      path: '/{file}',
      method: 'GET',
      handler: (req, rep) => {
        rep.file(`./public/${req.params.file}`)
      }
  }])
})

server.route({
  path: '/login',
  method: 'GET',
  handler: (req, rep) => {
    rep('hi')
  },
  config: {
    validate: {
      query: schema
    }
  }
})

server.start((err) => {
  if (err) { throw err }
  console.log(`server is running on ${server.info.uri}`)
})
