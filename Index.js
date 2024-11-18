const stredni = document.querySelector(".stredni")

let Prikozave_tlacitko = document.querySelector(".button")
let Prikazovy_radek = document.querySelector("#task-to-add")
let zadane_ukoly = document.querySelector(".text_zadane")



function Vytvoř_ukol(Název) {
    let novy_ukol = document.querySelector(".vzor").cloneNode(true)

    novy_ukol.querySelector("p").innerHTML = Název 
    novy_ukol.classList.remove("vzor")
    new_task.querySelector(".zadane").onclick = e => {
        e.target.classList.toggle("done")
    }

    stredni.append(novy_ukol)
}


Prikozave_tlacitko.onclick = e => {
    if (Prikazovy_radek.value == "") {
        alert("Neťapká to")

    } else {
        Vytvoř_ukol(Prikazovy_radek.value)

    }
}

