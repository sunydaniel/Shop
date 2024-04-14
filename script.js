document.getElementById("class-about-btn").addEventListener("click",function(){
document.getElementById("my-popup").classList.add("show")

anime({
    targets: '.popup',
    translateY:[-20,0],
    duration:1000,
    easing: 'linear',
  });
})
let inputText = document.querySelector(".TextSearch")
let submitForm = document.querySelector(".SubmitForm")


let information = document.querySelectorAll('caption')

/*
let classic = document.querySelector('classic')
let chocolate = document.querySelector('chocolate')
let tiramisu = document.querySelector('tiramisu')
let castella = document.querySelector('castella')

let classicRect = classic.getBoundingClientRect()
let chocolateRect = chocolate.getBoundingClientRect()
let tiramisuRect = tiramisu.getBoundingClientRect()
let castellaRect = castella.getBoundingClientRect()

*/

submitForm.addEventListener("click",(e) =>{
  e.preventDefault();
  searchFunction(inputText.value);
}
)

function searchFunction(text){
    information.forEach((element) => {
      if (element.textContent == text){
        console.log(yPosition)
        element.getBoundingClientRect()
        var rect = element.getBoundingClientRect();
        var yPosition = rect.top;
        window.scroll({
          top: yPosition,
          left: 0,
          behavior: "smooth",
        });
      }
  });
}


document.getElementById("X-button").addEventListener("click",function(){
  document.getElementById("my-popup").classList.remove("show")
})


