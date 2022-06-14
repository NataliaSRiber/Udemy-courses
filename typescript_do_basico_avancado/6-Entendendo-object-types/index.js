function showProductDetails(product) {
    console.log("O produto ".concat(product.name, " e o seu pre\u00E7o \u00E9 R$ ").concat(product.price));
    if (product.isAvailable) {
        return console.log("Produto disponível");
    }
    return console.log("Produto indisponível");
}
var shirt = {
    name: "white shirt",
    price: 20,
    isAvailable: true
};
showProductDetails(shirt); // eu poderia colocar direto o objeto com os valores
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o email ".concat(user.email));
    if (user.role) {
        console.log(" A sua fun\u00E7\u00E3o \u00E9 ".concat(user.role));
    }
}
var u1 = { email: "icequeen@gmail.com", role: "admin" };
var u2 = { email: "syndra@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var suzi = {
    name: "Suzana",
    age: 25
};
var wonderWoman = {
    name: "Diana",
    age: 800,
    superpowers: ["strength", "durability", "flight"]
};
console.log(wonderWoman);
console.log(suzi);
var arnold = {
    name: "arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
// 75 - Readonly array
var myArray = ["maça", "banana", "uva"]; // so leitura e nao modifica
// myArray[3] = "blueberry"; ele nao aceita a adição devido ao readonly
myArray.forEach(function (item) {
    console.log("Fruta: ".concat(item)); // so altera com metodos: map, foreach,
});
// const myNumberArray1: fiveNumbers = [1, 2, 3, 4, 5, 5] não aceita mais que cinco
// const mixedArray: fiveNumbers = [1, 2, 3, true, "oi"]; não aceita diferente de number
var myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
var anotherUser = ["Johann", 30];
console.log(anotherUser);
// 77 - Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
