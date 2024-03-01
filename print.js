const el = document.querySelector('#boton')
   el.addEventListener('click', () => {
      const printSection = document.createElement('div')
      var elemToPrint = document.querySelector('#img');
      printSection.innerHTML = elemToPrint
      let domClone = elemToPrint.cloneNode(true);
      printSection.appendChild(domClone);
      window.print(); //mando a imprimir
   })