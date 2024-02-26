const login = localStorage.getItem('login')
console.log(login)
if (!login) window.location.replace('./login.html')

const logout = document.querySelector('#logout')
logout.addEventListener('click', () => {
    window.localStorage.clear()
    window.location.replace('./login.html')
})


const sourceButton = document.querySelector('#source')
const layoutButton = document.querySelector('#layout')
const correctionButton = document.querySelector('#correction')
const processingButton = document.querySelector('#processing')
const screenButton = document.querySelector('#screen')
const monitorButton = document.querySelector('#monitor')
const presetButton = document.querySelector('#preset')
const esquemasButton = document.querySelector('#esquemas')

const layoutImg = document.querySelector('#layoutImg')
const sourceImg = document.querySelector('#sourceImg')
const correctionImg = document.querySelector('#correctionImg')
const processingImg = document.querySelector('#processingImg')
const screenImg = document.querySelector('#screenImg')
const monitorImg = document.querySelector('#monitorImg')
const presetImg = document.querySelector('#presetImg')
const esquemasImg = document.querySelector('#esquemasImg')

const descSoft = document.querySelector('#descSoft')

//sourceImg.classList.add('cerrar')
layoutImg.classList.add('cerrar')
correctionImg.classList.add('cerrar')
processingImg.classList.add('cerrar')
screenImg.classList.add('cerrar')
monitorImg.classList.add('cerrar')
presetImg.classList.add('cerrar')
esquemasImg.classList.add('cerrar')

esquemasButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('cerrar') 
    esquemasImg.classList.remove('cerrar')
    esquemasImg.classList.add('abrir')
    descSoft.classList.remove('abrir')
    descSoft.classList.add('cerrar') 
})

esquemasButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    esquemasImg.classList.remove('abrir')
    esquemasImg.classList.add('cerrar')
    descSoft.classList.add('abrir')
    descSoft.classList.remove('cerrar')  
})

presetButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('cerrar') 
    presetImg.classList.remove('cerrar')
    presetImg.classList.add('abrir') 
})

presetButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    presetImg.classList.remove('abrir')
    presetImg.classList.add('cerrar') 
})

monitorButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('cerrar') 
    monitorImg.classList.remove('cerrar')
    monitorImg.classList.add('abrir') 
})

monitorButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    monitorImg.classList.remove('abrir')
    monitorImg.classList.add('cerrar') 
})

screenButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('cerrar') 
    screenImg.classList.remove('cerrar')
    screenImg.classList.add('abrir') 
})

screenButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    screenImg.classList.remove('abrir')
    screenImg.classList.add('cerrar') 
})

processingButton.addEventListener('mouseover', () => { 
    sourceImg.classList.add('cerrar')
    processingImg.classList.remove('cerrar')
    processingImg.classList.add('abrir') 
})

processingButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    processingImg.classList.remove('abrir')
    processingImg.classList.add('cerrar') 
})

sourceButton.addEventListener('mouseover', () => { 
    sourceImg.classList.remove('cerrar')
    sourceImg.classList.add('abrir') 
})

sourceButton.addEventListener('mouseout', () => { 
    sourceImg.classList.remove('abrir')
    sourceImg.classList.add('cerrar') 
})

layoutButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('cerrar') 
    layoutImg.classList.remove('cerrar')
    layoutImg.classList.add('abrir') 
})

layoutButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    layoutImg.classList.remove('abrir')
    layoutImg.classList.add('cerrar') 
})

correctionButton.addEventListener('mouseover', () => {
    sourceImg.classList.add('cerrar') 
    correctionImg.classList.remove('cerrar')
    correctionImg.classList.add('abrir') 
})

correctionButton.addEventListener('mouseout', () => {
    sourceImg.classList.add('cerrar') 
    correctionImg.classList.remove('abrir')
    correctionImg.classList.add('cerrar') 
})