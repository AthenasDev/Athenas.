function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
  
  btnMenu.addEventListener('click', ()=>{
      menu.classList.add('abrir-menu')
  })
  
  menu.addEventListener('click', ()=>{
      menu.classList.remove('abrir-menu')
  })
  
  overlay.addEventListener('click', ()=>{
      menu.classList.remove('abrir-menu')
  })


