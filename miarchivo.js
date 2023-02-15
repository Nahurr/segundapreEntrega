
  

   const servicios = [

     {nombre: "Servicio completo en SST", precio: 8500},
     {nombre: "Mediciones ambientales", precio: 6500},
     {nombre: "Implementacion de sistema de gestion", precio: 4700}
   ];

   let carrito = []
   let servicioIngresado = prompt("Hola, desea comprar algun servicio?" + ", porfavor responda si o no")
   while(servicioIngresado  != "no" &&  servicioIngresado!= "si"){
       alert("Por favor ingrese si o no")
       
       servicioIngresado = prompt("Por favor ingrese si o no para proceder")
      
    }
    if(servicioIngresado == "si"){

        alert("A continuacion nuestros servicios disponibles")
        let todoslosProductos = servicios.map((producto) => producto.nombre + " " + " " +  "$" + producto.precio );
        alert(todoslosProductos)
    }else if (servicioIngresado == "no"){

        alert ("Gracias por su visita! Hasta pronto") 
    }
    

while(servicioIngresado != "no"){
let servicio = prompt("Ingrese el servicio que desea agregar")
let precio = 0

if(servicio == "Servicio completo en SST" || servicio == "Mediciones ambientales" || servicio == "Implementacion de sistema de gestion"){
    switch(servicio){
        case "Servicio completo en SST":
            precio = 4200
            break;
        case "Mediciones ambientales":
            precio = 3700
            break;
        case "Implementacion de sistema de gestion":
            precio = 2500
            break;
            default:
            break;
    }
     let meses = parseInt(prompt("Por cuantos meses desea contratar el servicio"))

    carrito.push({servicio, meses, precio})
    console.log(carrito)

}else { 
    alert("No ingreso el nombre del servicio correctamente")
    prompt("Ingrese el nombre del servicio correctamente")
}

servicioIngresado = prompt("Desea agregar otro servicio?")
while(servicioIngresado === "no"){
    alert("Gracias por su compra, hasta pronto")
    carrito.forEach((compraFinal) => {console.log(`servicio: ${compraFinal.servicio} , por ${compraFinal.meses} meses, total a pagar por servicio ${compraFinal.meses * compraFinal.precio}`)})
    break;
   

}
}

const precioTotal = carrito.reduce((acc,el) => acc + el.precio * el.meses, 0)
console.log(`el total a pagar es: ${precioTotal}`)


