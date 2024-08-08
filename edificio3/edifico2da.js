const allBloqueB = document.querySelectorAll(".seccionesB")
const allBloqueC = document.querySelectorAll(".seccionesC")
const allFamiliar = document.querySelectorAll(".familiar")
const allSoltero = document.querySelectorAll(".soltero")
const allpareja = document.querySelectorAll(".pareja")
const btnIni = document.querySelectorAll(".btnIni")
const botonesBloqueB = document.querySelector(".botonesBloqueB")
const botonesBloqueC = document.querySelector(".botonesBloqueC")
const reiniarEdi = document.querySelector(".reiniarEdi")
const este = document.querySelector(".este")

reiniarEdi.addEventListener("click", ()=>{
    console.log("as")
    allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
    allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
    allpareja.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
    allSoltero.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
    allFamiliar.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
    btnIni.forEach(btnIni=>btnIni.classList.remove("moveY"))
    btnIni.forEach(btnIni=>btnIni.classList.remove("desabilitarBtn"))
    botonesBloqueB.classList.remove("mostrarPisosUnDormi")
    botonesBloqueB.classList.remove("mostrarPisosDormiMono")
    botonesBloqueC.classList.remove("mostrarPisosDosDormi")
    reiniarEdi.classList.remove("mostrarReinicio")
})
btnIni.forEach(btn=>{
    if(btn.classList.value.includes("unDormi")){
        btn.addEventListener("click", ()=>{
            reiniarEdi.classList.add("mostrarReinicio")
            botonesBloqueB.classList.add("mostrarPisosUnDormi")
            botonesBloqueB.classList.remove("mostrarPisosDormiMono")
            botonesBloqueC.classList.remove("mostrarPisosDosDormi")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB.forEach(seccionB=>seccionB.classList.add("actB"))
            allSoltero.forEach(seccionB=>seccionB.classList.add("actTipologia"))
            allFamiliar.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
            allpareja.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
            btnIni.forEach(btn=>{
                if(!btn.classList.value.includes("unDormi")){
                    btn.classList.add("moveY")
                    btn.classList.remove("desabilitarBtn")
                }
            })
            btn.classList.add("desabilitarBtn")
        })
    }else if(btn.classList.value.includes("dormiMono")){
        btn.addEventListener("click", ()=>{
            reiniarEdi.classList.add("mostrarReinicio")
            botonesBloqueB.classList.add("mostrarPisosDormiMono")
            botonesBloqueC.classList.remove("mostrarPisosDosDormi")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB.forEach(seccionB=>seccionB.classList.add("actB"))
            allpareja.forEach(seccionB=>seccionB.classList.add("actTipologia"))
            allSoltero.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
            allFamiliar.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
            btnIni.forEach(btn=>{
                btn.classList.remove("moveY")
                if(!btn.classList.value.includes("dormiMono")){
                    btn.classList.remove("desabilitarBtn")
                    btnIni[2].classList.add("moveY")
                }
            })
            btn.classList.add("desabilitarBtn")
        })
    }else if(btn.classList.value.includes("dosDormi")){
        btn.addEventListener("click", ()=>{
            reiniarEdi.classList.add("mostrarReinicio")
            botonesBloqueC.classList.add("mostrarPisosDosDormi")
            botonesBloqueB.classList.remove("mostrarPisosUnDormi")
            botonesBloqueB.classList.remove("mostrarPisosDormiMono")
            allBloqueC.forEach(seccionB=>seccionB.classList.add("actB"))
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allFamiliar.forEach(seccionB=>seccionB.classList.add("actTipologia"))
            allSoltero.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
            allpareja.forEach(seccionB=>seccionB.classList.remove("actTipologia"))
            btnIni.forEach(btn=>{
                btn.classList.remove("moveY")
                if(!btn.classList.value.includes("dosDormi")){
                    btn.classList.remove("desabilitarBtn")
                }
            })
            btn.classList.add("desabilitarBtn")
        })
    }
})