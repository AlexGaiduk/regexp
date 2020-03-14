import Character from "./char";

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defence = 25;
  }
}