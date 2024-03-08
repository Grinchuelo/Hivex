let scrollButton = document.querySelector('.scroll-button');
let bienvenidaWindow = document.querySelector('bienvenidaWindow');
console.log("altura")
function scroll() {
    window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
}
scrollButton.addEventListener('click', scroll);
