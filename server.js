
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

//CDN
var cloudinary = require('cloudinary');


cloudinary.config({ 
  cloud_name: 'rmishra', 
  api_key: '674386685933353', 
  api_secret: 'U-JdMPulnf3H1dKobheXevwjhio' 
});

app.use(express.static('public'));


app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

#app.get('/', function(request, response){
#    response.sendFile( path.join(__dirname + "/" +'home.html'));
#});
app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   var searchItem;
   response = {
      searchItem:req.query.searchItem
     //last_name:req.query.last_name
   };
  searchItem = response.searchItem;
 console.log("searchItem"+searchItem);
db.users.find({name: searchItem}, function(err, users) {
 console.log("finding");
  if( err || !users) console.log("No product found");
  else users.forEach( function(femaleUser) {
    console.log(femaleUser);
  } );
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
