const hapi = require('hapi');
const joi = require('joi');
const schema = {
  userid: joi.string().max(5),
  request: joi.valid('email', 'pet-name')
}
let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

server.route({
  path: '/',
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

server.start(() => { server.inject({
  url: '/?userid=143&request=raaar',
  method: 'GET'
}, (res) => {
  console.log(res.result)
  server.stop();
})});
