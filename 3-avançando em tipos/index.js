var firstName = "Natalia";
function greeting(name) {
    console.log("Ol\u00E1 ".concat(name));
}
greeting(firstName);
// 7- tipos de objeto
function passCoordinates(coord) {
    console.log('X coordinates:' + coord.x);
    console.log('Y coordinates:' + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
// 7 - union types
function showBalance(balance) {
    console.log("o saldo da conta \u00E9 R$ ".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "amor", true]; // array aceita 3 tipos
// 8 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
showUserRole(false);
showUserRole("Admin");
function showId(id) {
    console.log("O ID \u00E9 ".concat(id));
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
var somePerson = { name: "Natalia", age: 33 };
console.log(somePerson);
// literal types
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log("\u00C0 dire\u00E7\u00E3o \u00E9 ".concat(direction));
}
showDirection("right");
// non null assertion operators
var p = document.getElementById("some-p");
console.log(p.innerText);
// bigint
var n; //type of
n = 1000n;
console.log(n);
// symbol
var symbolA = Symbol("A");
var symbolB = Symbol("A");
console.log(symbolA == symbolB);
