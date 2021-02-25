const ikons = document.querySelectorAll('.allikon .ikon');
const fullsection = document.querySelector('.spesification');
const gambarpesawat = document.querySelector('.gambarpesawat');

window.addEventListener('DOMContentLoaded', contentposition);
window.addEventListener('resize', contentposition)

function contentposition(){
    ikons.forEach(ikon =>{
        const pin = ikon.querySelector('.pin');
        const isi = ikon.querySelector('.ikon-isi');
        const arrow = ikon.querySelector('.arrow');
        if(pin.offsetLeft + isi.offsetWidth/2 > fullsection.offsetWidth){
            const extraLeft = fullsection.offsetWidth - (pin.offsetLeft + isi.offsetWidth / 2);
            isi.style.left = pin.offsetLeft - isi.offsetWidth / 2 + extraLeft - 50+ 'px';
            console.log(extraLeft);
        } else if(pin.offsetLeft + gambarpesawat.offsetLeft < isi.offsetWidth/2){
            isi.style.left = -isi.offsetLeft + 'px';
        }
        else{
            isi.style.left = pin.offsetLeft - isi.offsetWidth / 2 +'px';
        }
        isi.style.left = pin.offsetLeft - pin.offsetWidth-127 + 'px';
        isi.style.top = pin.offsetTop +24+ 'px';
    })
}


ikons.forEach(ikon =>{
    const pin = ikon.querySelector('.pin');
    const isi = ikon.querySelector('.ikon-isi');
    pin.addEventListener('mousemove',() =>{
        ikon.classList.add('active');
    })
    pin.addEventListener('mouseleave',() => {
        timeout = setTimeout(() => {
            ikon.classList.remove('active'); 
        },1000)   
    })
    isi.addEventListener('mousemove',() =>{
        clearTimeout(timeout);
        ikon.classList.add('active');
    })
    isi.addEventListener('mouseleave',() => {
        timeout = setTimeout(() => {
            ikon.classList.remove('active'); 
        },1000)   
    })
})



