
const sourceButton = document.querySelector('#source')
const layoutButton = document.querySelector('#layout')
const correctionButton = document.querySelector('#correction')
const processingButton = document.querySelector('#processing')
const screenButton = document.querySelector('#screen')
const monitorButton = document.querySelector('#monitor')
const presetButton = document.querySelector('#preset')

const layoutImg = document.querySelector('#layoutImg')
const sourceImg = document.querySelector('#sourceImg')
const correctionImg = document.querySelector('#correctionImg')
const processingImg = document.querySelector('#processingImg')
const screenImg = document.querySelector('#screenImg')
const monitorImg = document.querySelector('#monitorImg')
const presetImg = document.querySelector('#presetImg')

sourceImg.classList.add('cerrar')
layoutImg.classList.add('cerrar')
correctionImg.classList.add('cerrar')
processingImg.classList.add('cerrar')
screenImg.classList.add('cerrar')
monitorImg.classList.add('cerrar')
presetImg.classList.add('cerrar')

presetButton.addEventListener('mouseover', () => { 
    presetImg.classList.remove('cerrar')
    presetImg.classList.add('abrir') 
})

presetButton.addEventListener('mouseout', () => { 
    presetImg.classList.remove('abrir')
    presetImg.classList.add('cerrar') 
})

monitorButton.addEventListener('mouseover', () => { 
    monitorImg.classList.remove('cerrar')
    monitorImg.classList.add('abrir') 
})

monitorButton.addEventListener('mouseout', () => { 
    monitorImg.classList.remove('abrir')
    monitorImg.classList.add('cerrar') 
})

screenButton.addEventListener('mouseover', () => { 
    screenImg.classList.remove('cerrar')
    screenImg.classList.add('abrir') 
})

screenButton.addEventListener('mouseout', () => { 
    screenImg.classList.remove('abrir')
    screenImg.classList.add('cerrar') 
})

processingButton.addEventListener('mouseover', () => { 
    processingImg.classList.remove('cerrar')
    processingImg.classList.add('abrir') 
})

processingButton.addEventListener('mouseout', () => { 
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
    layoutImg.classList.remove('cerrar')
    layoutImg.classList.add('abrir') 
})

layoutButton.addEventListener('mouseout', () => { 
    layoutImg.classList.remove('abrir')
    layoutImg.classList.add('cerrar') 
})

correctionButton.addEventListener('mouseover', () => { 
    correctionImg.classList.remove('cerrar')
    correctionImg.classList.add('abrir') 
})

correctionButton.addEventListener('mouseout', () => { 
    correctionImg.classList.remove('abrir')
    correctionImg.classList.add('cerrar') 
})