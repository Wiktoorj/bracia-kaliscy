const partnersSlideTime = 2000;



const img = document.querySelector('.partners img')
let partnerNumber = 0;

const changePartnerImg = () => {
img.src = `img/partnersSmall/partner${partnerNumber <= 5 ? partnerNumber++ : partnerNumber = 0}.png`
}

setInterval(changePartnerImg, partnersSlideTime)