const images = document.querySelectorAll('.images-box img');
const paragraphs = document.querySelectorAll('.images-box p');
const imagesBox = document.querySelectorAll('.images-box')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let sliderIndex = 0;

images.forEach((img, index) => {
    if (index !== 0) {
        img.style.display = 'none';
    }
});
paragraphs.forEach((paragraph, index) => {
    if (index !== 0) {
        paragraph.style.display = 'none';
    }
});


images.forEach((image, index) => {
    image.addEventListener('mouseover', function () {
        paragraphs.forEach(paragraph => {
            paragraph.style.display = 'none';
        });
        paragraphs[index].style.display = 'block';
    });
    image.addEventListener('mouseout', function(){
        paragraphs.forEach(paragraph => {
            paragraph.style.display = 'none';
        });
    } )
});




next.addEventListener('click', nextSlider)
prev.addEventListener('click', prevSlider)



function nextSlider() {
    sliderIndex++;
    paragraphs.forEach(paragraph => {
        paragraph.style.display = 'none';
    });
    if (sliderIndex >= images.length - 1) {
        sliderIndex = images.length - 1;
        next.style.display = 'none'; 
    }
    prev.style.display = 'block'; 
    showSlider();
}

function prevSlider() {
    sliderIndex--;
    if (sliderIndex <= 0) {
        sliderIndex = 0;
        prev.style.display = 'none'; 
    }
    next.style.display = 'block'; 
    showSlider();
}


function showSlider(){
    images.forEach((img, index) => {
        if (index === sliderIndex) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}
