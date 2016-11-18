const hapi = require('hapi');
const joi = require('joi');
const inert = require('inert')

const schema = {
  userid: joi.string().email(),
  password: joi.string().regex(/((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*){6,}/)
}

const server = new hapi.Server();

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
  path: '/signup',
  method: 'GET',
  handler: (req, rep) => {
    rep('Success, your username and password are great!')
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
