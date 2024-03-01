const el = document.querySelector('#boton')
   // creo el evento del click para cada que se de click en imprimir
   el.addEventListener('click', () => {
      const printSection = document.createElement('div')
      var elemToPrint = document.querySelector('#img');
      printSection.innerHTML = elemToPrint
      let domClone = elemToPrint.cloneNode(true);
      printSection.appendChild(domClone);
      window.print(); //mando a imprimir
   })