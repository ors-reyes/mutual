let departamentoNumero = 0
const modal = document.querySelector(".modal")
const strong = document.querySelector("strong")
console.log(strong)

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
    // Botones Pisos
    const btnsBb = btnsMono.querySelectorAll(".pisosMono")
    const btnsBb2 = edificio.querySelector(".btnsUn").querySelectorAll(".pisosUn")
    const btnsBc = btnsDos.querySelectorAll(".pisosDos")
    // Pisos
    const pisosBb = edificio.querySelector(".bloqueB").querySelectorAll(".pBb")
    const pisosBc = edificio.querySelector(".bloqueC").querySelectorAll(".pBc")
    // departamentos
    const mono = edificio.querySelector("#bloqB").querySelectorAll(".mono")
    const mono4 = edificio.querySelector(".pBb").querySelectorAll(".mono")
    const un = edificio.querySelector("#bloqB").querySelectorAll(".un")
    const un4 = edificio.querySelector(".pBb").querySelectorAll(".un")
    const dos = edificio.querySelector("#bloqC").querySelectorAll(".dos")
    // p13
    const hsC = edificio.querySelectorAll(".hsC")
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
        pisosBb.forEach(bB => bB.classList.remove("moverBloques"))
        pisosBb.forEach(bB => bB.classList.remove("volverBloques"))
        pisosBc.forEach(bC => bC.classList.remove("moverBloques"))
        pisosBc.forEach(bC => bC.classList.remove("volverBloques"))
        btnsBb.forEach(btn => btn.classList.remove("btnDisable"))
        btnsBb2.forEach(btn => btn.classList.remove("btnDisable"))
        btnsBc.forEach(btn => btn.classList.remove("btnDisable"))
        mono.forEach(mon=>mon.classList.remove("active"))
        mono4.forEach(mon=>mon.classList.remove("active"))
        un.forEach(mon=>mon.classList.remove("active"))
        un4.forEach(mon=>mon.classList.remove("active"))
        dos.forEach(mon=>mon.classList.remove("active"))
        btnsBc.forEach(btn => btn.classList.remove("btnDisable"))
        hsC.forEach(hC => hC.classList.remove("pActive"))
        console.log(departamentoNumero)
        departamentoNumero = 0
    }
    const clickMono = ()=>{
        clickReset()
        mono.forEach(mon=>mon.classList.add("active"))
        mono4.forEach(mon=>mon.classList.add("active"))
        primerClick = true
        primerClick2 = true
        unDormitorio.classList.add("moverBntsUnDos")
        dosDormitorios.classList.add("moverBntsUnDos")
        btnsMono.classList.add("displayBlock")
        monoAmbiente.classList.add("btnDisable")
        pisosBb.forEach(bB => bB.classList.add("moverBloques"))
        pisosBc.forEach(bC => bC.classList.add("volverBloques"))
    }
    const clickUn = ()=>{
        clickReset()
        un.forEach(mon=>mon.classList.add("active"))
        un4.forEach(mon=>mon.classList.add("active"))
        primerClick2 = true
        primerClick ? unDormitorio.classList.add("volverBntsUnDos") : null
        dosDormitorios.classList.add("moverBntsUnDos")
        btnsUn.classList.add("displayBlock")
        unDormitorio.classList.add("btnDisable")
        pisosBb.forEach(bB => bB.classList.add("moverBloques"))
        pisosBc.forEach(bC => bC.classList.add("volverBloques"))
    }
    const clickDos = ()=>{
        clickReset()
        dos.forEach(mon=>mon.classList.add("active"))
        primerClick = true
        primerClick2 ? dosDormitorios.classList.add("volverBntsUnDos") : null
        dosDormitorios.classList.add("btnDisable")
        btnsDos.classList.add("displayBlock")
        pisosBc.forEach(bC => bC.classList.add("moverBloques"))
        pisosBb.forEach(bB => bB.classList.add("volverBloques"))
    }
    // Seleccionar pisos
    const pisobBMono = ()=>{
        btnsBb.forEach((btn, ind)=>(
            btn.addEventListener("click", ()=>{
                btnsBb.forEach(btn => btn.classList.remove("btnDisable"))
                const mismo = btn.classList.value.slice(10, 14)
                pisosBb.forEach(bB => {
                    if(mismo === bB.classList.value.slice(4, 8)){
                        bB.classList.add("moverBloques")
                        bB.classList.remove("volverBloques")
                        btn.classList.add("btnDisable")
                    }else{
                        bB.classList.add("volverBloques")
                    }
                });
            })
        ))
    }
    const pisobBUn = ()=>{
        btnsBb2.forEach((btn, ind)=>(
            btn.addEventListener("click", ()=>{
                btnsBb2.forEach(btn => btn.classList.remove("btnDisable"))
                const mismo = btn.classList.value.slice(8, 12)
                pisosBb.forEach(bB => {
                    if(mismo === bB.classList.value.slice(4, 8)){
                        bB.classList.add("moverBloques")
                        bB.classList.remove("volverBloques")
                        btn.classList.add("btnDisable")
                    }else{
                        bB.classList.add("volverBloques")
                    }
                });
            })
        ))
    }
    const pisosDos = ()=>{
        btnsBc.forEach((btn, ind)=>(
            btn.addEventListener("click", ()=>{
                btnsBc.forEach(btn => btn.classList.remove("btnDisable"))
                hsC.forEach(hC => hC.classList.remove("pActive"))
                const mismo = btn.classList.value.slice(9, 13)
                pisosBc.forEach(bB => {
                    if(mismo === bB.classList.value.slice(4, 8)){
                        bB.classList.add("moverBloques")
                        bB.classList.remove("volverBloques")
                        btn.classList.add("btnDisable")
                        hsC.forEach(hC=>{
                            if(mismo === hC.classList.value.slice(4, 8)){                                
                                hC.classList.add("pActive")
                                hC.addEventListener("click", ()=>{
                                    const c1 = edificio.querySelector(".c1").querySelectorAll(".hBtns")
                                    c1.forEach(c=>{
                                        c.addEventListener("click", ()=>{
                                            departamentoNumero = c.classList.value.slice(1, 5)
                                            strong.innerText  = departamentoNumero
                                            modal.showModal()
                                        })
                                    })
                                })
                                hC.addEventListener("click", ()=>{
                                    const c2 = edificio.querySelector(".c2").querySelectorAll(".hBtns")
                                    c2.forEach(c=>{
                                        c.addEventListener("click", ()=>{
                                            departamentoNumero = c.classList.value.slice(1, 5)
                                            strong.innerText  = departamentoNumero
                                            modal.showModal()
                                        })
                                    })
                                })
                                hC.addEventListener("click", ()=>{
                                    const c3 = edificio.querySelector(".c3").querySelectorAll(".hBtns")
                                    c3.forEach(c=>{
                                        c.addEventListener("click", ()=>{
                                            departamentoNumero = c.classList.value.slice(1, 5)
                                            strong.innerText  = departamentoNumero
                                            modal.showModal()
                                        })
                                    })
                                })
                                hC.addEventListener("click", ()=>{
                                    const c4 = edificio.querySelector(".c4").querySelectorAll(".hBtns")
                                    c4.forEach(c=>{
                                        c.addEventListener("click", ()=>{
                                            departamentoNumero = c.classList.value.slice(1, 5)
                                            strong.innerText  = departamentoNumero
                                            modal.showModal()
                                        })
                                    })
                                })
                                hC.addEventListener("click", ()=>{
                                    const c5 = edificio.querySelector(".c5").querySelectorAll(".hBtns")
                                    c5.forEach(c=>{
                                        c.addEventListener("click", ()=>{
                                            departamentoNumero = c.classList.value.slice(1, 5)
                                            strong.innerText  = departamentoNumero
                                            modal.showModal()
                                        })
                                    })
                                })
                                hC.addEventListener("click", ()=>{
                                    const c6 = edificio.querySelector(".c6").querySelectorAll(".hBtns")
                                    c6.forEach(c=>{
                                        c.addEventListener("click", ()=>{
                                            departamentoNumero = c.classList.value.slice(1, 5)
                                            strong.innerText  = departamentoNumero
                                            modal.showModal()
                                        })
                                    })
                                })
                            }
                        })
                    }else{
                        bB.classList.add("volverBloques")
                    }
                });
            })
        ))
    }
    // Clicks
    reset.addEventListener("click", ()=>{clickReset()})
    monoAmbiente.addEventListener("click", ()=>{
        clickMono()
        pisobBMono()
    })
    unDormitorio.addEventListener("click", ()=>{
        clickUn()
        pisobBUn()
    })
    dosDormitorios.addEventListener("click", ()=>{
        clickDos()
        pisosDos()
    })
}, "300");

function sendwhatsapp(){
    var phonenumber = "+595981751986";

    var name = document.querySelector(".name").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"Mi nombre es :  "+name+"%0a"
    +"Me podrian enviar más información sobre el departamento N° : "+departamentoNumero+" %0a"
    +"%0a"
    +"Gracias";
    window.open(url, '_blank').focus();
  }