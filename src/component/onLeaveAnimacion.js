console.log('return onLeaveAnimacion')
const c1 = document.querySelector('.capa_uno');
const c3 = document.querySelector('.capa_tres');
c1.classList.add('hidden');
c3.classList.add('hidden');
c1.classList.remove('animate__animated', 'animate__fadeIn');
c3.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__delay-1s');