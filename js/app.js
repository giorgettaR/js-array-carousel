// array url immagini

const imagesUrl =[
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

// ciclo for che compone l'html delle immagini

let imagesHtmlCode = ``;
for (i = 0; i < imagesUrl.length; i++){
    imagesHtmlCode +=
    `<div class="file">
        <img src="${imagesUrl[i]}">
    </div>
    `;
}
console.log(imagesUrl.length);

// aggiungere struttura immagini all'html

const imagesBox = document.querySelector('.carousel');
imagesBox.innerHTML += imagesHtmlCode;

// creazione HTMLCollectio (array) file immagini

const imagesDiv = document.getElementsByClassName('file');
console.log(imagesDiv);

// attivare la prima immagine

let activeImage = document.querySelector('.file');
activeImage.classList.add('active');
let activeImageIndex = 0;

// interazione click sulle freccie

const arrowUp = document.querySelector('.arrowUp');
const arrowDown = document.querySelector('.arrowDown');

arrowDown.addEventListener('click', function(){
    if (activeImageIndex + 1 !== imagesUrl.length){
        imagesDiv[activeImageIndex].classList.remove('active');
        activeImageIndex++;
    } else {
        imagesDiv[activeImageIndex].classList.remove('active');
        activeImageIndex = 0;
    }
    imagesDiv[activeImageIndex].classList.add('active');
})

arrowUp.addEventListener('click', function(){
    if (activeImageIndex + 1 !== 1){
        imagesDiv[activeImageIndex].classList.remove('active');
        activeImageIndex--;
    } else {
        imagesDiv[activeImageIndex].classList.remove('active');
        activeImageIndex = imagesUrl.length - 1;
    }
    imagesDiv[activeImageIndex].classList.add('active');
})