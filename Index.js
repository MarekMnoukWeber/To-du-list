const stredni = document.querySelector(".stredni")
const zadane_ukoly = document.getElementById("zadane")
const splnene_ukoly = document.getElementById("splnene")
const Prikozave_tlacitko = document.querySelector(".button")
const Prikazovy_radek = document.querySelector("#task-to-add")

let zadane = localStorage.getItem("zadane_ukoly")
let splnene = localStorage.getItem("splnene_ukoly")

splnene = (splnene == null) ? 0 : splnene
zadane = (zadane == null) ? 0 : zadane

function načti_data() {
    splnene_ukoly.innerHTML = splnene
    zadane_ukoly.innerHTML = zadane
    let ukoly = localStorage.getItem("ukoly")
    if (ukoly != null) {
        stredni.innerHTML = ukoly
        for (const ukol of stredni.children ) {
            ukol.querySelector("#Oznacit_za_splnene").onclick = e => splnit_ukol(e.target.parentElement)
            ukol.querySelector("#Smazat").onclick = e => smazat_ukol(e.target.parentElement)
        }
    }
}

function ulož_ukol() {
    localStorage.setItem("ukoly", stredni.innerHTML) 
}

function splnit_ukol(task) {
    task.classList.toggle("hotovo") ? splnene++ : splnene--
    splnene_ukoly.innerHTML = splnene
    localStorage.setItem("splnene_ukoly", splnene)
    ulož_ukol()
}

function smazat_ukol(smazany_ukol) {
    smazany_ukol.remove()
    zadane -= 1
    zadane_ukoly.innerHTML = zadane
    ulož_ukol()
}

function Vytvoř_ukol(Název) {
    let novy_ukol = document.querySelector(".vzor").cloneNode(true)

    novy_ukol.querySelector("p").innerHTML = Název 
    novy_ukol.classList.remove("vzor")

    novy_ukol.querySelector("#Oznacit_za_splnene").onclick = e => splnit_ukol(e.target.parentElement)
    novy_ukol.querySelector("#Smazat").onclick = e => smazat_ukol(e.target.parentElement)

    return novy_ukol
}

function dalsi_ukol (jmeno) {
    let novy_ukol = Vytvoř_ukol(jmeno)
    stredni.append(novy_ukol)
    zadane_ukoly.innerHTML = ++zadane
    localStorage.setItem("zadane_ukoly", zadane)
    ulož_ukol()
}

Prikozave_tlacitko.onclick = e => {
    if (Prikazovy_radek.value == "") {
        alert("Neťapká to")

    } else {
        dalsi_ukol(Prikazovy_radek.value)

    }
}

načti_data()
