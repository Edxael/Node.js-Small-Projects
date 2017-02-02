
      // Requesting Node Modules
var nodeModule_1 = require("fs");
var nodeModule_2 = require("https");

      // just holding the location in a variable Not using API's yet.
var imageUrl = "https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/Enders-Game-Poster-Header.jpg";

      // saving image in local directory
var imageFile = nodeModule_1.createWriteStream(__dirname + "/node-ender.jpg");

      // The code that actually goes to the Internet and grabs the file.
      // Using the https Module tha Node Provides
      // This module has a function name .get() that goes to the internet and get something
      // The funcion .get() we will pas two arguments
            // 01 - from were ".get()" will get the information
            // 02 - Instructions on what we want this function to do with that information.
var request = nodeModule_2.get( imageUrl, function(response){
      response.pipe(imageFile);
});



      This utility will walk you through creating a package.json file.
      It only covers the most common items, and tries to guess sensible defaults.

      See `npm help json` for definitive documentation on these fields
      and exactly what they do.



             // Then Press ENTER as many times as need until the process ends