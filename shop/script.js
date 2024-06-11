const sliders = document.querySelector('.sliders');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const itemWidth = 325; 
const visibleItems = Math.floor(sliders.parentElement.clientWidth / itemWidth);
const totalItems = document.querySelectorAll('.clothes-images-desc').length;


nextButton.addEventListener('click', function() {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        sliders.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        sliders.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

const logo = document.querySelector('.logo');
logo.addEventListener('click', function(){

})



let submitButton = document.querySelector('.register-button');

const fullNamePattern = /^[А-ЯІЇЄҐ][а-яіїєґ' ]+[А-ЯІЇЄҐ][а-яіїєґ' ]+[А-ЯІЇЄҐ][а-яіїєґ' ]+$/;
const phoneNumberPattern = /^(\+?38)?(\-\s)?0\d{9,}$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]+$/;

const errorMessagesEmptyList = [
    'Вам потрібно ввести ПІБ!',
    'Вам потрібно ввести номер телефону!',
    'Вам потрібно ввести електронну пошту!',
]

const errorMessagesInvalidList = [
    'Невірно введене ПІБ!',
    'Невірно введений номер!',
    'Невірно введена електронна пошта'  
]

function checkField(value, pattern, emptyMessage, invalidMessage, errorElement){
    let isFieldValid = true; 
    if (value === '') {
        errorElement.textContent = emptyMessage;
        isFieldValid = false;
    }
    else{
        const validField = pattern.test(value);
        if(validField){
           errorElement.textContent = ''
        } else{
            errorElement.textContent = invalidMessage;
            isFieldValid = false;
        }
    }
    return isFieldValid;
}

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    
    const form = document.querySelector('form');
    const formData = new FormData(form);
    let isValid = true;

    const fullNameError = document.getElementById('fullNameError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const emailError = document.getElementById('emailError');

    formData.forEach((value, key) => {
        if(key === 'fullName') {
            isValid = checkField(value, fullNamePattern, errorMessagesEmptyList[0], errorMessagesInvalidList[0], fullNameError) && isValid;
           };
        if(key === 'phoneNumber') {
            isValid = checkField(value, phoneNumberPattern, errorMessagesEmptyList[1], errorMessagesInvalidList[1], phoneNumberError) && isValid;
        } 
        if(key === 'email') {
            isValid = checkField(value, emailPattern, errorMessagesEmptyList[2], errorMessagesInvalidList[2], emailError) && isValid;
        };

        if (isValid) {
            form.submit(); 
        }
       
    })

})



const logoButton = document.querySelector('.logo');

logoButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})

