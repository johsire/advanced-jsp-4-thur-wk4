 // ========
// CLOSURES
// ========

function outer(num) {
  return function inner() {
    return ++num
  }
}

// What happens if we invoke outer() multiple times?
let closure = outer(2);
let closure2 = (3);

// What happens if we invoke closure multiple times?
// console.log(closure());
// console.log(closure2());
// console.log(closure2());
// console.log(closure());

// Answer below, what is the definition of a closure?

// PRACTICE
// --------
// Create an order tracker at a sandwich shop.

// outer function -- no parameters
// varaible that will store the sandwich stuff
// inner function -- has a parameter (which is going to be one of the sandwich things). It should also return the sandwich;

function outer() {
  let sandwich = []
  return function inner(topping) {
    sandwich.push(topping)
    return sandwich
  }
};

let mySandwich = outer();
// console.log(mySandwich('tomamtoes'));

// Module Pattern
// --------------
// public and private methods and variables. Can help to shield parts of code from the global scope.

function modulePattern() {
  
  let privateVariable = 'I am private';
  
  let privateFunction = function() {
    console.log(privateVariable)
  }
  
  return {
    changeVar: function(str) {
      privateVariable = str;
    },
    readVar: function() {
      privateFunction();
    }
  }
}

let module1 = modulePattern();

// PRACTICE
// --------
// Using closure and the module pattern, create a "bank".
// private -- the balance
// public -- making a deposit, withdrawl, getting your balance

// code here
function bank() {
  let balance = 0;
  return {
    addBalance: function(num) {
      return balance += num;
    },
    withdrawlBalance: function(num) {
      return balance -= num;
    },
    realBalance: function() {
      return balance;
    }
  }
}

let myBankAcct = bank()
console.log(myBankAcct.addBalance(5000000))
console.log(myBankAcct.realBalance());
console.log(myBankAcct.withdrawlBalance(10));

// What are the benefits of using closures and/or the module pattern?

// =======
// CONTEXT
// =======

// The 'this' keyword value is determined (in most cases) where the function is invoked.
// Think of 'this' as a placeholder for an object.

// this is how we give 'this' meaning when we invoke a function that is using the 'this' keyword:
// explicit
// implicit
// default

// EXPLICIT context
// ----------------
// .bind()
// function.bind(thisArg[, arg1[, arg2[, ...]]])
// returns a new function

function bindThisFunction() {
  return this
}

let value = {
  num: 129847
}

let value2 = {
  num: 234
}

let bound1 = bindThisFunction.bind(value)
let bound2 = bindThisFunction.bind(value2)
// console.log(bound1) // what will be the value of this log?
// bound1() // what will be the value of this function call?
// bound2() // what about this?

// function with the 'this keyword'
// when we use .bind, we are "attaching" the object to the 'this' keyword
// whatever you pass into the .bind will be the value of the 'this' keyword

// PRACTICE
// --------

// Use the bind method and the getName function so that 'name' will be equal to a function that will return 'chris'.

function getName() {
  return this.name;
}

let user = {
  name: 'chris',
  age: 36
};

// .call() & .apply() immediately invokes the function with the context
// - call: argument list
// - apply: array of arguments

// IMPLICIT context
// ----------------
// Whatever is left of the dot
// it will look to see if there is an object left of the dot, if there is, it will assume that that is the object you are looking for. It will replace 'this' with references to the object left of the dot.

let implicit1 = {
  num: 1,
  add: function() {
    return this // it will ask itself, "what is 'this'??"
  }
}

// dot notation --->>> objects
// 'this' is a placeholder for an object
// the function is trying to find the object that will take the place of 'this'

// implicit1.add() // what will be the value of this function call?

let implicit2 = {
  num: 1,
  add: function() {
    return this.num + 1
  }
}

// implicit2.add() // what about this?

// PRACTICE
// --------

function sayHello() {
  return this.greeting;
}

// sayHello() // What will be the value of this function call?

let person = {
  greeting: 'hi',
  sayHello: sayHello
}

// undefined

// person.sayHello() // What will be the value of this method call?
// 'hi'

// ---------

// Using the 'this' keyword, create a method on the user object below that will return the name 'Jerry'.

let user2 = {
  name: 'Jerry'
  returnName: function() {
    return this.name
  }
}

user2.returnName();

// DEFAULT context
// ---------------
// AVOID DEFAULT CONTEXT!! it's the last resort and more often than not, what you DON'T want to happen

// - the window or global object
// "use strict" ensures 'this' will be undefined when implicit or explicit context is not used.

// ------

let dog = {
  color: 'white',
  age: 8,
  energy: 4,
  description: function() {
    return `This dog is ${this.color}, is ${this.age} years old, and has a ${this.energy > 5 ? 'high' : 'low'} energy level.`
  }
}

// dog.description() // What will be the value of this function call?
// dog object;

let description = dog.description

let newDog = {
  color: 'black',
  age: 12,
  energy: 12
}
// description() // What will be the value of this function call?
// dog object;

// How can we fix this problem?

// Arrow functions and 'this'
// -------------------------
// 'this' gains it's value from the surrounding lexical context of where the arrow function was declared.

// PRACTICE!
// ---------
// What will be the value of each of the logs below?

let obj = {
  a: 'letter a',
  b: function() {
    return this
  }
}

// console.log(obj.b())

let obj2 = {
  a: 'letter a',
  b: () => {
    return this;
  }
}

// console.log(obj2.b())

// arrow functions don't contain their own binding to the 'this' keyword, they look to the surrounding scope/lexical enviroment.
// hey, I don't know what 'this' is, what is 'this' for you?

// Why do arrow functions in the JSX of a react class component's render method give the correct context?

// Why does using .bind() in the constructor method of a react class component give the correct of this?

// =====================
// CONSTRUCTOR FUNCTIONS
// =====================

// Class review

class Hat {
  constructor() {
    this.color = 'black'
  }
  changeColor() {
    this.color = 'blue'
    return this.color;
  }
}

// Constructor Functions:
// DO NOT RETURN ANYTHING
// the new keyword/operator will create the new object for you and the return of that object is done for you

function ConstructorName() {
  this.propertyName = 'value'
  this.propertyName2 = 'value'
  this.propertyName3 = 'value'
  // return {} // don't do this, it will overwrite the object you actually want
}

console.log(new ConstructorName())

class are constructor functions in disguise - syntaxtical sugar
Have to use a capital letter when defining a new constructor function

The new key word creates a new istance of the object.
The this key world refrences the new obj you just created
The constructor function returs it for you, so you dont have to - it beats the whole purpose to return something.

let constructorObj = new ConstructorName('valuess');
console.log(constructorObj)

// PRACTICE
// --------
function Constructor() {
  // console.log(this); // what would by the value of 'this'?
  this.a = 'the letter a';
  // console.log(this); // what would by the value of 'this'?
}

let letter = new Constructor()
let letter2 = Constructor()

// console.log(letter) // what will this log?
// console.log(letter2) // what will this log?

// ==========
// PROTOTYPES
// ==========

PROTOTYPE:
every obj has a prototype Obj inbuild.
Every new objects created will look up to the prototype for the inbuid methods.
That's the inbuid methods that come with the constructor obj.

Dont override pre-existing prototypes!!

// with classes

class addPrototype {
  constructor() {
    this.name = 'I have a prototype';
  }
  changeName(str) {
    this.name = str
  }
}

// console.log(new addPrototype())

function BuildThings() {
  this.things = []
}

BuildThings.prototype.buildIt = function(thing) {
  this.things.push(thing)
  return this.things
}

let building = new BuildThings()
building.buildIt('a thing')


Array.prototype.myMethod = function() {
  return 'mine'
}

// DO NOT DO THIS BELOW

// Array.prototype.map = function() {
//   return 'mine'
// }

<!-- Crate a constructor function that makes a person object => 3 properties: name, age, hometown
add a prototype method that will say the name of the person, name it sayName
create a person with the constructor function -->

function greetings(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
}

greetings.prototype.sayName = function() {
  console.log(this.name)
}

let mirriamJay = new Greetings('Miriam Jay', 25, 'SLC')

console.log(mirriamJay)

<!-- What is a closure?
What is the module pattern?
What are the 3 ways to determine content in or priority?
How is 'this' defined from an arrow function? -->