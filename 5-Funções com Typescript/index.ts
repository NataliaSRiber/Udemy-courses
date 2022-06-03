// introduction
// 55 - funcções sem retorno - void

function noReturn():void {
  console.log("Esta função não tem retorno!");
}

noReturn();

// 56 - callback como argumento
function greeting(name: string):string {
  return `Olá ${name}!`
}

function preGreeting(f: (name: string) => string, userName:string) {// tem como argumento uma função f: que retorna uma string
  console.log("Preparando a função");
  const greet = f(userName)
  console.log(greet);
}

preGreeting(greeting, "Kalifa");
preGreeting(greeting, "Momo");

// 57 - generic Functions
function firstElement<T>(arr: T[]):T { //nao sabemos o tipo de array <T>generic e o retorno tbm é um T pois não sabemos
  return arr[0];
}

console.log(firstElement([1,2,3]));
console.log(firstElement(["Ola", "você", "!"]));
console.log(firstElement([{1: "voce"}, {2: "quer"}, {3: "chorar?"}]));

function mergeObjects<U, T>(obj1: U, obj2: T) { // poderia ter chamado os dois de T também
  return {
    ...obj1,
    ...obj2
  }
}
const newObject = mergeObjects({name:"Natalia"}, {sexo: "feminino"});

console.log(newObject);


// 58 - Constraints nas Generic Functions
function biggestNumber<T extends number | string>(a: T, b:T):T {
  let biggest: T // tem que mostrar q ele aceita tudo
  if(+a > +b){
    biggest = a
  } else {
    biggest = b
  }
  return biggest;
}

console.log(biggestNumber(5,3));
console.log(biggestNumber("15","3"));
// console.log(biggestNumber("5", 3));  nao aceita

// 59 - Definindo tipos de parâmetros (na hora da execução)
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([5,3], [2,1]));
console.log(mergeArrays<number | string>(["15","3"], [5,3])); // define aqui - faz sentido utilizarmos quando estamos pegando uma função pronta. Se for uma função criada pela gente fasz sentido utilizar o exemplo anterior e ja definir no inicio

// 60 - Parametros opcionais

function modernGreeting(name: string, greet?: string) {
  if (greet){ // temos que fazer o if pois mesmo colocando ser opcional com ? ele da problema
    return `Olá ${greet} ${name}, tudo bem?`
  }
  return `Olá ${name}, tudo bem?`
}

console.log(
  modernGreeting("Natalia"));
console.log(
  modernGreeting("Natalia", "Sra")); 

// 61 - Parametros default
function somaDefault(n: number, m = 10) { // m tem o valor default 10
  return n + m
}

console.log(somaDefault(10));
console.log(somaDefault(10, 30));

// 62 - Tipo Unknown

function doSomething(x: unknown) {
  console.log(x); // assim funciona, mas se por exemplo quero retornar x[0], ele nao aceita temos q fazer if
  if(Array.isArray(x)) { // verificando se o x é um array
    console.log(x[0]);
  } 
}

doSomething("1");
doSomething([1, 2, 3]);

// 63 - Tipo Never


