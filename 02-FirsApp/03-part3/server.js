    // continuation
// on this part instead of sending just a text, we will be send a whole "".html" file

    // requesting the File System Module (Library) to be able to handle files.
var fs = require("fs");
var http = require("http");

function onRequest(request, response){
            // I told the browser that I want to feed an HTML file by: "Text/html"
    response.writeHead(200, {"Content-Type": "Text/html"});
        // Using the "fs" library to read the .html file
        // Parameters: path, options, callback
    fs.readFile("./index.html", null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write("Upss Nothing Here...");
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);
