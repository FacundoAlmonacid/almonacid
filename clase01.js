alert("Hola Bienvenidos a reciclar");

let usuariosRegistrados = [];

let preginicio = prompt("¿Deseas reciclar algún producto? responde si/no");

if (preginicio.toLowerCase() != "si") {
  alert("Gracias por tu visita :D");
} else {
  let usuario = {
    nombre: prompt("Ingresa tu usuario"),
    cotizaciones: [],
    total: 0
  };

  let opcion;
  let carrito = []; // Arreglo para almacenar las cotizaciones
  let total = 0; // Variable para almacenar el monto total

  class Metal {
    constructor(nombre, color, tipo, valor) {
      this.nombre = nombre;
      this.color = color;
      this.tipo = tipo;
      this.valor = valor;
    }
  }

  const metales = [
    new Metal("aluminio", "grisaseo", "mineral", 1500),
    new Metal("bronce", "dorado", "artificial", 900),
    new Metal("plomo", "gris", "mineral", 500),
    new Metal("cobre", "rojizo", "mineral", 2500)
  ];

  function cotizarMetal(metal) {
    let acuerdo;
    do {
      acuerdo = prompt(
        `El valor del ${metal.nombre} es de ${metal.valor}$ el kilo. ¿Quieres continuar con tu tasación?`
      );
    } while (
      acuerdo.toLowerCase() != "si" &&
      acuerdo.toLowerCase() != "no"
    );

    if (acuerdo.toLowerCase() == "si") {
      let peso;
      do {
        peso = parseFloat(prompt(`Ingresa la cantidad de kilos de ${metal.nombre}:`));
      } while (isNaN(peso));

      let cotizacion = metal.valor * peso;
      carrito.push({ metal: metal.nombre, cotizacion: cotizacion });
      total += cotizacion;
      usuario.cotizaciones.push({ metal: metal.nombre, cotizacion: cotizacion });
      usuario.total += cotizacion;
      alert(`Tu cotización es de ${cotizacion}$`);
    } else {
      alert("Gracias, vuelva pronto..");
    }
  }

  function eliminarTasacion() {
    if (carrito.length > 0) {
      let tasacionEliminar;
      let tasacionesExistentes = "";

      for (let i = 0; i < carrito.length; i++) {
        let tasacion = carrito[i];
        tasacionesExistentes += `${i + 1}. Metal: ${tasacion.metal}\nCotización: ${tasacion.cotizacion}$\n`;
      }

      do {
        tasacionEliminar = parseInt(prompt(`Seleccione el número de la tasación a eliminar:\n${tasacionesExistentes}`));
      } while (isNaN(tasacionEliminar) || tasacionEliminar < 1 || tasacionEliminar > carrito.length);

      let tasacionEliminada = carrito.splice(tasacionEliminar - 1, 1)[0];
      total -= tasacionEliminada.cotizacion;
      usuario.total -= tasacionEliminada.cotizacion;
      usuario.cotizaciones.splice(tasacionEliminar - 1, 1);
      alert(`Tasación eliminada: Metal: ${tasacionEliminada.metal}\nCotización: ${tasacionEliminada.cotizacion}$`);
    } else {
      alert("El carrito de compras está vacío.");
    }
  }

  function ejecutarFuncionOrdenSuperior(funcion) {
    funcion();
  }

  do {
    opcion = prompt(
      `Hola ${usuario.nombre}, elige una opción:
      1. Aluminio
      2. Cobre
      3. Bronce
      4. Plomo
      5. Eliminar tasación
      6. Finalizar y mostrar carrito`
    );

    switch (opcion) {
      case "1":
        ejecutarFuncionOrdenSuperior(() => cotizarMetal(metales[0]));
        break;

      case "2":
        ejecutarFuncionOrdenSuperior(() => cotizarMetal(metales[3]));
        break;

      case "3":
        ejecutarFuncionOrdenSuperior(() => cotizarMetal(metales[1]));
        break;

      case "4":
        ejecutarFuncionOrdenSuperior(() => cotizarMetal(metales[2]));
        break;

      case "5":
        ejecutarFuncionOrdenSuperior(eliminarTasacion);
        break;

      case "6":
        opcion = "finalizar";
        break;

      default:
        alert("Opción inválida. Por favor, elige una opción válida.");
    }
  } while (opcion != "finalizar");

  alert("Estamos preparando tu pedido ..");

  if (carrito.length > 0) {
    for (let i = 0; i < carrito.length; i++) {
      let item = carrito[i];
      alert(`Metal: ${item.metal}\nCotización: ${item.cotizacion}$`);
    }
    alert(`Monto total: ${total}$`);
  } else {
    alert("El carrito de compras está vacío.");
  }

  usuariosRegistrados.push(usuario);

  console.log("Usuarios registrados:");
  usuariosRegistrados.forEach((usuario) => {
    console.log(`Nombre: ${usuario.nombre}`);
    usuario.cotizaciones.forEach((cotizacion) => {
      console.log(`Metal: ${cotizacion.metal}\nCotización: ${cotizacion.cotizacion}$`);
    });
    console.log(`Total: ${usuario.total}$\n`);
  });
}
