/* 
let edad = parseInt( prompt ("ingrese cuantos años tiene"))

if(edad >= 18 ){console.log("usted puede continuar")}
else console.log("usted no puede continuar")


 */
/* let colorfav = prompt("ingrese el color")
let espacio = " "


if (colorfav == "rojo") { alert(colorfav + espacio + "es un color primario")
 let respuestarojo=prompt("hola soy el color rojo sabes si mesclas con amarillo")
if (respuestarojo=="naranja"){prompt("muy bien hecho!")} 
else (alert("casi"))
}




else if (colorfav == "amarillo") { alert(colorfav + espacio + "es un color primario") }
else if (colorfav == "azul") { alert(colorfav + espacio + "es un color primario") }
else (alert(colorfav + espacio + "es un color secundario"))

 */
/* 

let cantnotas = prompt("ingrese el numero de notas")

for (let i=1;i<=cantnotas;i++){let nota = prompt("ingrese las notas"+i)} */


/* 
alert ("Bienvenidos a  metalciclables ")
let pregunta1 =prompt("¿Deseas tasar tus metales reciclables?")
if (pregunta1=="si"){let nombre =prompt("Ingrese Nombre")
alert("Hola "+nombre+" en nuestra planta podrás reciclar metales como plomo,aluminio,cobre y bronce")
let respmetal=prompt("¿Que metal necesitas cotizar?")

if (respmetal=="plomo") {alert("plomo")}
else if (respmetal=="aluminio") {alert("alu")}
else if(respmetal=="cobre"){alert("hola")}
else if (respmetal=="bronce"){alert("hola bronce")}


else alert("Por el momento no podemos cotizar este producto")

} 

 








else alert("Muchas gracias!")

 */




/* alert("Bienvenidos a metalciclables");

let pregunta1;
let nombre;

do {
  pregunta1 = prompt("¿Deseas tasar tus metales reciclables?");

  if (pregunta1.toLowerCase() === "si") {
    if (!nombre) {
      nombre = prompt("Ingrese Nombre");
    }
    alert("Hola " + nombre + ", en nuestra planta podrás reciclar metales como plomo, aluminio, cobre y bronce");

    let respmetal;

    do {
      respmetal = prompt("¿Qué metal necesitas cotizar?");

      if (respmetal.toLowerCase() === "plomo") {
        let valorPorKilo = 10; // Valor ficticio para el plomo, puedes cambiarlo según tus necesidades
        alert("Cotización para plomo: $" + valorPorKilo.toFixed(2));
        break;
      } else if (respmetal.toLowerCase() === "aluminio") {
        let valorPorKilo = 5; // Valor ficticio para el aluminio, puedes cambiarlo según tus necesidades
        alert("Cotización para aluminio: $" + valorPorKilo.toFixed(2));
        break;
      } else if (respmetal.toLowerCase() === "cobre") {
        let valorPorKilo = 8; // Valor ficticio para el cobre, puedes cambiarlo según tus necesidades
        alert("Cotización para cobre: $" + valorPorKilo.toFixed(2));
        break;
      } else if (respmetal.toLowerCase() === "bronce") {
        let valorPorKilo = 7; // Valor ficticio para el bronce, puedes cambiarlo según tus necesidades
        alert("Cotización para bronce: $" + valorPorKilo.toFixed(2));
        break;
      } else {
        alert("Por el momento no podemos cotizar este producto");
      }
    } while (true);
  } else if (pregunta1.toLowerCase() === "no") {
    alert("Muchas gracias!");
    break;
  } else {
    alert("Respuesta incorrecta. Por favor, responda con 'si' o 'no'.");
  }
} while (true); */


alert("Hola Bienvenidos a reciclar")
let preginicio = prompt("¿Deseas reciclar algún producto? responde si/no")
if (preginicio.toLowerCase() == "si") {
    let nombre = prompt("Ingresa tu usuario")
    let opcion;


 /*    do {
        opcion = prompt(`Hola ${nombre} elige una opción:
        1. Aluminio
        2. Cobre
        3. Bronce
        4. Plomo`);

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
                    alert(nombre + " su cotización es de " + cotizacionPlomo + "$")
                } else {
                    alert("Gracias, vuelva pronto..")
                }
                break;
            default:
                alert("Opción inválida. Por favor, elige una opción válida.");
        }
    } while (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4");

    alert("Fin del programa");

 */
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

