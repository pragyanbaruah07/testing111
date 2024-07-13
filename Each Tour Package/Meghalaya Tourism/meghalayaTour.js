//Each package Selection Button (Button Element)
let neHorPack1 = document.getElementById("neHorizonMeP1");
let neHorPack2 = document.getElementById("neHorizonMeP2");
let neHorPack3 = document.getElementById("neHorizonMeP3");
let neHorPack4 = document.getElementById("neHorizonMeP4");
let neHorPack5 = document.getElementById("neHorizonMeP5");
let neHorPack6 = document.getElementById("neHorizonMeP6");

//Each package Selection Card (Div Element)
let neHorpackCard1 = document.getElementById("neHorizonTourMeT1");
let neHorpackCard2 = document.getElementById("neHorizonTourMeT2");
let neHorpackCard3 = document.getElementById("neHorizonTourMeT3");
let neHorpackCard4 = document.getElementById("neHorizonTourMeT4");
let neHorpackCard5 = document.getElementById("neHorizonTourMeT5");
let neHorpackCard6 = document.getElementById("neHorizonTourMeT6");

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


