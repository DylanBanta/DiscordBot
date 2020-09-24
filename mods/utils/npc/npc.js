var Race = require("./race.js");
var Class = require("./class.js");

const abilityScoreNames = ["Strength", "Dexterity", "Constitution", "Inteligence", "Wisdom", "Charisma"];
const shortAbilityScoreNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

class Npc {
  new() {
    var npc = {
      get statRolls() { //Returns array of 6 random int ability score rolls, currently not assigned to an ability
        var stats = [];
        for (var i = 0; i < 6; i++) {
          stats.push(Util.rollStat());
        }
        return stats;
      },
      get abilityScores() {
        //TODO return array of scores selected by "class"
      }
    }
  }

  test() {
    console.log(Race.defaultRace());
  }
}

module.exports = new Npc();