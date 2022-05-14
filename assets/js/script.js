function typeWrite(e) {
  const textoArray = e.innerHTML.split('');
  e.innerHTML = '';
  textoArray.forEach(function (letter, i) {
      setTimeout(() => {
          e.innerHTML += letter;
      }, 100 * i);
  });
}

const phrase = document.querySelector('.headline');
typeWrite(phrase);