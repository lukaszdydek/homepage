function pokaz() {
    document.getElementById("ukryty").innerHTML = "Czesiek Paczesiek to mój pseudonim. Czytaj następne strony, a dowiesz się cokolwiek o nim.";
}
function ukryj() {
    document.getElementById("ukryty").innerHTML = "...";
}

/* Druga funkcja*/

const name = 'Łukasz';
const age = 34;

alert(`Nazywam się ${name} i mam ${age} lata.`); /* "``" oznacza literał i jego formatowanie jest odzwierciedlane podczas wyświetlania, np. twardy Enter itp. Literały są polecane zamiast metody z plusami.*/

const pusty = document.querySelector('.about__paragraph--pusty, .about__paragraph--pusty.js');
console.log(pusty.innerHTML);
pusty.innerHTML = '<p style="font-size:25px; color:red;">Jestem akapitem, który się pojawia!!!</p>';