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

// 84 type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) { // k é uma chave de T
  return `A chave ${key} está presente no objeto e tmem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB',
}

console.log(getSomeKey(server, 'ram'));

// 85 keyof type operator

type Character = { name: string, age: number, hasDriveLicence: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C):string { // relaciona 
  return `${obj[name]}`
}

const char: Character = {
  name: "Maggie Simpson",
  age: 1,
  hasDriveLicence: false,
}

console.log(showCharName(char, 'name')); // espera a chave name

// 86 typeof type operator

const userName: string = "Matheus";
const userName2: typeof userName = "Jade"
// const userName3: typeof userName = 2;

type x = typeof userName
const userName4: x = "Murilo";

// 87 indexed acces type

type Truck = { km:number, kg: number, description: string }

type km = Truck['km']; // tipo baseado nesta chave

const newtruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para cargas pequenas"
}

function showKm(km: km) {
  console.log(`Ò veículo tem a km de: ${km}`);
}

showKm(newtruck.km);