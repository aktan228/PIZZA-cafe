const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initizelizeSlider()
// document.addEventListener("DOMContentLoader", initizelizeSlider);


function initizelizeSlider() {


    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        console.log(intervalId);
    }

}
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex) 
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

//








const busket = document.getElementById('busket');

const busketQuantity = document.getElementById('busketQuantity');

let quantity = 0;

function addBusket(){
    quantity += 1
    busketQuantity.innerHTML = quantity;
}