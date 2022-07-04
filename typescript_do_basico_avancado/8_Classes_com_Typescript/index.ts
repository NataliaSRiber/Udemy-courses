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

