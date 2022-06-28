// creamos las variables
const carrito = document.getElementById('carrito');
const listaCursos = document.getElementById('lista-cursos');

//listeners
cargarEventListeners();

function cargarEventListeners() {
    // dispara cuando se presiona el boton de agregar al carrito
    cursos.addEventListener('click', comprarcurso);
}


// funciones

function comprarcurso(e) {
    e.preventDefault();
    // imprimimos en consola para ver los datos al cliquear el boton
    console.log(e.target.classList);
}