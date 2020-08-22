var Treasure = require("./treasure.js");

class TrHunt {

  test() {
    console.log("TrHunt");
    var arr = Treasure.array();
    for (var i = 0; i < arr.length; i++) {
      console.log("arr[" + i + "] | " + arr[i]);
      console.log(arr[i]);
    }
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

module.exports = new TrHunt();