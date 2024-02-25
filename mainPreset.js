import './intro.min.js'
import './styleMenu.css'

const modal = document.querySelector('#dialogo')
const buttonYes = document.querySelector('#yes')
const buttonNo = document.querySelector('#no')

const start = () => {
  introJs().oncomplete(async () => {
      return new Promise((resolve) => {
        end()
        setInterval(resolve, 500);
      });
  }).onbeforeexit(function () {
    return end();
  }).start()
} 

buttonYes.addEventListener('click', () => { window.location.replace('http://localhost:5173/preset1.html')})

buttonNo.addEventListener('click', () => {window.location.replace('http://localhost:5173/index.html')})

modal.classList.add('cerrar')


const end = () => {
  modal.classList.remove('cerrar')
  modal.classList.add('abrir')
  modal.showModal()
}


start()

