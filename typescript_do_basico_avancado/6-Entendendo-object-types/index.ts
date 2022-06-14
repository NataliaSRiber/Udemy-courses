// 69 - interface como parametros
interface Product {
  name: string,
  price: number,
  isAvailable: boolean,
}

function showProductDetails(product: Product) { // o objeto product recebe a interface Product
  console.log(`O produto ${product.name} e o seu preço é R$ ${product.price}`);
  if (product.isAvailable) {
    return console.log("Produto disponível")
  }
  return console.log("Produto indisponível");
}

const shirt: Product = {
  name: "white shirt",
  price: 20,
  isAvailable: true,
}

showProductDetails(shirt); // eu poderia colocar direto o objeto com os valores

// 70 interface com parametro opcional

interface User {
  email: string,
  role?: string,
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email ${user.email}`);

  if(user.role) {
    console.log(` A sua função é ${user.role}`);
  }
}

const u1:User = { email: "icequeen@gmail.com", role: "admin"}
const u2:User = { email: "syndra@gmail.com"}

showUserDetails(u1);
showUserDetails(u2);

// 71 - propriedades readonly

interface Car {
  brand: string
  readonly wheels: number // propriedade de leitura.
}

const fusca: Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca);

//fusca.wheels = 5; não aceita que o valor muude