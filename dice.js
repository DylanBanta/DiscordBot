class Dice {

  getRandom(max) {
    return Math.round(Math.random() * (maxValue - 1)) + 1;
  }

  roll(count, val) {
    var arr = [];
    var total = 0;
    for (var i = 0; i < count; i++) {
      arr.push(getRandom(val));
    }
    return arr;
  }

  module.exports = new Dice();