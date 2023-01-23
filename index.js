
let h = 0
let g = 0
let r = 0

let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function home1(){
    h += 1
    homeEl.textContent = h 
}

function home2(){
    h += 2
    homeEl.textContent = h 
}

function home3(){
    h += 3
    homeEl.textContent = h 
}

function guest2(){
    g += 2
    guestEl.textContent = g 
}

function guest1(){
    g += 1
    guestEl.textContent = g 
}

function guest3(){
    g += 3
    guestEl.textContent = g 
}

function resetH(){
    r = homeEl.textContent = h = 0
}

function resetG(){
    r = g-g 
    guestEl.textContent = r
    g = 0
}

function resetA(){
    guestEl.textContent = 0
    homeEl.textContent = 0
    g = 0
    h = 0
}