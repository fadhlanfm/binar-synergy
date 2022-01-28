class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`)
  }
  
  work() {
    console.log("Work!")
  }
}

class Programmer extends Human {
  constructor(name, address, programmingLanguages) {
    super(name, address) 
    // this.name = name;
    // this.address = address;
    /* Call the super/parent class constructor, 
    in this case Person.constructor; */
    this.programmingLanguages = programmingLanguages;
  }

  // override the Person's introduce method
  introduce() {
    super.introduce(); // override the Person's introduce method
    // Call the super class introduce instance method.
    console.log(`I can write `, this.programmingLanguages);
  }

  code() {
    console.log(
      "Code some",
      this.programmingLanguages[
        Math.floor(Math.random() * this.programmingLanguages.length)
      ]
    )
  }
}

class FullStackDev extends Programmer {
  constructor(name, address, programmingLanguages, stack) {
    super(name, address, programmingLanguages)

    this.stack = stack
  }
}

// Initiate from Human directly
let Obama = new Human("Barrack Obama", "Washington DC");
Obama.introduce() // Hi, my name is Barack Obama

let Isyana = new Programmer("Isyana", "Jakarta", ["Javascript", "Kotlin", "Python"]);
Isyana.introduce() // Hi, my name is Isyana; I can write ["Javascript", "Kotlin", "Python"]
Isyana.code() // Code some Javascript/Ruby/...
Isyana.work() // Call super class method that isn't overrided or overloaded

try {
 // Obama can't code since Obama is an direct instance of Human, which don't have code method
 Obama.code() // Error: Undefined method "code"
}
catch(err) {
 console.log(err.message)
}

console.log(Isyana instanceof Human) // true
console.log(Isyana instanceof Programmer) // true

let hafidh = new FullStackDev("hafidh", "indo", ["Javascript"], "MERN")

console.log("====:", hafidh)
