export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 50;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += (this.attack * (20 / 100));
      this.defence += (this.defence * (20 / 100));
    } else {
      throw new Error("Нельзя повысить левел умершего героя");
    }
  }
}