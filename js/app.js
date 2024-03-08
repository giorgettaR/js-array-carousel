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
    // console.log(imagesUrl[i]);
    imagesHtmlCode +=
    `<div class="file">
        <img src="${imagesUrl[i]}">
    </div>
    `;
}

console.log(imagesHtmlCode);

// aggiungere struttura immagini all'html

// creare interazione click sulle freccie