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
