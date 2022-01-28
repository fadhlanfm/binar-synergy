class Human {
  constructor(props) {
   if (this.constructor === Human) {
     throw new Error("Cannot instantiate from Abstract Class") 
     // Because it's abstract
   }
   let { name, address } = props;
   this.name = name; // Every human has name
   this.address = address; // Every human has address
   this.profession = this.constructor.name; 
   // Every human has profession, and let the child class to define it.
 }
 // Yes, every human can work
 work() {
   console.log("Working...")
 }
 // Every human can introduce
 introduce() {
   console.log(`Hello, my name is ${name}`)
 }
}

// let fadhlan = new Human("fadhlan", "tangerang")

class Police extends Human {
  constructor(props) { // properties
    super(props);
    this.rank = props.rank; // Add new property, rank.
  }
 
  work() {
    console.log("Go to the police station");
    super.work();
  }
}
 
const Dono = new Police({
  name: "Dono",
  address: "Unknown",
  rank: "General"
})
console.log("🚀 ~ file: abstraction-sandbox.js ~ line 42 ~ Dono", Dono)
// console.log(Dono.profession); // Police
 

class Button {}

class InfoButton extends Button {}
class DangerButton extends Button {}
class SuccessButton extends Button {}
class FailedButton extends Button {}