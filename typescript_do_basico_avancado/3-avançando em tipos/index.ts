const firstName = "Natalia";

function greeting(name: string)  {
  console.log(`Olá ${name}`);
}

greeting(firstName);

// 7- tipos de objeto

function passCoordinates(coord: { x: number, y: number }) {
  console.log('X coordinates:' + coord.x)
  console.log('Y coordinates:' + coord.y)
}

const objCoord = { x: 329, y: 84.2 }

// 7 - union types
function showBalance(balance: string | number) {
  console.log(`o saldo da conta é R$ ${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "amor", true] // array aceita 3 tipos

// 8 - avançando em union types

function showUserRole(role: boolean | string) {
  if(typeof role === "boolean") {
    return "Usuário não aprovado!"
  }
  return `A função do usuário é: ${role}`
}

showUserRole(false);
showUserRole("Admin");

// 9 - Type alias

type ID = string | number // determina o tipo

function showId(id: ID) {
  console.log(`O ID é ${id}`);
}

showId(1);
showId("200");

// 10 Interface
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
  x:10,
  y:15,
  z:20
}

// 12 - interface x type alias
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = { name: "Natalia", age: 33 }
console.log(somePerson);

// literal types

let test: "testando"

test = "testando"

console.log(test);

function showDirection(direction: "left" | "right" | "center") { // a função so aceita um deste 3 valores
  console.log(`À direção é ${direction}`)
}

showDirection("right");

// non null assertion operators
const p = document.getElementById("some-p");

console.log(p!.innerText);

// bigint

let n: bigint //type of

n = 1000n
console.log(n);

// symbol
let symbolA = Symbol("A");
let symbolB = Symbol("A");

console.log(symbolA == symbolB)