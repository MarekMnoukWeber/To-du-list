const stredni = document.querySelector(".stredni")
const zadane_ukoly = document.getElementById("zadane")
const splnene_ukoly = document.getElementById("splnene")

let Prikozave_tlacitko = document.querySelector(".button")
let Prikazovy_radek = document.querySelector("#task-to-add")
let zadane = 0
let splnene = 0

function splnit_ukol(task) {
    task.classList.toggle("hotovo") ? splnene++ : splnene--
    splnene_ukoly.innerHTML = splnene
}

function smazat_ukol(smazany_ukol) {
    smazany_ukol.remove()
    zadane -= 1
    zadane_ukoly.innerHTML = zadane
}

function Vytvoř_ukol(Název) {
    let novy_ukol = document.querySelector(".vzor").cloneNode(true)

    novy_ukol.querySelector("p").innerHTML = Název 
    novy_ukol.classList.remove("vzor")
    novy_ukol.querySelector("#Oznacit_za_splnene").onclick = e => splnit_ukol(e.target.parentElement)
    novy_ukol.querySelector("#Smazat").onclick = e => smazat_ukol(e.target.parentElement)

    
    return novy_ukol
}

function add_task (jmeno) {
    let novy_ukol = Vytvoř_ukol(jmeno)
    stredni.append(novy_ukol)
    zadane_ukoly.innerHTML = ++zadane
}

Prikozave_tlacitko.onclick = e => {
    if (Prikazovy_radek.value == "") {
        alert("Neťapká to")

    } else {
        add_task(Prikazovy_radek.value)

    }
}

