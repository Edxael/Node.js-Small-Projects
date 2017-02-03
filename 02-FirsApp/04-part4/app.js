    // In this file we will handle the request of the app from the server.
// from here we will export a function that will be used on the server.

var url = require("url");

var fs = require("fs");

function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write("Upss Nothing Here...");
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest:function(request, response){
        response.writeHead(200, {"Content-Type": "text/html"});

        var path = url.parse(request.url).pathname;
        switch (path) {
        case '/':
            renderHTML('./index.html', response);
        break;
        case '/final':
            renderHTML('./final.html', response);
        break;
        default:
            response.writeHead(404);
            response.write('Route not defined');
            response.end();
        }
    }
};
