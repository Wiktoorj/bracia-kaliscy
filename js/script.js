//HAMBURGERshow
// const showPosition = () => {
//     const burger = document.querySelector('.burger')
//     const position = window.scrollY;
//     const afterheader = document.querySelector('.target').offsetTop
//     let flag = true;

//     if (position > afterheader / 4) {
//         burger.classList.remove('head')
//         flag = false;
//     } else {
//         burger.classList.add('head')
//         flag = true;
//     }

//     console.log(position, afterheader / 3, flag)
// }
// const afterheader = document.querySelector('.target').offsetTop

// window.addEventListener('scroll', showPosition)

//burger
const burgerIcons = document.querySelectorAll('.burgerFas');
const burgerNavi = document.querySelectorAll('nav ul li a');

const burger = function () {
    document.querySelector('nav').classList.toggle('off');
    for (ico of burgerIcons) ico.classList.toggle('off');
    document.querySelector('.burger').classList.toggle('off');
    document.querySelector('.logoFirmyTop').classList.toggle('off');
    document.querySelector('.nazwaFirmyTop').classList.toggle('off');
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
const time = 2000;
const divs = [...document.querySelectorAll('.dots div')];
const img = document.querySelector('.partners img')

const slide = [{
        img: "img/partnersSmall/partner0.png"
    },
    {
        img: "img/partnersSmall/partner1.png"
    },
    {
        img: "img/partnersSmall/partner2.png"
    },
    {
        img: "img/partnersSmall/partner3.png"
    },
    {
        img: "img/partnersSmall/partner4.png"
    },
    {
        img: "img/partnersSmall/partner5.png"
    }
]

let slideIndex = 0;

const changeDot = () => {
    const dotIndex = divs.findIndex(div => div.classList.contains('active'))
    divs[dotIndex].classList.remove('active');
    divs[slideIndex].classList.add('active');
}

const changeSlide = () => {
    slideIndex++;
    if (slideIndex == slide.length) slideIndex = 0;
    img.src = slide[slideIndex].img;
    changeDot()
}

let indexInterval = setInterval(changeSlide, time)

const dontRepeatUrself = function () {
    if (slideIndex < 0) slideIndex = slide.length - 1
    else if (slideIndex == slide.length) slideIndex = 0;
    img.src = slide[slideIndex].img;
    changeDot()
    indexInterval = setInterval(changeSlide, time)
}

const changeManualy = function (e) {
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(indexInterval);
        e.keyCode === 37 ? slideIndex-- : slideIndex++
        dontRepeatUrself()
    }
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const changeManualyMobileLeft = function () {
    clearInterval(indexInterval);
    slideIndex--
    dontRepeatUrself()
}

const changeManualyMobileRight = function () {
    clearInterval(indexInterval);
    slideIndex++
    dontRepeatUrself()
}


window.addEventListener('keydown', changeManualy)
left.addEventListener('click', changeManualyMobileLeft)
right.addEventListener('click', changeManualyMobileRight)


//left - right art 1-5

const showArt = () => {
    const art1 = document.querySelector('.art1')
    const art2 = document.querySelector('.art2')
    const art3 = document.querySelector('.art3')
    const art4 = document.querySelector('.art4')
    const art5 = document.querySelector('.art5')
    const position = window.scrollY;
    console.log(position, art1.offsetTop, art1.clientHeight, window.innerHeight)
    if (position > art1.offsetTop - window.innerHeight + art1.clientHeight / 2) {
        art1.classList.add('active')
    }
    if (position > art2.offsetTop - window.innerHeight + art2.clientHeight / 2) {
        art2.classList.add('active')
    }
    if (position > art3.offsetTop - window.innerHeight + art3.clientHeight / 2) {
        art3.classList.add('active')
    }
    if (position > art4.offsetTop - window.innerHeight + art4.clientHeight / 2) {
        art4.classList.add('active')
    }
    if (position > art5.offsetTop - window.innerHeight + art5.clientHeight / 2) {
        art5.classList.add('active')
    }
}


window.addEventListener('scroll', showArt)