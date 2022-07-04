// 92 - campos em classes
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var belinha = new User();
console.log(belinha);
belinha.name = "Belinha";
console.log(belinha);
// 93 - Constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var kalifa = new NewUser("Kalifa", 11);
console.log(kalifa);
