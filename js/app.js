// Appel de la fonction argument slideIndex
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous control (n : voir html)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Transition Slide

function showSlides(n) {
    let slides = document.getElementsByClassName("slidy"); // 3 img

    //length = 3

    if (n > slides.length) { 
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    //Pour slide infini
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4000); // Change image 4 seconds
}