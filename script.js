let offset = 0
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.one').addEventListener('click', function(){
    offset = offset + 1010
    sliderLine.style.left = -offset + 'px'
})