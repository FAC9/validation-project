const hapi = require('hapi');
const port = process.env.PORT || 4000;

const server = new hapi.Server();

server.connection({port: port});

server.register(require('inert'), (err) => {
  if(err) throw err;

  server.route({
    method: 'GET',
    path: '/{files*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, response) => {
    response(`Hello, ${encodeURIComponent(request.params.name)}!`);
  }
})

server.start( (err) => {
  if(err) throw err;
  console.log(`Server is running on: ${server.info.uri}`);
})
