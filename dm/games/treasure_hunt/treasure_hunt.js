var Treasure = require("treasure.js");
//var Rooms = require(".rooms.js");

function treasureHunter() {
  var treasureArr = Treasure.array();
  for (var i = 0; i < treasureArr.length; i++) {
    console.log("treasureArr[" + i + "] | " + treasureArr[i]);
  }
}