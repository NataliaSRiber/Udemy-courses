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
