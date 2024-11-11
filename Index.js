const stredni = document.querySelector(".stredni")




function Vytvoř_ukol(Název) {
   let novy_ukol = document.querySelector(".vzor").cloneNode(true)
   novy_ukol.querySelector("p").innerHTML = Název 
   novy_ukol.classList.remove("vzor")
    stredni.append(novy_ukol)
}