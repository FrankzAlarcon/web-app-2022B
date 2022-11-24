//const nombre = prompt("Ingrese su nombre:")

//document.querySelector(".name").textContent = nombre

document.addEventListener('DOMContentLoaded', () => {
    const para = document.querySelector('p');

    para.addEventListener('click', updateName);

    function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = `Player 1:  ${name}`;
    }

})