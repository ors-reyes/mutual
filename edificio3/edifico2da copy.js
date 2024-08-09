const allBloqueB = document.querySelectorAll(".seccionesB")
const allBloqueC = document.querySelectorAll(".seccionesC")
const allFamiliar = document.querySelectorAll(".familiar")
const allSoltero = document.querySelectorAll(".soltero")
const allpareja = document.querySelectorAll(".pareja")
const btnIni = document.querySelectorAll(".btnIni")
const botonesBloqueB = document.querySelector(".botonesBloqueB")
const botonesBloqueC = document.querySelector(".botonesBloqueC")
const reiniarEdi = document.querySelector(".reiniarEdi")
const pisosB = document.querySelectorAll(".pisosB")
const pisosC = document.querySelectorAll(".pisosC")
const esquemaSoltero = document.querySelector(".esquemaSoltero")
const esquemaPareja = document.querySelector(".esquemaPareja")
const esquemaFamila = document.querySelector(".esquemaFamila")

const reiniciar = ()=>{
    esquemaSoltero.classList.remove("mostrarEsquema")
    esquemaPareja.classList.remove("mostrarEsquema")
    esquemaFamila.classList.remove("mostrarEsquema")
    pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
    pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
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
}

reiniarEdi.addEventListener("click", ()=>{reiniciar()})

btnIni.forEach(btn=>{
    if(btn.classList.value.includes("unDormi")){
        btn.addEventListener("click", ()=>{
            esquemaSoltero.classList.remove("mostrarEsquema")
            esquemaPareja.classList.remove("mostrarEsquema")
            esquemaFamila.classList.remove("mostrarEsquema")
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
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
            esquemaSoltero.classList.remove("mostrarEsquema")
            esquemaPareja.classList.remove("mostrarEsquema")
            esquemaFamila.classList.remove("mostrarEsquema")
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
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
            esquemaSoltero.classList.remove("mostrarEsquema")
            esquemaPareja.classList.remove("mostrarEsquema")
            esquemaFamila.classList.remove("mostrarEsquema")
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
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
pisosB.forEach(pisoB=>{
    pisoB.addEventListener("click", (e)=>{
        allSoltero.forEach(soltero=>{
            soltero.classList.value.includes("actTipologia")
            ? esquemaSoltero.classList.add("mostrarEsquema")
            : esquemaPareja.classList.add("mostrarEsquema")
        })
        if(e.target.classList.value=="fnd5to" || e.target.classList.value=="txt5to"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[0].classList.add("actB")
        }
        if(e.target.classList.value=="fnd6to" || e.target.classList.value=="txt6to"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[1].classList.add("actB")
        }
        if(e.target.classList.value=="fnd7to" || e.target.classList.value=="txt7to"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[2].classList.add("actB")
        }
        if(e.target.classList.value=="fnd7mo" || e.target.classList.value=="txt7mo"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[2].classList.add("actB")
        }
        if(e.target.classList.value=="fnd8vo" || e.target.classList.value=="txt8vo"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[3].classList.add("actB")
        }
        if(e.target.classList.value=="fnd9no" || e.target.classList.value=="txt9no"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[4].classList.add("actB")
        }
        if(e.target.classList.value=="fnd10mo" || e.target.classList.value=="txt10mo"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[5].classList.add("actB")
        }
        if(e.target.classList.value=="fnd11ro" || e.target.classList.value=="txt11ro"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[6].classList.add("actB")
        }
        if(e.target.classList.value=="fnd12do" || e.target.classList.value=="txt12do"){
            pisosB.forEach(pisoBs=>pisoBs.classList.remove("desabilitarBtn"))
            pisoB.classList.add("desabilitarBtn")
            allBloqueB.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueB[7].classList.add("actB")
        }
    })
})
pisosC.forEach(pisoC=>{
    pisoC.addEventListener("click", (e)=>{
        esquemaFamila.classList.add("mostrarEsquema")
        if(e.target.classList.value=="fnd13ro" || e.target.classList.value=="txt13ro"){
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
            pisoC.classList.add("desabilitarBtn")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueC[0].classList.add("actB")
        }
        if(e.target.classList.value=="fnd14to" || e.target.classList.value=="txt14to"){
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
            pisoC.classList.add("desabilitarBtn")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueC[1].classList.add("actB")
        }
        if(e.target.classList.value=="fnd15to" || e.target.classList.value=="txt15to"){
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
            pisoC.classList.add("desabilitarBtn")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueC[2].classList.add("actB")
        }
        if(e.target.classList.value=="fnd16to" || e.target.classList.value=="txt16to"){
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
            pisoC.classList.add("desabilitarBtn")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueC[3].classList.add("actB")
        }
        if(e.target.classList.value=="fnd17mo" || e.target.classList.value=="txt17mo"){
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
            pisoC.classList.add("desabilitarBtn")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueC[4].classList.add("actB")
        }
        if(e.target.classList.value=="fnd18vo" || e.target.classList.value=="txt18vo"){
            pisosC.forEach(pisoCs=>pisoCs.classList.remove("desabilitarBtn"))
            pisoC.classList.add("desabilitarBtn")
            allBloqueC.forEach(seccionB=>seccionB.classList.remove("actB"))
            allBloqueC[5].classList.add("actB")
        }
    })
})