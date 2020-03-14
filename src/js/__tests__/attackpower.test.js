import Daemon from "../classes/daemon";

test("range = 1 // attack = 100 // stoned = false", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 1;
  charDps.attack = 100;

  expect(charDps.attack).toBe(100);
});

test("range = 2 // attack = 100 // stoned = false", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 2;
  charDps.attack = 100;

  expect(charDps.attack).toBe(90);
});

test("range = 3 // attack = 100 // stoned = false", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 3;
  charDps.attack = 100;

  expect(charDps.attack).toBe(80);
});

test("range = 4 // attack = 100 // stoned = false", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 4;
  charDps.attack = 100;

  expect(charDps.attack).toBe(70);
});

test("range = 5 // attack = 100 // stoned = false", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 5;
  charDps.attack = 100;

  expect(charDps.attack).toBe(60);
});

test("range = 2 // attack = 100 // stoned = true", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 2;
  charDps.stoned = true;
  charDps.attack = 100;

  expect(charDps.attack).toBe(85);
});

test("get aim", () => {
  const charDps = new Daemon();
  charDps.rangeAttack = 2;

  expect(charDps.rangeAttack).toBe(2);
});

test("shoot down the scope", () => {
  const charDps = new Daemon();

  function incorrectRange() {
    return charDps.rangeAttack = "asdsdfs";
  }
  expect(incorrectRange).toThrow();
});


test("stoned = true", () => {
  const charDps = new Daemon();
  charDps.stoned = true;

  expect(charDps.stoned).toBe(true);
});

test("incorrect stoned", () => {
  const charDps = new Daemon();

  function incorrectStoned() {
    return charDps.stoned = "four nineteen";
  }

  expect(incorrectStoned).toThrow();
});


test("incorrect attack", () => {
  const charDps = new Daemon();

  function incorrectAttack() {
    return charDps.attack = "twenty four";
  }
  expect(incorrectAttack).toThrow();
});