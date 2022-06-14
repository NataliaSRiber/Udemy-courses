// 1- type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Ímpossivel realizar a soma"); // numero + string
    }
}
sum("4", "59");
sum(4, 32);
sum(2, "1");
// Checando se valor existe 
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === 'multiply') {
            var mul = arr.reduce(function (i, total) { return i * total; });
            console.log(mul);
        }
    }
    else {
        console.log(("Por favor, defina um operação"));
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([1, 2, 3], 'multiply');
// operator instance Of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var naty = new User("Natalia");
var jade = new User("Jade");
console.log(naty);
console.log(jade);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1 ".concat(user.name, ", deseja ver o dados do sistema?")); // usuario tipo admin
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 ".concat(user.name)); // usuario tipo admin
    }
}
userGreeting(naty);
userGreeting(jade);
// 4 - operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var belinha = new Dog("Belinha", "Poodle");
var tufao = new Dog("Tufao");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("\u00D2 cahorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log(("O Cachorro é um SRD"));
    }
}
showDogDetails(belinha);
showDogDetails(tufao);
// DESAFIO 3 
// type review = boolean | number - ai chamaria nos parenteses
function usersReview(review) {
    if (review === false) {
        console.log("Produto não avaliado");
    }
    console.log("A nota dada foi ".concat(review));
}
usersReview(false);
usersReview(5);
usersReview(4);
