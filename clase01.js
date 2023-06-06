alert("Hola Bienvenidos a reciclar")
let preginicio = prompt("¿Deseas reciclar algún producto? responde si/no")
if (preginicio.toLowerCase() == "si") {
    let nombre = prompt("Ingresa tu usuario")
    let opcion;
    let carrito = []; // Arreglo para almacenar las cotizaciones
    let total = 0; // Variable para almacenar el monto total
    
    do {
      opcion = prompt(`Hola ${nombre}, elige una opción:
    1. Aluminio
    2. Cobre
    3. Bronce
    4. Plomo
    5. Finalizar y mostrar carrito`);
    
      switch (opcion) {
        case "1":
          const valorAluminio = 1000; // Valor constante para el aluminio
          let acuerdoAl;
          do {
            acuerdoAl = prompt(`El valor del aluminio es de ${valorAluminio}$ el kilo. ¿Quieres continuar con tu tasación?`);
          } while (acuerdoAl.toLowerCase() !== "si" && acuerdoAl.toLowerCase() !== "no");
    
          if (acuerdoAl.toLowerCase() === "si") {
            let pesoAluminio = parseFloat(prompt("Ingresa la cantidad de kilos de Aluminio:"));
            let cotizacionAluminio = valorAluminio * pesoAluminio;
            carrito.push({ metal: "Aluminio", cotizacion: cotizacionAluminio }); // Agregar la cotización al carrito
            total += cotizacionAluminio; // Sumar al total
            alert("Tu cotización es de " + cotizacionAluminio + "$");
          } else {
            alert("Gracias, vuelva pronto..");
          }
          break;
    
        case "2":
          const valorCobre = 2500; // Valor constante para el cobre
          let acuerdoCo;
          do {
            acuerdoCo = prompt(`El valor del cobre es de ${valorCobre}$ el kilo. ¿Quieres continuar con tu tasación?`);
          } while (acuerdoCo.toLowerCase() !== "si" && acuerdoCo.toLowerCase() !== "no");
    
          if (acuerdoCo.toLowerCase() === "si") {
            let pesoCobre = parseFloat(prompt("Ingresa la cantidad de kilos de cobre:"));
            let cotizacionCobre = valorCobre * pesoCobre;
            carrito.push({ metal: "Cobre", cotizacion: cotizacionCobre }); // Agregar la cotización al carrito
            total += cotizacionCobre; // Sumar al total
            alert("Tu cotización es de " + cotizacionCobre + "$");
          } else {
            alert("Gracias, vuelva pronto..");
          }
          break;
    
        case "3":
          const valorBronce = 700; // Valor constante para el bronce
          let acuerdobro;
          do {
            acuerdobro = prompt(`El valor del bronce es de ${valorBronce}$ el kilo. ¿Quieres continuar con tu tasación?`);
          } while (acuerdobro.toLowerCase() !== "si" && acuerdobro.toLowerCase() !== "no");
    
          if (acuerdobro.toLowerCase() === "si") {
            let pesoBronce = parseFloat(prompt("Ingresa la cantidad de kilos de Bronce:"));
            let cotizacionBronce = valorBronce * pesoBronce;
            carrito.push({ metal: "Bronce", cotizacion: cotizacionBronce }); // Agregar la cotización al carrito
            total += cotizacionBronce; // Sumar al total
            alert(nombre + " tu cotizacion es de " + cotizacionBronce + "$");
          } else {
            alert("Gracias, vuelva pronto..");
          }
          break;
    
        case "4":
          const valorPlomo = 500; // Valor constante para el plomo
          let acuerdoPlo;
          do {
            acuerdoPlo = prompt(`El valor del plomo es de ${valorPlomo}$ el kilo. ¿Quieres continuar con tu tasación?`)
          } while (acuerdoPlo.toLowerCase() !== "si" && acuerdoPlo.toLowerCase() !== "no")
    
          if (acuerdoPlo.toLowerCase() === "si") {
            let pesoPlomo = parseFloat(prompt("Ingresa la cantidad de kilos de Plomo:"))
            let cotizacionPlomo = valorPlomo * pesoPlomo
            carrito.push({ metal: "Plomo", cotizacion: cotizacionPlomo }); // Agregar la cotización al carrito
            total += cotizacionPlomo; // Sumar al total
            alert(nombre + " su cotización es de " + cotizacionPlomo + "$")
          } else {
            alert("Gracias, vuelva pronto..")
          }
          break;
    
        case "5":
          opcion = "finalizar";
          break;
    
        default:
          alert("Opción inválida. Por favor, elige una opción válida.");
      }
    } while (opcion !== "finalizar");
    
    alert("Estamos preparando tu pedido ..");
    
    // Mostrar el contenido del carrito de compras
    if (carrito.length > 0) {
    
      for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        alert(`Metal: ${item.metal}\nCotización: ${item.cotizacion}$`);
      }
      alert(`Monto total: ${total}$`); // Mostrar el monto total
    } else {
      alert("El carrito de compras está vacío.");
    }
}
else (alert("Gracias por tu visita :D"))

