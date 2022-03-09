import { str, a, arr, hello, obj, Person } from './component.js';
import app from "./other.js";

console.log(str);
console.log(a);
hello();

let obj1 = new Person();
console.log(obj1);

let obj2 = new app("Test");
console.log(obj2);