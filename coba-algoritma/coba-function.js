// function square(num) {
//   return num * num
// }

// let result = square(2)
// console.log(result)

function operation(type, numA, numB) {
  switch (type) {
    case "+":
      return numA + numB
      break;
    case "-":
      return numA - numB
      break;
    default:
      break;
  }
}

let hasil = operation("+", 1, 2)
console.log(hasil)