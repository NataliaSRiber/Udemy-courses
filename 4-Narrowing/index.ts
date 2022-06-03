// 1- type guard

function sum(a:number | string, b:number | string) {
  if(typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b))
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a+b)
  } else {
    console.log("Ímpossivel realizar a soma") // numero + string
  }
}

sum("4", "59");
sum(4, 32);
sum(2, "1");

// Checando se valor existe 
function operations(arr:number[], operation?: string | undefined) { //? em operation diz que este atributo pode não vir
  if(operation){
    if(operation ==="sum"){
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum);
    } else if(operation==='multiply'){
        const mul = arr.reduce((i, total) => i * total)
        console.log(mul);
      }
  } else {
    console.log(("Por favor, defina um operação"));  }
}

operations([1,2,3]);
operations([1,2,3], 'sum');
operations([1,2,3], 'multiply');

// operator instance Of

class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}
 const naty = new User("Natalia");
 const jade = new User("Jade");

 console.log(naty);
 console.log(jade);

function userGreeting(user: object) {
  if(user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver o dados do sistema?`); // usuario tipo admin
  } else if(user instanceof User) {
    console.log(`Olá ${user.name}`); // usuario tipo admin
  }
}

userGreeting(naty);
userGreeting(jade);

// 4 - operador in

class Dog {
  name
  breed
  
  constructor(name: string, breed?: string) {
    this.name = name
    if(breed) {
      this.breed = breed
    }
  }
}

const belinha = new Dog("Belinha", "Poodle");
const tufao = new Dog("Tufao");

function showDogDetails(dog: Dog) {
  if('breed' in dog) {
    console.log(`Ò cahorro é da raça ${dog.breed}`);
  } else {
      console.log(("O Cachorro é um SRD")); 
  }
}

showDogDetails(belinha);
showDogDetails(tufao);


// DESAFIO 3 

// type review = boolean | number - ai chamaria nos parenteses
function usersReview (review: boolean | number) {
  if(review === false) {
    console.log("Produto não avaliado")
  }
  console.log(`A nota dada foi ${review}`)
}

usersReview(false);
usersReview(5);
usersReview(4);