const text = /hello/ // Literal sintaksis pattern
const regConstr = new RegExp("Hello Regex")
console.log(regConstr); // natija pattern bilan birgalikda chiqadi.
console.log(typeof text); // type of object
console.log(typeof regConstr.source); // typeof === string. bu holatda .source regConstr ni string formatga aylantiradi.

