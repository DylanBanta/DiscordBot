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
}