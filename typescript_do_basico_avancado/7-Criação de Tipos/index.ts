// 81 - Generics

function showData<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showData(5));
console.log(showData('testando'));

// 82 constraints in generic

function showProductName<T extends {name: string}>(obj: T) { // precisa ser um objeto e conter a propriedade name
  return `O nome do produto é ${obj.name}`
}

const obj1 = {name: "porta", cor: "branca"}

console.log(showProductName(obj1));

//83 - generic com interface

interface MyObject<T, U, Q> {
  name: string,
  wheels: T,
  engine: U,
  color: Q,
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {name: "Ferrari", wheels: 4, engine: 7.0, color: "Branco"};
const myPen: Pen = {name: "Bic", wheels: false, engine: false, color: "azul"};

console.log(myCar);
console.log(myPen);

