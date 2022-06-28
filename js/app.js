// creamos las variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//listeners
cargarEventListeners();

function cargarEventListeners() {
    // dispara cuando se presiona el boton de agregar al carrito
    cursos.addEventListener('click', comprarcurso);

    // cuando se elimina un curso del Carrito
    carrito.addEventListener('click', eliminarCurso);
}


// funciones

function comprarcurso(e) {
    e.preventDefault();
    // imprimimos en consola para ver los datos al cliquear el boton
    //console.log(e.target.classList);
    // incluimos una condicional if
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        //console.log(curso);

        // asi que creamos una funcion para que lea los datos de ese card seleccionado
        leerDatosCurso(curso);
    }
}


// funcion leerDatosCurso
function leerDatosCurso(curso) {
    // creamos un objeto para ver la informacion del curso
    const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }
        //console.log(curso);
        //console.log(infoCurso);

    // agregamos el nombre de la funcion que va ser insertar a carrito
    insertarCarrito(infoCurso);
}


// insertar el curso seleccionado y creamos la funcion que creamos su nombre hace un  momento

function insertarCarrito(curso) {
    // hacemos un row para agregar al Carrito
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${curso.imagen}" width=100>
    </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a> 
    </td>
    `;
    listaCursos.appendChild(row);
}

// funcion eliminar cursos
function eliminarCurso(e) {
    e.preventDefault();
    let curso;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
    }


    //console.log('eliminado');
}