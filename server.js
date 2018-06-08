var express = require('express');
var https = require('https');
var app = express();

var HOST = 'api.mercadolibre.com';

app.get('/countries/:id', function (req, res) {

    var callback = function(response){
        var body = '';
        response.on('data', function(data) {
            body += data;
        });
        
        response.on('end', function() {
            res.setHeader('Content-Type', 'application/json');
            res.end(body);
        });
    };

    var options = {
        host: HOST,
        path: '/classified_locations/countries/' + req.params.id,
    }

    var req = https.get(options, callback);
    req.end();
});

app.get('/states/:id', function (req, res) {

    var callback = function(response){
        var body = '';
        response.on('data', function(data) {
            body += data;
        });
        
        response.on('end', function() {
            res.setHeader('Content-Type', 'application/json');
            res.end(body);
        });
    };

    var options = {
        host: HOST,
        path: '/classified_locations/states/' + req.params.id,
    }

    var req = https.get(options, callback);
    req.end();
});


app.get('/cities/:id', function (req, res) {

    var callback = function(response){
        var body = '';
        response.on('data', function(data) {
            body += data;
        });
        
        response.on('end', function() {
            res.setHeader('Content-Type', 'application/json');
            res.end(body);
        });
    };

    var options = {
        host: HOST,
        path: '/classified_locations/cities/' + req.params.id,
    }

    var req = https.get(options, callback);
    req.end();
});

var server = app.listen(8081, function () {

  var host = "localhost";
  var port = "8081";

  console.log("Escuchando en http://%s:%s", host, port);

});