
let div= document.getElementById("org-div")

let highet = document.getElementById("highet-div")
let width = document.getElementById("width-div")
let color = document.getElementById("color-div")
let border = document.getElementById("border-div")

let subBtn = document.getElementById("submit")
let resBtn = document.getElementById("reset")



subBtn.addEventListener("click", ()=>{
    div.style.height= highet.value;
    div.style.width= width.value;
    div.style.backgroundColor= color.value;
    div.style.borderRadius= border.value;
})

resBtn.addEventListener("click",()=>{
   div.style.cssText= "background-color: blue;height: 40%;width: 30%;display: flex;flex-direction: column;justify-content: center;align-items: center;"
})


