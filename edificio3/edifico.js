const btnUno = document.querySelector(".unDormoi")
const btnDos = document.querySelector(".unDormoiMono")
const btnTres = document.querySelector(".dosDormoi")

const bloqueB = document.querySelector(".bloqueB")
const bloqueC = document.querySelector(".bloqueC")

const botonesBloqueB = document.querySelector(".botonesBloqueB")
const botonesBloqueC = document.querySelector(".botonesBloqueC")
// verBtn1
// verBtn2
btnUno.addEventListener("click", ()=>{
    btnUno.style.opacity = 0.2
    btnUno.style.pointerEvents = "none"
    btnDos.style.opacity = 1
    btnDos.style.pointerEvents = "all"
    btnTres.style.opacity = 1
    btnTres.style.pointerEvents = "all"
    bloqueC.classList.remove("actB")
    
    btnTres.classList.add("moveY")
    btnDos.classList.add("moveY")
    botonesBloqueB.classList.remove("verBtn2")
    botonesBloqueC.classList.remove("verBtn3")
    botonesBloqueB.classList.add("verBtn1")

    bloqueB.classList.forEach(clase=>{
        if(clase==="actB"){
            // bloqueB.classList.remove("actB")
        }else{
            bloqueB.classList.add("actB")
        }
    })
})
btnDos.addEventListener("click", ()=>{
    btnDos.style.opacity = 0.2
    btnDos.style.pointerEvents = "none"
    btnUno.style.opacity = 1
    btnUno.style.pointerEvents = "all"
    btnTres.style.opacity = 1
    btnTres.style.pointerEvents = "all"

    btnDos.classList.remove("moveY")
    btnTres.classList.add("moveY")
    botonesBloqueC.classList.remove("verBtn3")
    botonesBloqueB.classList.add("verBtn2")
    


    bloqueC.classList.remove("actB")
    
    bloqueB.classList.forEach(clase=>{
        if(clase==="actB"){
            // bloqueB.classList.remove("actB")
        }else{
            bloqueB.classList.add("actB")
        }
    })
})
btnTres.addEventListener("click", ()=>{
    btnTres.style.opacity = 0.2
    btnTres.style.pointerEvents = "none"
    btnUno.style.opacity = 1
    btnUno.style.pointerEvents = "all"
    btnDos.style.opacity = 1
    btnDos.style.pointerEvents = "all"
    bloqueB.classList.remove("actB")

    btnTres.classList.remove("moveY")
    btnDos.classList.remove("moveY")

    botonesBloqueB.classList.remove("verBtn2")
    botonesBloqueB.classList.remove("verBtn1")
    botonesBloqueC.classList.add("verBtn3")
    
    bloqueC.classList.forEach(clase=>{
        if(clase==="actB"){
            // bloqueC.classList.remove("actB")
        }else{
            bloqueC.classList.add("actB")
        }
    })
})
