//burger
const burgerIcons = document.querySelectorAll('.burgerFas');
const burgerNavi = document.querySelectorAll('nav ul li a');

const burger = function (e) {
    document.querySelector('nav').classList.toggle('off');
    for (ico of burgerIcons) ico.classList.toggle('off');
}

for (ico of burgerIcons) ico.addEventListener('click', burger);
for (a of burgerNavi) a.addEventListener('click', burger);

//pisanie na maszynie [HEADER]
const motto = document.querySelector('.motto h2');
const quoteAuthors = document.querySelector('.names');
const h2 = '"Za każdym razem staramy się stworzyć taki film który pozwoli wam osiągnąć wasze cele. Bo wasz sukces jest też naszym sukcesem."'
const authors = '- PAWEŁ & WOJTEK -';

let i = 0;
let j = 0;

const writeQuote = () => {
    motto.textContent += h2[i++]
    if (i >= h2.length) {
        clearInterval(maszynaQuote)
        const writeAuthors = () => {
            quoteAuthors.textContent += authors[j++]
            if (j >= authors.length) clearInterval(maszynaAuthors)
        }
        const maszynaAuthors = setInterval(writeAuthors, 30)
    }
}

let maszynaQuote = setInterval(writeQuote, 20)

//reklama firm [slider]
const partnersSlideTime = 2000;

const img = document.querySelector('.partners img')
let partnerNumber = 0;

const changePartnerImg = () => {
    img.src = `img/partnersSmall/partner${partnerNumber <= 5 ? partnerNumber++ : partnerNumber = 0}.png`
}

setInterval(changePartnerImg, partnersSlideTime);