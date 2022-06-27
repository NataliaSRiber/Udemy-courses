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
// 84 type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(key, " est\u00E1 presente no objeto e tmem o valor de ").concat(obj[key]);
}
var server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var char = {
    name: "Maggie Simpson",
    age: 1,
    hasDriveLicence: false
};
console.log(showCharName(char, 'name'));
