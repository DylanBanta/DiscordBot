var Treasure = require("./treasure.js");

class TrHunt {

  test() {
    console.log("TrHunt");


    var goldChest = new Treasure("Coins", 600, "A treasure chest filled with gold coins");
    console.log(goldChest);
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