let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener("scroll", mostrarScroll)


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-50%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-25%";
    },500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-25%";
    },500);
}

btnRight.addEventListener("click",function(){
    Next();
});

btnLeft.addEventListener("click",function(){
    Prev();
});

setInterval(function(){
    Next();
}, 7000);