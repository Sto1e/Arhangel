/* const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn = addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readMoreBtn.innerHTML === 'Читај Повеќе'){
        readMoreBtn.innerHTML = 'Читај Помалку'
    }
    else {
        readMoreBtn.innerHTML = 'Читај Повеќе'
    }
} ) */


function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читај повеќе";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Читај Помалку";
      moreText.style.display = "inline";
    }
  }