 //Funciones//
 
 const total = () => {
     alert(("El monto a pagar por tus productos es: S/. ") + ((producto1 + producto2)*1.18));
 }
 var producto1=parseInt(prompt("Ingresa el valor del primer producto"));
 var producto2=parseInt(prompt("Ingreas el valor del segundo producto"));
 total()
 alert("Felicidades!!! eres nuestro cliente numero 1,000,000 ganaste un descuento del 10% en tu compra")
 var descuento = ((producto1+producto2)*1.18*0.9)
 alert (("Por lo cual tus productos solo te costaran: S/. ") + descuento)
 alert("Y el envio te saldra S/ 5.00")
 var delivery = (((producto1+producto2)*1.18*0.9)+ 5)
 alert (("Por lo que el total de tu compra es: S/. ") + delivery)

//Objeto//

function Pedido(nombre, direccion, telefono,hora){
    this.nombre=nombre;
    this.direccion=direccion;
    this.telefono=telefono;
    this.hora=hora;
}
 let nombreUsuario = prompt("Ingrese su nombre y apellido: ");
 let direccionUsuario = prompt("Ingrese la dirección de envio: ");
 let telefonoUsuario = prompt("Ingrese un número de contacto: ");
 let horaUsuario = prompt("Desea que su pedido sea entregado en: Mañana/Tarde/Noche?");
 const DatosEntrega = new Pedido(nombreUsuario, direccionUsuario, telefonoUsuario, horaUsuario);
 console.log(DatosEntrega);
 alert(("Hola ")+nombreUsuario+(" tu pedido sera enviado a ")+direccionUsuario+(", te llamaremos al ")+telefonoUsuario+(" cuando tu pedido este cerca, recuerda que tu pedido llegara en la ")+horaUsuario)