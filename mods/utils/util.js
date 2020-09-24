var Dice = require("tabletop-dice"); //Dice Roller from https://www.npmjs.com/package/tabletop-dice
var Npc = require("./npc/npc.js");
var config = require("/app/config.json"); //Config json file
var fs = require("fs"); //Node File System

class Util {

  //Returns a random number, 0 and max are inclusive
  rand(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
  }

  //Returns a random positive intiger, min is exclusive max is inclusive
  randPos(max) {
    if (max < 0) { //Max should never be negative. If Max is == 0 || == 1 result will always be 1
      max = 1;
    }
    max -= 1;
    return 1 + (Math.floor(Math.random() * Math.floor(max + 1)));
  }

  //Returns a random number min and max are inclusive
  randBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //Returns a random value from an array
  randFromArr(arr) {
    var randNum = rand(arr.length - 1);
    console.log("randFromArr randNum | " + randNum);
    return arr[randNum];
  }

  rollStat() {
    //TODO Different Rule Sets
    var roll;
    var rolls = [];
    var quantity;
    var smallest = 6;
    var total = 0;

    for (var i = 0; i < quantity; i++) {
      roll = randPos(6);
      if (roll < smallest) {
        smallest = roll;
      }
      total += roll;
      rolls.push(roll);
    }

    total -= smallest;
    return total;
  }

  minMaxWeighted(weightObj) {

    var minInput = weightObj.minInput;
    var maxOutput = weightObj.maxInput;

    var weights = weightObj.weights;

    var minAdd = weightObj.minAdd;
    var minSub = weightObj.minSub;
    var maxAdd = weightObj.maxAdd;
    var maxSub = weightObj.maxSub;

    var minMult = weightObj.minMult;
    var maxMult = weightObj.maxMult;
    var minDiv = weightObj.minDiv;
    var maxDiv = weightObj.maxDiv;

    var mathArr = [
      [minAdd, minSub, maxAdd, maxSub],
      [minMult, maxMult, minDiv, maxDiv]
    ];


    var zeroArr;
    var oneArr;

    //Check all mathArr is correct length
    for (var i = 0; i < mathArr.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (mathArr[i][j].length != weights.length) { //If incorrect length set to default based on weights.length
          if (i == 0) {
            zeroArr = [];
            for (var k = 0; k < weights.length; k++) {
              zeroArr.push(0);
            }
            mathArr[i][j] = zeroArr;
          }
          else if (i == 1) {
            oneArr = [];
            for (var k = 0; k < weights.length; k++) {
              oneArr.push(1);
            }
            mathArr[i][j] = oneArr;
          }
        }
      }
    }

    //Math
    //get weightGroup
    var weightGroup;
    var r = randPos(weights[weights.length - 1]); //Random number 1 to listMax

    for (var l = 0; l < weights.length; l++) {
      if (r < weights[l]) {
        break; //Exits the for loop which results in l being our current weight group
      }
    }

    weightGroup = l;

    //These 2 Arrays hold positive and negative ints
    var _min = [];
    var _max = [];

    var min_input;
    var max_input;

    //Addition
    _min.push(minAdd[weightGroup]);
    _max.push(maxAdd[weightGroup]);

    //Subtraction
    _min.push(0 - minSub[weightGroup]);
    _max.push(0 - maxSub[weightGroup]);

    //Multiplication
    if (minInput == 0 && minMult[weightGroup] > 1) {
      _minInput = 1;
    }
    else {
      _minInput = minInput;
    }

    if (maxInput == 0 && maxMult[weightGroup] > 1) {
      _maxInput = 1;
    }
    else {
      _maxInput = minInput;
    }

    _min.push((_minInput * minMult[weightGroup]) - _minInput);
    _max.push((_maxInput * maxMult[weightGroup]) - _maxInput);

    //Division
    _min.push((minInput / minDiv[weightGroup]) - minInput);
    _max.push((maxInput / maxDiv[weightGroup]) - maxInput)

    console.log("_min arr | " + _min);
    console.log("_max arr | " + _min);

    var finalMin = minInput;
    var finalMax = maxOutput;

    for (var m = 0; m < _min.length; m++) {
      finalMin += _min[m];
      finamMax += _max[m];
    }

    return randBetween(finalMin, finamMax);

  }

  weightMath() {

  }

  MessageHandler(message) { //Handles incoming messages and executes appropriate commands
    var prefix = config.prefix; //Prefix from config.json file
    var user = message.member.displayName; //User who posted the message
    var input = message.content; //Message content
    var dOutput; //Initialize the eventual output variable

    if (input.startsWith(prefix)) { //Checks if the input begins witht he prefix, if so, seperates out prefix from the Command
      //Splits command after prefix. (input "!1" becomes "1");
      var input = input.split(prefix)[1];

      if (input == "Save") {
        //Dm.writeFile("./Test.txt", "Test Data");
        //message.reply("Saved Test Data.");
      }

      if (input == "npc") {
        this.log("New NPC");
        Npc.test();
      }

      var dBool = false;
      //Check for Dice Roll Command
      dBool = input.includes("d");
      if (dBool) { //TODO make sure to only call this when actually rolling a die
        dOutput = Dice.diceCommand(input);
        message.reply(dOutput);
      }
    }
  }

  log(data) {
    console.log(data);
  }
}

module.exports = new Util();