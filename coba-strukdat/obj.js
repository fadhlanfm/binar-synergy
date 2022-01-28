// object manipulation

let person = {
  name: "fadhlan",
  gender: "male",
  nationality: "indonesia",
  age: 26,
  phoneNum: 08423749234,
  isMarried: false,
  isGraduated: true,
  // hobby: "sports"
}

person.name = "fariz"
delete person.gender
person.hobby = "sports"
person["favoriteFood"] = "indomie"
console.log(person)

// console.log(person.hasOwnProperty("name"))
// console.log(person.hasOwnProperty("firstName"))

// console.log(`name: ${person.name}`)
// console.log(`age: ${person["age"]}`)

// for (const olokotok in person) {
//   console.log(olokotok)
//   console.log(person[olokotok])
//   // console.log(person["gender"])
//   // console.log(person["phoneNum"])
//   // console.log(person["isMarried"])
//   // console.log(person["isGraduated"])
//   // console.log("value: ", person[i])
// }

