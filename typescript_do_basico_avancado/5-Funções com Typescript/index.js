// introduction
// 55 - funcções sem retorno - void
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function noReturn() {
    console.log("Esta função não tem retorno!");
}
noReturn();
// 56 - callback como argumento
function greeting(name) {
    return "Ol\u00E1 ".concat(name, "!");
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Kalifa");
preGreeting(greeting, "Momo");
// 57 - generic Functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["Ola", "você", "!"]));
console.log(firstElement([{ 1: "voce" }, { 2: "quer" }, { 3: "chorar?" }]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Natalia" }, { sexo: "feminino" });
console.log(newObject);
// 58 - Constraints nas Generic Functions
function biggestNumber(a, b) {
    var biggest; // tem que mostrar q ele aceita tudo
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("15", "3"));
// console.log(biggestNumber("5", 3));  nao aceita
// 59 - Definindo tipos de parâmetros (na hora da execução)
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([5, 3], [2, 1]));
console.log(mergeArrays(["15", "3"], [5, 3])); // define aqui - faz sentido utilizarmos quando estamos pegando uma função pronta. Se for uma função criada pela gente fasz sentido utilizar o exemplo anterior e ja definir no inicio
// 60 - Parametros opcionais
function modernGreeting(name, greet) {
    if (greet) { // temos que fazer o if pois mesmo colocando ser opcional com ? ele da problema
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
}
console.log(modernGreeting("Natalia"));
console.log(modernGreeting("Natalia", "Sra"));
// 61 - Parametros default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 30));
// 62 - Tipo Unknown
function doSomething(x) {
    console.log(x); // assim funciona, mas se por exemplo quero retornar x[0], ele nao aceita temos q fazer if
    if (Array.isArray(x)) { // verificando se o x é um array
        console.log(x[0]);
    }
}
doSomething("1");
doSomething([1, 2, 3]);
// 63 - Tipo Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
showErrorMessage("Deu ruim");
