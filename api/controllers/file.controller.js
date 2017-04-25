var fileToRead = require('../data/restaurant-time.json');


module.exports.fileGetAll = function(req, res) {
     
   if (fileToRead) {
    console.log (fileToRead);
    res  
       .status(200)
       .json(fileToRead);
   } else {
     console.log("file not found");
    
   }

};


