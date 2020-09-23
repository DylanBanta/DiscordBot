//Requirements
const mongoose = require("mongoose");
//mongoose.connect(const uri = "mongodb://YourDnDDylan:<password>@discordbotcluster.khtsq.mongodb.net/<dbname>?retryWrites=true&w=majority")


var Treasure = require("./treasure.js");
var fs = require("fs");

class Th { //Threasure Hunt Class

  test() {
    console.log("TrHunt");
    console.log(fs);
    fs.writeFile('./helloworld.txt', 'Hello World!', function(err) {
      if (err) return console.log(err);
      console.log('Hello World > helloworld.txt');
    });

    //var arr = Treasure.array();

    //var json = JSON.stringify(arr);
    /*
    //var Rooms = require(".rooms.js");
    var Treasure = require("./treasure.js");

    var treasureArr = Treasure.array();
    for (var i = 0; i < treasureArr.length; i++) {
      console.log("treasureArr[" + i + "] | " + treasureArr[i]);
    }
    */
  }
}

module.exports = new Th();