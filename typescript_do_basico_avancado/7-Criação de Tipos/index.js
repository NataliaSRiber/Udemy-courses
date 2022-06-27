// 81 - Generics
function showData(arg) {
    return "O dado \u00E9 ".concat(arg);
}
console.log(showData(5));
console.log(showData('testando'));
// 82 constraints in generic
function showProductName(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var obj1 = { name: "porta", cor: "branca" };
console.log(showProductName(obj1));
var myCar = { name: "Ferrari", wheels: 4, engine: 7.0, color: "Branco" };
var myPen = { name: "Bic", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(myPen);
