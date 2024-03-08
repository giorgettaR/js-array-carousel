// array url immagini

const imagesUrl =[
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]


// imagesUrl.length

// ciclo for che compone l'html delle immagini

let imagesHtmlCode = ``;
for (i = 0; i < imagesUrl.length; i++){
    imagesHtmlCode +=
    `<div class="img">
        <img src="${imagesUrl[i]}">
    </div>
    `;
}

// aggiungere struttura immagini all'html

const imagesBox = document.getElementById('imageBox');
imagesBox.innerHTML += imagesHtmlCode;

const thumbnailsBox = document.getElementById('thumbnails');
thumbnailsBox.innerHTML += imagesHtmlCode;

// creazione HTMLCollections (arrays) immagini

const imagesDiv = document.getElementById('imageBox').getElementsByClassName('img');
console.log(imagesDiv);

const thumbnailsDiv = document.getElementById('thumbnails').getElementsByClassName('img');
console.log(thumbnailsDiv);

// attivare la prima immagine

let activeImage = document.querySelector('.img');
activeImage.classList.add('active');
let activeImageIndex = 0;

// interazione click sulle freccie

const arrowUp = document.querySelector('.arrowUp');
const arrowDown = document.querySelector('.arrowDown');

arrowDown.addEventListener('click', function(){
    imagesDiv[activeImageIndex].classList.remove('active');
    thumbnailsDiv[activeImageIndex].classList.remove('active');
    if (activeImageIndex + 1 !== imagesUrl.length){
        activeImageIndex++;
    } else {
        activeImageIndex = 0;
    }
    imagesDiv[activeImageIndex].classList.add('active');
    thumbnailsDiv[activeImageIndex].classList.add('active');
})

arrowUp.addEventListener('click', function(){
    imagesDiv[activeImageIndex].classList.remove('active');
    thumbnailsDiv[activeImageIndex].classList.remove('active');
    if (activeImageIndex + 1 !== 1){
        activeImageIndex--;
    } else {
        activeImageIndex = imagesUrl.length - 1;
    }
    imagesDiv[activeImageIndex].classList.add('active');
    thumbnailsDiv[activeImageIndex].classList.add('active');
})