//Each package Selection Button (Button Element)
let neHorPack1 = document.getElementById("neHorizonMiP1");
let neHorPack2 = document.getElementById("neHorizonMiP2");
let neHorPack3 = document.getElementById("neHorizonMiP3");
let neHorPack4 = document.getElementById("neHorizonMiP4");
let neHorPack5 = document.getElementById("neHorizonMiP5");
let neHorPack6 = document.getElementById("neHorizonMiP6");

//Each package Selection Card (Div Element)
let neHorpackCard1 = document.getElementById("neHorizonTourMiT1");
let neHorpackCard2 = document.getElementById("neHorizonTourMiT2");
let neHorpackCard3 = document.getElementById("neHorizonTourMiT3");
let neHorpackCard4 = document.getElementById("neHorizonTourMiT4");
let neHorpackCard5 = document.getElementById("neHorizonTourMiT5");
let neHorpackCard6 = document.getElementById("neHorizonTourMiT6");

neHorPack1.onclick = function(){
    neHorpackCard1.classList.remove("d-none")
    neHorpackCard2.classList.add("d-none")
    neHorpackCard3.classList.add("d-none")
    neHorpackCard4.classList.add("d-none")
    neHorpackCard5.classList.add("d-none")
    neHorpackCard6.classList.add("d-none")

    neHorPack1.classList.remove("ne-h-tour-package-btn")
    neHorPack1.classList.add("ne-h-tour-select-btn-effect")

    neHorPack2.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack3.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack4.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack5.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack6.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack2.classList.add("ne-h-tour-package-btn");
    neHorPack3.classList.add("ne-h-tour-package-btn");
    neHorPack4.classList.add("ne-h-tour-package-btn");
    neHorPack5.classList.add("ne-h-tour-package-btn");
    neHorPack6.classList.add("ne-h-tour-package-btn");
    
}

neHorPack2.onclick = function(){
    neHorpackCard1.classList.add("d-none")
    neHorpackCard2.classList.remove("d-none")
    neHorpackCard3.classList.add("d-none")
    neHorpackCard4.classList.add("d-none")
    neHorpackCard5.classList.add("d-none")
    neHorpackCard6.classList.add("d-none")

    neHorPack2.classList.remove("ne-h-tour-package-btn")
    neHorPack2.classList.add("ne-h-tour-select-btn-effect")

    neHorPack1.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack3.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack4.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack5.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack6.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack1.classList.add("ne-h-tour-package-btn");
    neHorPack3.classList.add("ne-h-tour-package-btn");
    neHorPack4.classList.add("ne-h-tour-package-btn");
    neHorPack5.classList.add("ne-h-tour-package-btn");
    neHorPack6.classList.add("ne-h-tour-package-btn");
}

neHorPack3.onclick = function(){
    neHorpackCard1.classList.add("d-none")
    neHorpackCard2.classList.add("d-none")
    neHorpackCard3.classList.remove("d-none")
    neHorpackCard4.classList.add("d-none")
    neHorpackCard5.classList.add("d-none")
    neHorpackCard6.classList.add("d-none")

    neHorPack3.classList.remove("ne-h-tour-package-btn")
    neHorPack3.classList.add("ne-h-tour-select-btn-effect")

    neHorPack1.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack2.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack4.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack5.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack6.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack1.classList.add("ne-h-tour-package-btn");
    neHorPack2.classList.add("ne-h-tour-package-btn");
    neHorPack4.classList.add("ne-h-tour-package-btn");
    neHorPack5.classList.add("ne-h-tour-package-btn");
    neHorPack6.classList.add("ne-h-tour-package-btn");
}

neHorPack4.onclick = function(){
    neHorpackCard1.classList.add("d-none")
    neHorpackCard2.classList.add("d-none")
    neHorpackCard3.classList.add("d-none")
    neHorpackCard4.classList.remove("d-none")
    neHorpackCard5.classList.add("d-none")
    neHorpackCard6.classList.add("d-none")

    neHorPack4.classList.remove("ne-h-tour-package-btn")
    neHorPack4.classList.add("ne-h-tour-select-btn-effect")

    neHorPack1.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack2.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack3.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack5.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack6.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack1.classList.add("ne-h-tour-package-btn");
    neHorPack2.classList.add("ne-h-tour-package-btn");
    neHorPack3.classList.add("ne-h-tour-package-btn");
    neHorPack5.classList.add("ne-h-tour-package-btn");
    neHorPack6.classList.add("ne-h-tour-package-btn");
}

neHorPack5.onclick = function(){
    neHorpackCard1.classList.add("d-none")
    neHorpackCard2.classList.add("d-none")
    neHorpackCard3.classList.add("d-none")
    neHorpackCard4.classList.add("d-none")
    neHorpackCard5.classList.remove("d-none")
    neHorpackCard6.classList.add("d-none")

    neHorPack5.classList.remove("ne-h-tour-package-btn")
    neHorPack5.classList.add("ne-h-tour-select-btn-effect")

    neHorPack1.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack2.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack4.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack3.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack6.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack1.classList.add("ne-h-tour-package-btn");
    neHorPack2.classList.add("ne-h-tour-package-btn");
    neHorPack4.classList.add("ne-h-tour-package-btn");
    neHorPack3.classList.add("ne-h-tour-package-btn");
    neHorPack6.classList.add("ne-h-tour-package-btn");
}

neHorPack6.onclick = function(){
    neHorpackCard1.classList.add("d-none")
    neHorpackCard2.classList.add("d-none")
    neHorpackCard3.classList.add("d-none")
    neHorpackCard4.classList.add("d-none")
    neHorpackCard5.classList.add("d-none")
    neHorpackCard6.classList.remove("d-none")

    neHorPack6.classList.remove("ne-h-tour-package-btn")
    neHorPack6.classList.add("ne-h-tour-select-btn-effect")

    neHorPack1.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack2.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack4.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack5.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack3.classList.remove("ne-h-tour-select-btn-effect");
    neHorPack1.classList.add("ne-h-tour-package-btn");
    neHorPack2.classList.add("ne-h-tour-package-btn");
    neHorPack4.classList.add("ne-h-tour-package-btn");
    neHorPack5.classList.add("ne-h-tour-package-btn");
    neHorPack3.classList.add("ne-h-tour-package-btn");
}


