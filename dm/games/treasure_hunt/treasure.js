class Treasure {
  constructor(type, value, name, special) {
    if (special == undefined || special == "" || special == null) {
      special = "None";
    }
    this.type = type;
    this.value = value;
    this.name = name;
    this.special = special;
  }

  tType() {
    return this.type;
  }

  tValue() {
    return this.value;
  }

  tName() {
    return this.name;
  }

  tSpecial() {
    return this.special;
  }

  array() {
    //Item Sets
    //Coins
    var goldChest = new Treasure("Coins", 600, "A treasure chest filled with gold coins");

    var silverChest = new Treasure("Coins", 400, "A treasure chest filled with silver coins");

    var copperChest = new Treasure("Coins", 200, "A treasure chest filled with copper coins");

    var goldSack = new Treasure("Coins", 200, "A Sack of Gold Coins");

    var silverSack = new Treasure("Coins", 100, "A Sack of Silver Coins");

    var copperSack = new Treasure("Coins", 50, "A Sack of Copper Coins");


    //Gemstones
    var ruby = new Treasure("Gemstones", 35, "A shimmering ruby");

    var sapphire = new Treasure("Gemstones", 40, "A shimmering sapphire");

    var emerald = new Treasure("Gemstones", 50, "A shimmering emerald");

    var diamond = new Treasure("Gemstones", 100, "A shimmering diamond");

    //Spellbooks
    var dustySpellbook = new Treasure("Spellbook", 30, "A dusty old spellbook");

    var niceSpellbook = new Treasure("Spellbook", 40, "A nice spellbook");

    var ancientSpellbook = new Treasure("Spellbook", 400, "An ancient spellbook", "When in posession of The Wizard: Once Per game during the Night Phase, the player may choose 1 dead player to revive. The revived player will know the identity of The Killer.");

    //Alcohol
    var dwarvenAle = new Treasure("Alcohol", 75, "A well aged barrel of dwarven ale");

    var elvenWine = new Treasure("Alcohol", 85, "A well aged bottle of elven wine");

    var dragonfireAle = new Treasure("Alcohol", 125, "A well aged barrel of Dragon's Fire Ale");

    //Potions
    var invisibilityPotion = new Treasure("Potion", 200, "An invisibility potion.", "During the Lobby Phase you may choose to drink this potion and become invisible to other players who are in the room with you during the next Location Phase.");

    var hastePotion = new Treasure("Potion", 200, "A potion of haste", "During the Lobby Phase you may choose to drink this potion and gain an additional action during the next Location Phase.");

    var resurrectionPotion = new Treasure("Potion", 1000, "A potion of resurrection", "During the Lobby Phase you may choose to use this potion on 1 dead player. That player comes back to life during the beginning of the next Lobby Phase and knows The Killer's identity.");

    //Unique Items
    var silverHolySymbol = new Treasure("Holy Symbol", 250, "A Silver Holy Symbol", "A Cleric Killed with this treasure will come back to life after 2 turns. The Cleric  will Know The Killer's identity.");

    var excalibur = new Treasure("Holy Symbol", 250, "The Holy Sword Excalibur", "When in posession of The Paladin: Every player who was in the room with him during the Location Phase is targeted by his Holy Protector ability.");

    var poison = new Treasure("Minion", 0, "A Vial of deadly poison", "Can only be discovered by The Minion, and The Minion cannot be caught Holding it. During the Night Phase, The Minion may Target 1 Player with The Poison, except The Killer. The Poison will then re-appear somewhere else in The Hotel.");

    var bearTrap = new Treasure("Evil", 0, "A bear trap", "Can only be discovered by The Killer/Minion, and they cannot be caught Holding it. During the Location Phase, if The Killer/Minion is alone in a room  they may place this trap in that room. When another player enters that room they will be caught in the trap and cannot leave that room. If another enemy player is with them, or another enemy player enters that Room within the next 2 turns they are freed from the trap. If the players fail to find them within 2 turns, the trapped player will die.");

    var scryingOrb = new Treasure("Magic Item", 700, "A scrying orb", "Reveals invisible players in the same room as the player. Reveals All Secret Passageways in The Hotel. When in posession of The Sorcerer: During the Location Phase, The Sorcerer can check see which players are in 1 other room in the house.");

    var magicSeeds = new Treasure("Magic Item", 200, "A bag of magical seeds", "When in posession of The Druid: During the Location Phase may choose to plant the seeds in a room. For the next 2 turns you will be aware of players who enter that room during The Location Phase.");

    var treasureArray = [goldChest, silverChest, copperChest, goldSack, silverSack, copperSack, ruby, sapphire, emerald, diamond, dustySpellbook, niceSpellbook, ancientSpellbook, dwarvenAle, elvenWine, dragonfireAle, invisibilityPotion, hastePotion, resurrectionPotion, silverHolySymbol, excalibur, poison, bearTrap, scryingOrb, magicSeeds];

    return treasureArray;
  }
}

module.exports = new Treasure();