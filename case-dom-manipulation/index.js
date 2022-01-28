console.log("masuk")

let divInput = document.createElement("div")
divInput.setAttribute("id", "div-input")

let divOutput = document.createElement("div")
divOutput.setAttribute("id", "div-output")

document.body.append(divInput)
document.body.append(divOutput)

let inputElement = document.createElement("input")
inputElement.setAttribute("id", "input-name")
inputElement.setAttribute("type", "text")
divInput.append(inputElement)

let enterButton = document.createElement("button")
enterButton.appendChild(document.createTextNode('Enter'))
divInput.append(enterButton)

enterButton.addEventListener("click", function() {
  console.log("value input", inputElement.value)
  let inputValue = inputElement.value

  // let outputElement = document.createElement("p")
  // outputElement.textContent = inputValue
  divOutput.innerHTML= inputValue
})