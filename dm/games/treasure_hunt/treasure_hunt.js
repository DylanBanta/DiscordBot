class TrHunt {
  test() {
    //var Rooms = require(".rooms.js");
    var Treasure = require("./treasure.js");

    var treasureArr = Treasure.array();
    for (var i = 0; i < treasureArr.length; i++) {
      console.log("treasureArr[" + i + "] | " + treasureArr[i]);
    }
  }
}

module.exports = new TrHunt();