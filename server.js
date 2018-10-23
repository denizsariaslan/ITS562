var http = require('http');

function onRequest(request, response){
    //see https://developer.mozilla.org/en-US/docs/Glossary/Response_header
    var header = {
        "Content-Type" : "text/html; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Set-Cookie": "secretKey=99999; expires=Mon, 30-Oct-2019 16:06:00 GMT; Max-Age=31449600; Path=/; secure"
    };
 
    response.writeHead(200, header);

    //write the contents
    response.write("<h1>My Heading 1</h1> just some text");

    response.end();
}

var server = http.createServer(onRequest);
server.listen(8080, "localhost");

//to run this file, type "node server.js" in your terminal / command window.
//additional command line options to run the node server can be found by typing "ndoe --help"