
// luxon para fechas y horas
const DateTime = luxon.DateTime;
// iso crear una fecha (YYYY-MM-DD) (AAAA-MM-DD)
let fecha = document.getElementById("fecha");
const ahora = DateTime.now();
let fechaMostrar = ahora.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
fecha.innerHTML = `${fechaMostrar}`;

// variables y capturas

let discosDiv = document.getElementById("discos");
let veralbum = document.getElementById("veralbum");
let ocultaralbum = document.getElementById("ocultaralbum");
let selectOrden = document.getElementById("selectOrden");
let buscador = document.getElementById("buscador");
let coincidencia = document.getElementById("coincidencia");
let modalBodyCarrito = document.getElementById("modal-bodyCarrito");
let botonCarrito = document.getElementById("botonCarrito");
let precioTotal = document.getElementById("precioTotal");
let productosEnCarrito = [];

if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function agregarAlCarrito(album) {
    let albumAgregado = productosEnCarrito.find((elem) => elem.id === album.id);
    if (albumAgregado === undefined) {
        productosEnCarrito.push(album);
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
        console.log(productosEnCarrito);
        Swal.fire({
            title: `Ha agregado un álbum al carrito`,
            text: `El álbum ${album.titulo} de ${album.autor} ha sido agregado`,
            confirmButtonColor: "green",
            confirmButtonText: "Gracias :D",
            imageUrl: `assets/${album.imagen}`,
            imageHeight: 200
        });
    } else {
        Swal.fire({
            title: `El álbum ya existe en el carrito`,
            icon: "info",
            timer: 2000,
            showConfirmButton: false
        });
    }
}

function cargarProductosCarrito(array) {
    modalBodyCarrito.innerHTML = "";
    array.forEach((productoCarrito) => {
        modalBodyCarrito.innerHTML += `
            <div class="card border-primary mb-3" id="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${productoCarrito.titulo}</h4>
                    <p class="card-text">Precio unitario $${productoCarrito.precio}</p>
                    <p class="card-text">Total de unidades ${productoCarrito.cantidad}</p> 
                    <p class="card-text">SubTotal ${productoCarrito.cantidad * productoCarrito.precio}</p>   
                    <button class="btn btn-success" id="botonSumarUnidad${productoCarrito.id}"><i class=""></i>+1</button>
                    <button class="btn btn-danger" id="botonEliminarUnidad${productoCarrito.id}"><i class=""></i>-1</button> 
                    <button class="btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
        `;
    });

    array.forEach((productoCarrito) => {
        document.getElementById(`botonSumarUnidad${productoCarrito.id}`).addEventListener("click", () => {
            productoCarrito.sumarUnidad();
            localStorage.setItem("carrito", JSON.stringify(array));
            cargarProductosCarrito(array);
        });

        document.getElementById(`botonEliminarUnidad${productoCarrito.id}`).addEventListener("click", () => {
            let cantProd = productoCarrito.restarUnidad();
            if (cantProd < 1) {
                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`);
                cardProducto.remove();
                let productoEliminar = array.find((album) => album.id === productoCarrito.id);
                let posicion = array.indexOf(productoEliminar);
                array.splice(posicion, 1);
                localStorage.setItem("carrito", JSON.stringify(array));
                calcularTotal(array);
            } else {
                localStorage.setItem("carrito", JSON.stringify(array));
            }
            cargarProductosCarrito(array);
        });

        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`);
            cardProducto.remove();
            let productoEliminar = array.find((album) => album.id === productoCarrito.id);
            let posicion = array.indexOf(productoEliminar);
            array.splice(posicion, 1);
            localStorage.setItem("carrito", JSON.stringify(array));
            calcularTotal(array);
        });
    });

    calcularTotal(array);
}

function calcularTotal(array) {
    let total = array.reduce((acc, productoCarrito) => acc + (productoCarrito.precio * productoCarrito.cantidad), 0);
    total === 0 ? (precioTotal.innerHTML = "No hay productos en el carrito") : (precioTotal.innerHTML = `El total es <strong>${total}</strong>`);
}

veralbum.addEventListener("click", () => {
    mostrarCatalogo(discos);
});

function mostrarCatalogo(array) {
    discosDiv.innerHTML = "";
    array.forEach((album) => {
        let nuevoAlbumDiv = document.createElement("div");
        nuevoAlbumDiv.className = "col-12 col-md-6 col-lg-4 my-2";
        nuevoAlbumDiv.innerHTML = `
            <div id="${album.id}" class="card" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;" src="assets/${album.imagen}" alt="${album.titulo} de ${album.autor}">
                <div class="card-body">
                    <h4 class="card-title">${album.titulo}</h4>
                    <p>Autor: ${album.autor}</p>
                    <p class="${album.precio <= 2000 ? "ofertaLibro" : ""}">Precio: ${album.precio}</p>
                    <button id="agregarBtn${album.id}" class="btn btn-outline-success">Agregar al carrito</button>
                </div>
            </div>
        `;
        discosDiv.appendChild(nuevoAlbumDiv);

        let agregarBtn = document.getElementById(`agregarBtn${album.id}`);

        agregarBtn.addEventListener("click", () => {
            agregarAlCarrito(album);
        });
    });
}

veralbum.addEventListener("click", () => {
    mostrarCatalogo(discos);
});

ocultaralbum.addEventListener("dblclick", () => {
    discosDiv.innerHTML = "";
});

selectOrden.addEventListener("change", () => {
    switch(selectOrden.value){
        case "1":
            discos.sort((a, b) => b.precio - a.precio);
            mostrarCatalogo(discos);
            break;
        case "2":
            discos.sort((a, b) => a.precio - b.precio);
            mostrarCatalogo(discos);
            break;
        case "3":
            discos.sort((a, b) => a.titulo.localeCompare(b.titulo));
            mostrarCatalogo(discos);
            break;
        default:
            mostrarCatalogo(discos);
            break;
    }
});

buscador.addEventListener("input", () => {
    let busqueda = buscador.value.toLowerCase();
    let resultado = discos.filter((album) => album.autor.toLowerCase().includes(busqueda) || album.titulo.toLowerCase().includes(busqueda));
    coincidencia.innerHTML = resultado.length === 0 ? `<h3>No hay coincidencias con la búsqueda ${busqueda}</h3>` : "";
    mostrarCatalogo(resultado);
});

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito);
});