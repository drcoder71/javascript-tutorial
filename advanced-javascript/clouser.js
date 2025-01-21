// Javascript Clouser
// Function yaratilgan vaqtda function ichidagi o'zgaruvchilarni kirish imkoniyatini saqlash
function createClouser() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

// createClouser funksiyasi chaqirilganda, count o'zgaruvchisi 0 ga teng bo'ladi.
// createClouser funksiyasi anonim funksiya qaytaradi.
// Anonim funksiya count o'zgaruvchisiga kirish imkoniyatiga ega va uning qiymatini oshiradi.

const clouser = createClouser();
console.log(clouser()); // 1
console.log(clouser()); // 2

// Clouser funksiyasi chaqirilganda, count o'zgaruvchisi 0 ga teng bo'ladi.
// Clouser funksiyasi anonim funksiya qaytaradi.
// Anonim funksiya count o'zgaruvchisiga kirish imkoniyatiga ega va uning qiymatini oshiradi.
// Clouser funksiyasi chaqirilganda, count o'zgaruvchisiga kirish imkoniyati saqlanadi.

const clouser2 = createClouser();
console.log(clouser2()); // 1
console.log(clouser2()); // 2
console.log(clouser2()); // 3

// Clouser bilan ishlash usullari.
// Oddiy Counter
function createCounter() {
    let count = 0
    return function () {
        count++
        return count
    }
}
// Xususiy O'zgaruvchilar
function createPerson(name) {
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        }
    };
}

const person = createPerson('Alice');
console.log(person.getName()); // Alice
person.setName('Bob');
console.log(person.getName()); // Bob

// Ya'ni o'zgaruchi e'lon qilinmasdan. parametr sifatida olinadi.

// Function ichida Function
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Outer Variable: outside
// Inner Variable: inside

// Timer
function createTimer() {
    let time = 0;
    return function () {
        time += 1;
        return time;
    }
}

const timer = createTimer();

console.log(timer()); // 1
console.log(timer()); // 2
console.log(timer()); // 3

// Array Filter
function createFilter(criteria) {
    return function (array) {
        return array.filter(criteria);
    }
}

const isEven = createFilter(num => num % 2 === 0);
const numbers = [1, 2, 3, 4, 5, 6];
// console.log(isEven(numbers)); // [2, 4, 6]

// Memoize Clouser
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return cache
    }
}

const factorial = memoize(function (n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
});
// 5 * 4 * 3 * 2 * 1
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(7)); // 720