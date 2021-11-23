const time = 1500;
const img = document.querySelector('.partners img')
let partnerNumber = 0;

const changePartnerImg = () => {
img.src = `img/partnersSmall/partners${partnerNumber <= 5 ? partnerNumber++ : partnerNumber = 0}.png`
}

setInterval(changePartnerImg, time)