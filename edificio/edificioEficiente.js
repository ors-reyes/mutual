setTimeout(() => {
    const edificio = document.querySelector(".edificio").contentDocument
    console.log(edificio)
    let primerClick = false
    let primerClick2 = false
    // Botones Ini
    const reset = edificio.querySelector(".reset")
    const monoAmbiente = edificio.querySelector(".monoAmbiente")
    const unDormitorio = edificio.querySelector(".unDormitorio")
    const dosDormitorios = edificio.querySelector(".dosDormitorios")
    // botones bloques
    const btnsMono = edificio.querySelector(".btnsMono")
    const btnsUn = edificio.querySelector(".btnsUn")
    const btnsDos = edificio.querySelector(".btnsDos")
    // eventos
    const clickReset = ()=>{
        unDormitorio.classList.remove("moverBntsUnDos")
        dosDormitorios.classList.remove("moverBntsUnDos")
        unDormitorio.classList.remove("volverBntsUnDos")
        dosDormitorios.classList.remove("volverBntsUnDos")
        btnsMono.classList.remove("displayBlock")
        btnsUn.classList.remove("displayBlock")
        monoAmbiente.classList.remove("btnDisable")
        unDormitorio.classList.remove("btnDisable")
        dosDormitorios.classList.remove("btnDisable")
        btnsDos.classList.remove("displayBlock")
    }
    const clickMono = ()=>{
        clickReset()
        primerClick = true
        primerClick2 = true
        unDormitorio.classList.add("moverBntsUnDos")
        dosDormitorios.classList.add("moverBntsUnDos")
        btnsMono.classList.add("displayBlock")
        monoAmbiente.classList.add("btnDisable")
    }
    const clickUn = ()=>{
        clickReset()
        primerClick2 = true
        primerClick ? unDormitorio.classList.add("volverBntsUnDos") : null
        dosDormitorios.classList.add("moverBntsUnDos")
        btnsUn.classList.add("displayBlock")
        unDormitorio.classList.add("btnDisable")
    }
    const clickDos = ()=>{
        clickReset()
        primerClick = true
        primerClick2 ? dosDormitorios.classList.add("volverBntsUnDos") : null
        dosDormitorios.classList.add("btnDisable")
        btnsDos.classList.add("displayBlock")
    }
    // Clicks
    reset.addEventListener("click", ()=>{clickReset()})
    monoAmbiente.addEventListener("click", ()=>{clickMono()})
    unDormitorio.addEventListener("click", ()=>{clickUn()})
    dosDormitorios.addEventListener("click", ()=>{clickDos()})
    
}, "300");