let bars = document.querySelector(".bars")
let overlay = document.querySelector(".overlay")
let rm = document.querySelector(".rm")
bars.addEventListener("click" , ()=>{
    overlay.classList.toggle("over_back")
})
rm.addEventListener("click" , ()=>{
    overlay.classList.remove("over_back")
})