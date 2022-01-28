$( "#p1" ).css("color", "red")

document.getElementById("p2").style.color = "green";

$(".paragraph").css("font-weight", "bolder")
// let paragraphs = document.getElementsByClassName("paragraph")
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style["font-weight"] = "bolder"
// }

$("input[name=email]").attr("placeholder", "please input your email");
$("#card-body h5").css({
  color: "blue",
  "background-color": "red",
  "font-weight": "bold",
  border: "1px solid black"
})

// $("#h5-atas").css("font-size", 50)
// $("#h5-bawah").css("font-size", 100)

// $("body").append("Some appended text.");

let person = {
  firstName: "fadhlan",
  "last-name": "fariz"
}

console.log(person["last-name"])

// flag
let isHidden = false;

$("#btn-hide-card").on("click", function(event){
  if (isHidden) {
    // kalau lagi kehide masuk kondisi ini. isHidden = true
    $(".card").removeClass("hidden") // card dimunculin
    isHidden = false // flag diganti
  } else {
    // kalau lagi keshow masuk kondisi ini. isHidden = false
    $(".card").addClass("hidden") // card dihide
    isHidden = true // flag diganti
  }
})

$("#form").on('submit', function(event) {
  event.preventDefault(); // prevent refresh
  console.log("click submit")
  
  let inputName = $(this).find("[name='name']").val()
  if (inputName === "") {
    $("#message").text("Please input your name")
    $("#output").text("")
    return
  }
  
  $("#message").empty()
  $("#output").text(inputName)

  console.log("inputname:", inputName)
})

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon",
  data: {
    offset: "40",
    limit: "50",
  }
})
.done(function(response) {
  let arrOfPokemons = response.results;
  console.log(arrOfPokemons)
  for (let i = 0; i < arrOfPokemons.length; i++) {
    $("#pokemons-list").append(`<li>${arrOfPokemons[i]["name"]}</li>`)
  }
});