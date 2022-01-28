class Person {
  constructor(name, address) { // function yg selalu dipanggil ketika kita menginstansiasi kelas
    console.log("kepanggil")
    this.name = name; // property
    this.address = address;
    this.isBreathing = true;
  }

  drink(drink) {
    console.log(`${this.name} is drinking ${drink}`)
  }

  eat(food, drink) {
    console.log(`${this.name} is eating ${food}`)

    this.drink(drink)
  }

  static scream(sentence) {
    console.log(sentence.toUpperCase())
  }
}

let fadhlan = new Person("fadhlan", "tangerang") // object/instance
let mark = new Person("mark", "america") // object/instance
let naruto = new Person("naruto", "jepang") // object/instance
let shinTaeYong = new Person("sty", "korea sel") // object/instance

Person.scream("haussss")
shinTaeYong.drink("boba")

// console.log(fadhlan.name)
// console.log(fadhlan.address)

// fadhlan.drink("water")