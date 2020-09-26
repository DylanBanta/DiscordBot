var Util = require("/app/mods/utils/util.js"); //Utils

function getGender(ratio) {
  switch (ratio) {
    case -1:
      return "Unknown";
      break;
    case 0:
      return "Female";
      break;
    case 100:
      return "Male";
      break;
    case null:
    case undefined:
    case "":
      return "Error Invalid Inputs";
      break;
    default: //Does not match any pre-defined output
      //Get Random Gender
      var r = Util.rand(100);
      console.log("r | " + r);
      if (r < ratio) {
        return "Male";
      }
      else {
        return "Female";
      }

      //Should Not Get Here. Return Error
      return "Error";
      break;
  }
}

function getName(gender, maleNames, femaleNames) {
  switch (this.gender) {
    case "Male":
      return Util.randFromArr(this.maleNames);
      break;
    case "Female":
      return Util.randFromArr(this.femaleNames);
      break;
    default:
      return "Error Determining Name";
      break;
  }
}


class Race {

  defaultRace() {

    var race = {
      race: [""], //Race Name String Array.
      racePlural: "", //Race Plural Name String
      maleNames: ["", ""], //Male Name String Arr
      femaleNames: ["", ""], //Female Name String Arr
      genderRatio: 50, //Percentage of race born as male. 0 is always female, 100 is always male, -1 is unknown gender. Int
      get gender() { //Returns one of the following Strings "Male", "Female", or "Unknown" based on gender ratio
        getGender(this.genderRatio);
      },
      get name() { //Returns a name string from appropriate gender name array
        return getName(this.gender, this.maleNames, this.femaleNames);
      },
      abilityAdjust: [0, 0, 0, 0, 0, 0], //Racial Adjustments to be applied after stats are assigned. Order : [STR, DEX, CON, INT, WIS, CHA], Excepts Positive and Negetive Int
      speed: 0, //Land Speed. Must be >= 0
      swimSpeed: 0, //Swim Speed. 0 = Can't Swim Must be >= 0
      flySpeed: 0, //Fly Speed. 0 = Can't Fly Must be >= 0
      favoredClass: "", //Race's Favored Class String
      racialPersonality: "", //Describe's racial personality String //TODO Find out how to use this meaninfully
      alignmentMod: [
        ["", "N"],
        ["", "N"]
      ], //Multidimensional Array. Contains weights for use with alignment. [["Always", "L"],["Tend towards", "G"]]
      //TODO Create Alignment
      racialReligion: ["Any"], //Array with the names of a god or gods worshiped by this race. "Any" Worships any gods. "None" Worships no gods.
      autoLanguages: [""], //Array of strings with the names of automatic languages for this race
      bonusLanguages: [""], //Array of strings with the names of bonus languages for this race
      size: "", //String. Accepts "Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"
      minLvl: 0, //Minimum level to generate this race Int Must be >=0
      maxLvl: 20, //Maximum leve to generate this race Int must be >0
      get level() { //Object to calculate the level of the level of the npc
        var customWeights = { //The values below are the default values for lv 0 to 20 characters
          minInput: this.minLvl,
          maxInput: this.maxLvl,
          weights: [50, 75, 85, 99, 100],
          minMult: [1, 1, 1, 10, 20], //length must be = weights.length;
          maxDiv: [5, 4, 2, 1, 1] //length must be = weights.length;
        };
        return Util.minMaxWeighted(customWeights);
      },
      minHeight: 1, //Minimum height in inches. Requires positive int
      maxHeight: 1, //Maximum height in inches. Requires positive int
      get height() {
        var customWeights;

        if (this.gender == "Male") { //Males tend to be taller on average then females in most races
          customWeights = {
            minInput: this.minHeight,
            maxInput: this.maxHeight,
            weights: [10, 60, 80, 90, 100],
            minAdd: [0, 0, 4, 8, 12],
            maxSub: [12, 0, 0, 0, 0],
          };
        }
        else if (this.gender == "Female") {
          customWeights = {
            minInput: this.minHeight,
            maxInput: this.maxHeight,
            weights: [10, 60, 80, 90, 100],
            minAdd: [12, 0, 0, 0, 0],
            maxSub: [0, 12, 8, 4, 0],
          };
        }
        else {
          customWeights = {
            minInput: this.minHeight,
            maxInput: this.maxHeight
            //Because we don't use any min/max math from Util minMaxWeighted we get an unweighted random result
          }
        }
        return Util.minMaxWeighted(customWeights);
      },
      minWeight: 1, //Maximum Weight in lbs. Requires positive int
      maxWeight: 1, //Maximum Weight in lbs. Requires positive int
      get weight() {
        if (this.gender == "Male") { //Males on average tend to be heavier than females for most races
          var customWeights = {
            minInput: this.minWeight,
            maxInput: this.maxWeight,
            weights: [10, 60, 80, 90, 100],
            minAdd: [0, 60, 80, 0, 0],
            maxSub: [20, 0, 0, 0, 40]
          };
        }
        else if (this.gender == "Female") {
          var customWeights = {
            minInput: this.minWeight,
            maxInput: this.maxWeight,
            weights: [10, 60, 80, 90, 100],
            minAdd: [20, 0, 0, 0, 40],
            maxSub: [0, 100, 125, 0, 0]
          };
        }
        else if (this.gender == "Female") {
          var customWeights = {
            minInput: this.minWeight,
            maxInput: this.maxWeight,
            weights: [10, 60, 80, 90, 100],
            minAdd: [20, 0, 0, 0, 40],
            maxSub: [0, 100, 125, 0, 0]
          };
        }
        else {
          var customWeights = {
            minInput: this.minWeight,
            maxInput: this.maxWeight
          };
        }
        return Util.minMaxWeighted(customWeights);
      }
    };

    return race;

  }


}


module.exports = new Race();