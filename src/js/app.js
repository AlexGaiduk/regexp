// TODO: write your code here
import Validator from "./validator";

const valid = new Validator();

console.log(`Name Willy: name verification ${valid.validateUsername("Willy")}`);
console.log(`Name Billy: name verification - ${valid.validateUsername("Billy")}`);