import Character from "./classes/char";


export default class AttackPower extends Character {
  constructor(name) {
    super(name);
    this._stoned = false;
    this._rangeAttack = 2;
  }


  set rangeAttack(value) {
    if (parseFloat(value) === value && Number.isInteger(parseFloat(value))) {
      this._rangeAttack = value;
    } else {
      throw new Error("Error");
    }
  }

  get rangeAttack() {
    return this._rangeAttack;
  }

  set stoned(value) {
    if (value === true || value === false) {
      this._stoned = value;
    } else {
      throw new Error("true or false");
    }
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    if (parseFloat(value) === value && Number.isInteger(parseFloat(value))) {
      this._attack = value;
    } else {
      throw new Error("Error");
    }
  }


  get attack() {
    let accuracy = null;
    switch (this._rangeAttack) {
      case 2:
        accuracy = 0.9;
        break;
      case 3:
        accuracy = 0.8;
        break;
      case 4:
        accuracy = 0.7;
        break;
      case 5:
        accuracy = 0.6;
        break;
      default:
        accuracy = 1;
        break;
    }

    if (this._stoned === true) {
      return Math.ceil((this._attack * accuracy) - Math.log2(this._rangeAttack) * 5);
    }
    return Math.ceil(this._attack * accuracy);
  }
}