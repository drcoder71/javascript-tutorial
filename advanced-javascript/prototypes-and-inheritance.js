// 'use strict';
// Prototype
// Javascriptda har bir object boshqa bir objectdan meros oladi. Bunda meros oluvchi objectga prototype deyiladi.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Salom, mening ismim ${this.name} va men ${this.age} yoshdaman. Va mening kasib ${this.job}`);
};

Person.prototype.sayBy = function () {
    console.log(`Xayr ${this.name}`);
}

const person1 = new Person('Azizbek', 25);
// person1.greet();
const person2 = new Person('Abdulloh', 30);
// person2.greet();
// person2.sayBy()
// person1.sayBy()

// prototype xususiyati yordamida bir xil metodlarni har bir obyekt uchun alohida yaratish o'rniga, bitta umumiy metodni yaratish va undan barcha obyektlar foydalanishini ta'minlash mumkin. Bu xotira tejash va kodni qayta ishlatish imkonini beradi.

// Person
//   ├── name: "Azizbek"
//   ├── age: 25
//   └── __proto__
//        └── greet: function

// Bu yerda Prototype yordamida o'zining asosi bo'lga objectga murojat qiladi. Bu yerda greet va sayBy metodlari prototype yordamida Person objectiga murojat qiladi. Bu yerda greet va sayBy metodlari person1 va person2 obyektlariga murojat qiladi.

// Prototype Chaining

// console.log(Person.prototype === person1.__proto__); // person1.__proto__ Person.prototype ga teng bo'ladi.
// console.log(person1.__proto__.__proto__ === Person.__proto__.__proto__);
// console.log(Person.__proto__); // Person.__proto__ Function constructor ga bo'lganligi sababidan Function ga teng bo'ladi.
// console.log(Person.__proto__.__proto__ === Object.prototype); // Object constructor ga bo'lganligi sababidan Object ga teng bo'ladi.

this.age = 10

const object = {
    age: 15,
    unit: {
        age: 20,
        foo: function () {
            return (() => {
                console.log(this.age);
            })()
        }
    }
}

console.log(object.unit.foo());
