
const login = localStorage.getItem('login')
if (login !== 'ok') window.location.replace('./login.html')

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

buttonYes.addEventListener('click', () => { window.location.reload()})

buttonNo.addEventListener('click', () => {window.location.replace('https://documentacion-telefonica.vercel.app/tuto')})

document.querySelector('#dialogo').style.display = 'none'

const end = () => {
  document.querySelector('#dialogo').style.display = 'block'
  modal.showModal()
}

start()

