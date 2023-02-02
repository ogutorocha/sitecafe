//modal

let modal = document.getElementById("modal")
let func = document.getElementById("func")
let fecha = document.getElementById("buttonx")

func.onclick = function(){
    modal.style.display = "block"
}

fecha.onclick = function () {
    modal.style.display = "none"
}

//botoes
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")

img1.onmouseover = function () {
    btimg1.style.display = "block"
}
 
img1.onmouseout = function () {
    btimg1.style.display = "none"
}

img2.onmouseover = function () {
    btimg2.style.display = "block"
}
 
img2.onmouseout = function () {
    btimg2.style.display = "none"
}

img3.onmouseover = function () {
    btimg3.style.display = "block"
}
 
img3.onmouseout = function () {
    btimg3.style.display = "none"
}

img4.onmouseover = function () {
    btimg4.style.display = "block"
}
 
img4.onmouseout = function () {
    btimg4.style.display = "none"
}