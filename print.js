const el = document.querySelector('#boton')
   el.addEventListener('click', () => {
      document.querySelector('#boton').style.display = 'none'
      document.querySelector('#volver').style.display = 'none'
      const printSection = document.createElement('div')
      document.querySelector('div').style.display = 'flex'
      document.querySelector('div').style.height = '90vh'
      const elemToPrint = document.querySelector('#img');
      printSection.innerHTML = elemToPrint
      let domClone = elemToPrint.cloneNode(true);
      printSection.appendChild(domClone);
      window.print(); 
      document.querySelector('#boton').style.display = 'flex'
      document.querySelector('#volver').style.display = 'flex'
   })