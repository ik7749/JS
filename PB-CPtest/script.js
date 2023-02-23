/*let number = 5;
function num1() {
	number += 5;
  num2();
}
function num2() {
	number += 5; 
  function num3() {
	let number = 10;
}
	num3();
}
number = number + 5;
console.log(number)

let jedi = 'Luke Skywalker';
function changeNameOne() {
	jedi = 'Qui-Gon Jinn';
  function changeNameTwo() {
  	let jedi = 'Obi-Wan Kenobi';
  }
  changeNameTwo();
}
jedi = 'Anakin Skywalker';
changeNameOne();

console.log(jedi);*/

/*const array = [1, 2, 3, 4, 5,];
const newArray = array.splice(0, 1, 3);
console.log(newArray);*/

/*let counter = 5;
let sum = 0;

for (let i = 0; i < counter + 1; i++) {
  if (i % 2) {
    continue;
    sum = sum + 5;
  }
  sum += counter;
}
console.log(sum);

let number = 25;
function foo(num = 5) {
	number = number - num;
  return 15;
}
foo();
foo(15);
function bar(string) {
	number = number - string;  
}
bar(5);
console.log(number);*/

let name = 'John'
if (name) {
	let name = 'John Smith'
}
if (name.length > 9) {
	name = 'John Walker'
}
name += ' welcome you!'
console.log(name)

