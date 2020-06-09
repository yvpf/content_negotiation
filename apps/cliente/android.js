var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'get',
    headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
}
/*
var html = 'nome=José'; //x-www-form-urlencoded
var json = {nome: 'José'};
var string_json = JSON.stringify(json);
*/
var buffer_corpo_res = [];

var req = http.request(opcoes, function(res){
    res.on('data', function(pedaco){
        buffer_corpo_res.push(pedaco);
    });

    res.on('end', function(){
        var corpo_response = Buffer.concat(buffer_corpo_res).toString();
        console.log(corpo_response);
    });
});



//req.write(string_json);

req.end();