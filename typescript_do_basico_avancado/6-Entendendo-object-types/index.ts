// 69 - interface como parametros
interface Product {
  name: string,
  price: number,
  isAvailable: true,
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

showProductDetails(shirt);