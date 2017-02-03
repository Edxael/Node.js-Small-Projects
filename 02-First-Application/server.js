    // requesting and saving the Module: http in to a variable.
var http = require("http");

    // Creating request function that will handle the requests from the server, it take two parameters:
    // 01- request
    // 02- restponse
function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello from Inside OR. Function");
    response.end();
}


    // creating server
    // to this server I chaine a listener that will pay attentino to port 8000
        // onRequest method will handle thoser requests.
http.createServer(onRequest).listen(8000);
