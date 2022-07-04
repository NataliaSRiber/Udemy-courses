// 92 - campos em classes

class User {
  name!: string;
  age!: number;
}

const belinha = new User();
console.log(belinha);


belinha.name = "Belinha";
console.log(belinha);

// 93 - Constructor

class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age; 
  }
}
const kalifa = new NewUser("Kalifa", 11);
console.log(kalifa);

// 94 propriedade readonly

class Car {
  name
  readonly wheels = 4 // campo inicia com um valor e nao pode ser alterado

  constructor(name: string) {
    this.name = name
  }
}

// 95 herança e super

class Machine {
  name

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(destroyer);
console.log(trator);

// 96 - métodos

class Dwarf {
  name

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log(("Hey Stranger!"));
  }
}

const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);

jimmy.greeting();