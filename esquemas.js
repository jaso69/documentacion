const login = localStorage.getItem('login')
if (!login) window.location.replace('./login.html')
const logout = document.querySelector('#logout')
logout.addEventListener('click', () => {
    window.localStorage.clear()
    window.location.replace('./login.html')
})

const sourceButton = document.querySelector('#source')
const pantallaButton = document.querySelector('#pantalla')
const electricoButton = document.querySelector('#electrico')
const iluminacionButton = document.querySelector('#iluminacion')
const consejoButton = document.querySelector('#consejo')


const pantallaImg = document.querySelector('#pantallaImg')
const sourceImg = document.querySelector('#sourceImg')
const electricoImg = document.querySelector('#electricoImg')
const iluminacionImg = document.querySelector('#iluminacionImg')
const consejoImg = document.querySelector('#consejoImg')

pantallaImg.classList.add('cerrar')
sourceImg.classList.add('cerrar')
electricoImg.classList.add('cerrar')
iluminacionImg.classList.add('cerrar')
consejoImg.classList.add('cerrar')

sourceButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('abrir') 
    sourceImg.classList.remove('cerrar')
})

sourceButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    sourceImg.classList.remove('abrir')
})

pantallaButton.addEventListener('mouseover', () => {
    pantallaImg.classList.remove('cerrar')
    pantallaImg.classList.add('abrir') 
})

pantallaButton.addEventListener('mouseout', () => {
    pantallaImg.classList.remove('abrir')
    pantallaImg.classList.add('cerrar') 
})

electricoButton.addEventListener('mouseover', () => {
    electricoImg.classList.remove('cerrar')
    electricoImg.classList.add('abrir') 
})

electricoButton.addEventListener('mouseout', () => {
    electricoImg.classList.remove('abrir')
    electricoImg.classList.add('cerrar') 
})

iluminacionButton.addEventListener('mouseover', () => {
    iluminacionImg.classList.remove('cerrar')
    iluminacionImg.classList.add('abrir') 
})

iluminacionButton.addEventListener('mouseout', () => {
    iluminacionImg.classList.remove('abrir')
    iluminacionImg.classList.add('cerrar') 
})

consejoButton.addEventListener('mouseover', () => { 
    consejoImg.classList.remove('cerrar')
    consejoImg.classList.add('abrir') 
})

consejoButton.addEventListener('mouseout', () => {
    consejoImg.classList.remove('abrir')
    consejoImg.classList.add('cerrar') 
})

