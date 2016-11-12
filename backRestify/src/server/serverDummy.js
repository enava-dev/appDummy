var restify = require('restify'),
    server = restify.createServer({serverName: "Test restify-routing", serverVersion: "0.1.0"})
 
server.use(restify.queryParser())
server.use(restify.bodyParser())
 
var RestifyRouter = require('restify-routing')
var rootRouter = new RestifyRouter()
rootRouter.get('/', function(req, res){
    res.send(200, 'Hello world!')
})
    
// Sub Routers 
var subRouter = new RestifyRouter()
subRouter.get('/:username', function(req, res){
    res.send(200, 'Hello ' + req.params.username)
})
 
// Build subRouter under sub-path '/user' 
// this will add restify native route map '/user/:username' 
rootRouter.use('/user', subRouter)
 
// From version 0.3.3, endpoints will not get applied until explicitly call **applyRoutes** 
// and CAN NOT be modified anymore. 
rootRouter.applyRoutes(server)
 
server.listen(8080, function() {
  console.log('Restify server listening on port ' + server.address().port);
  console.log(server.name, 'listening at', server.url);
  // console.log('server:', server);
  console.log('server.domian:', server.domain);
  console.log('server.name:', server.name);
  // console.log('server.router:', server.router);
  console.log('server.routes:', server.routes);
  console.log('server.acceptable:', server.acceptable);
})