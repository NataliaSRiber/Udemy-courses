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
    console.log("O usu\u00E1rio tem o email ".concat(user.email, " e sua fun\u00E7\u00E3o \u00E9 ").concat(user.role));
}
var u1 = { email: "icequeen@gmail.com", role: "admin" };
var u2 = { email: "syndra@gmail.com", role: "user" };
showUserDetails(u1);
showUserDetails(u2);
