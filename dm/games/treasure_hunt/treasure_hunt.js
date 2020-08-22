//Requirements
var Treasure = require("./treasure.js");
var fs = require("fs");

class Th { //Threasure Hunt Class

  test() {
    console.log("TrHunt");
    var arr = Treasure.array();
    var json = JSON.stringify(arr);
    fs.writeFile("./treasure.json", arr);
    console.log("TrHunt Exit");

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