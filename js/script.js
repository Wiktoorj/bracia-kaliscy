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


//pisanie na maszynie [HEADER]
// const motto = document.querySelector('.motto h2');
// const quoteAuthors = document.querySelector('.names');
// const h2 = '"Za każdym razem staramy się stworzyć taki film który pozwoli wam osiągnąć wasze cele. Bo wasz sukces jest też naszym sukcesem."'
// const authors = '- PAWEŁ & WOJTEK -';

// let i = 0;
// let j = 0;



//preloader 

const preload = document.querySelector('.preload');

preload.classList.add('show-preloader');
window.addEventListener('load', () => {
    // const writeQuote = () => {
    //     motto.textContent += h2[i++]
    //     if (i >= h2.length) {
    //         clearInterval(maszynaQuote)
    //         const writeAuthors = () => {
    //             quoteAuthors.textContent += authors[j++]
    //             if (j >= authors.length) clearInterval(maszynaAuthors)
    //         }
    //         const maszynaAuthors = setInterval(writeAuthors, 30)
    //     }

    preload.classList.remove('show-preloader');
    // let maszynaQuote = setInterval(writeQuote, 20)
});

//burger
// const burgerIcons = document.querySelectorAll('.burgerFas');
const burgerNavi = document.querySelectorAll('nav ul li a');
const burg = document.querySelector('.plate1')

const burger = function () {
    document.querySelector('nav').classList.toggle('off');
    burg.classList.toggle('active')
    // for (ico of burgerIcons) ico.classList.toggle('off');
    document.querySelector('.burger').classList.toggle('off');
    document.querySelector('.logoFirmyTop').classList.toggle('off');
    document.querySelector('.nazwaFirmyTop').classList.toggle('off');
}

burg.addEventListener('click', burger);
for (a of burgerNavi) a.addEventListener('click', burger);




//reklama firm [slider]
const time = 2000;
const divs = [...document.querySelectorAll('.dots div')];
const img = document.querySelector('.partners img')
const iLeft = document.querySelector('.left i')
const iRight = document.querySelector('.right i')
const slide = [{
        img: "img/partnersSmall/partners0.png"
    },
    {
        img: "img/partnersSmall/partners1.png"
    },
    {
        img: "img/partnersSmall/partners2.png"
    },
    {
        img: "img/partnersSmall/partners3.png"
    },
    {
        img: "img/partnersSmall/partners4.png"
    },
    {
        img: "img/partnersSmall/partners5.png"
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
    const art1 = document.querySelector('.art1');
    const art2 = document.querySelector('.art2');
    const art3 = document.querySelector('.art3');
    const art4 = document.querySelector('.art4');
    const art5 = document.querySelector('.art5');
    const reset = document.querySelector('.partners');
    const position = window.scrollY;
    // let flag = 1
    if (position > art1.offsetTop - window.innerHeight + art1.clientHeight / 2) {
        art1.classList.add('active');
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

    // if (position < art5.offsetTop - window.innerHeight + art5.clientHeight / 2) {
    //     art5.classList.add('active')
    // }

    // const removeActive = () => {
    //     art1.classList.remove('active');
    //     art3.classList.remove('active');
    //     art4.classList.remove('active');
    //     art5.classList.remove('active');
    //     art2.classList.remove('active');
    // }
    // if (position < art5.offsetTop && flag == true) {
    //     flag = !flag
    // }
    // if (flag = false && position > reset.offsetTop ) {
    //     art1.classList.remove('active');
    //     art3.classList.remove('active');
    //     art4.classList.remove('active');
    //     art5.classList.remove('active');
    //     art2.classList.remove('active');
    //     flag = !flag

    // }
}

window.addEventListener('scroll', showArt)


//more

const buton1 = document.querySelector('.first');
const buton2 = document.querySelector('.second');
const buton3 = document.querySelector('.third');

const faq1btn = document.querySelector('.faqBtn1');
const faq2btn = document.querySelector('.faqBtn2');
const faq3btn = document.querySelector('.faqBtn3');

const p1 = document.querySelector('.pFirst');
const p2 = document.querySelector('.pSecond');
const p3 = document.querySelector('.pThird');

const p1faq = document.querySelectorAll('.faq1');
const p2faq = document.querySelector('.faq2');
const p3faq = document.querySelector('.faq3');

let flag1 = true
let flag2 = true
let flag3 = true

// const firstMore = () => {
//     p1.classList.toggle('off')
//     if (flag1 == true) {
//         buton1.textContent = 'mniej'
//         flag1 = !flag1
//     } else {
//         buton1.textContent = 'więcej'
//         flag1 = !flag1;
//     }
// }
// const secondMore = () => {
//     p2.classList.toggle('off')
//     if (flag2 == true) {
//         buton2.textContent = 'mniej'
//         flag2 = !flag2
//     } else {
//         buton2.textContent = 'więcej'
//         flag2 = !flag2;
//     }
// }
// const thirdMore = () => {
//     p3.classList.toggle('off')
//     if (flag3 == true) {
//         buton3.textContent = 'mniej'
//         flag3 = !flag3
//     } else {
//         buton3.textContent = 'więcej'
//         flag3 = !flag3
//     }
// }

const faq1more = () => {
    p1faq.forEach(p => p.classList.toggle('off'))
    document.querySelectorAll('.fa-arrow-up.faq1i').forEach(arrowUp => arrowUp.classList.toggle('off'))
    document.querySelectorAll('.fa-arrow-down.faq1i').forEach(arrowDown => arrowDown.classList.toggle('off'))
}
const faq2more = () => {
    p2faq.classList.toggle('off')
    document.querySelectorAll('.fa-arrow-up.faq2i').forEach(arrowUp => arrowUp.classList.toggle('off'))
    document.querySelectorAll('.fa-arrow-down.faq2i').forEach(arrowDown => arrowDown.classList.toggle('off'))
}
const faq3more = () => {
    p3faq.classList.toggle('off')
    document.querySelectorAll('.fa-arrow-up.faq3i').forEach(arrowUp => arrowUp.classList.toggle('off'))
    document.querySelectorAll('.fa-arrow-down.faq3i').forEach(arrowDown => arrowDown.classList.toggle('off'))
}

// buton1.addEventListener('click', firstMore)
// buton2.addEventListener('click', secondMore)
// buton3.addEventListener('click', thirdMore)

faq1btn.addEventListener('click', faq1more)
faq2btn.addEventListener('click', faq2more)
faq3btn.addEventListener('click', faq3more)