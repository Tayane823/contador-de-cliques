const button = document.querySelector('.button')
let contador = document.querySelector('.contador')


button.addEventListener('click' , () => {
    contador.innerText =Number(contador.innerText) + 1;

}
 )