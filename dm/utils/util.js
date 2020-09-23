class Util {
  MessageHandler(message, prefix) {
    var user = message.member.displayName; //User who posted the message
    var input = message.content; //Message content
    var dOutput; //Initialize the eventual output variable

    if (input.startsWith(prefix)) { //Checks if the input begins witht he prefix, if so, seperates out prefix from the Command
      //Splits command after prefix. (input "!1" becomes "1");
      var input = input.split(prefix)[1];

      if (input == "Debug") {
        Dm.debug.log("Test?");
        Dm.th.test();
      }

      if (input == "Save") {
        //Dm.writeFile("./Test.txt", "Test Data");
        //message.reply("Saved Test Data.");
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