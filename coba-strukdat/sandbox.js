// let a = 1

// if (true) {
//   a = 3
//   console.log(a)
//   let b = 4
// }
// // console.log(a)
// console.log(b)



let benar = true

if (benar) {
  console.log("lewat sini")
  let diskon = 100
  console.log(diskon, "diskon di dalem if then alias local")
}

let diskon = 500 // declaration of diskon, assignment 500 to diskon
diskon = 400 // diskon reassigned

console.log(diskon, "diskon yg di global")

// let array = [1,2,3,4]

// for (let i = 0; i < array.length; i++) {
//   console.log(i)
// }

// for (let i = 0; i < array.length; i++) {
//   console.log(i)
// }