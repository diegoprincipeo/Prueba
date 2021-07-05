 //Funciones//
 
 const total = () => {
     //alert(("El monto a pagar por tus productos es: S/. ") + ((producto1 + producto2)*1.18));
 }
 var producto1=parseInt(prompt("Ingresa el valor del primer producto"));
 var producto2=parseInt(prompt("Ingreas el valor del segundo producto"));
 total()
 alert("Felicidades!!! eres nuestro cliente numero 1,000,000 ganaste un descuento del 10% en tu compra")
 var descuento = ((producto1+producto2)*1.18*0.9)
 alert (("Por lo cual tus productos solo te costaran: S/. ") + descuento)
 alert("Y el envio te saldra S/ 5.00")
 var delivery = (((producto1+producto2)*1.18*0.9)+ 5)
 alert (("Por loque el total de tu compra es: S/. ") + delivery)

//Objeto//

class Pedido{
    constructor(nombre, direccion, telefono,hora){
    this.nombre=nombre;
    this.direccion=direccion;
    this.telefono=telefono;
    this.hora=hora;
}
datosEntrega() {
    console.log("usuario: " + this.nombre);
    console.log("direccion de entrega: " + this.direccion);
    console.log("contacto: " + this.telefono);
    console.log("horario: " + this.hora);
}
}
 let nombreUsuario = prompt("Ingrese su nombre y apellido: ");
 let direccionUsuario = prompt("Ingrese la dirección de envio: ");
 let telefonoUsuario = prompt("Ingrese un número de contacto: ");
 let horaUsuario = prompt("Desea que su pedido sea entregado en: Mañana/Tarde/Noche?");
 let pedido1 = new Pedido(nombreUsuario, direccionUsuario, telefonoUsuario, horaUsuario); 
 pedido1.datosEntrega()
 
 alert(("Hola ")+nombreUsuario+(" tu pedido sera enviado a ")+direccionUsuario+(", te llamaremos al ")+telefonoUsuario+(" cuando tu pedido este cerca, recuerda que tu pedido llegara en la ")+horaUsuario)

 //Array//

 class Producto {
     constructor (nombreProducto, precioProducto){
         this.nombreProducto = nombreProducto.toUpperCase();
         this.precioProducto = parseFloat(precioProducto*1.18);
         this.vendido = false;
     }
 }
const Productos = [];
Productos.push(new Producto("Aceite Primor", "6.50"));
Productos.push(new Producto("Arroz Costeño", "3.50"));
Productos.push(new Producto("Leche Gloria", "3.20"));
Productos.push(new Producto("Aceite Sao", "5.50"));
for (const Producto of Productos){
    console.log(Producto.nombreProducto);
    console.log(Producto.precioProducto);
}
//Ordenar//
const ProductoOrden = [
    {nombreProductoOrden: 'Aceite Primor'},
    {nombreProductoOrden: 'Arroz Costeño'},
    {nombreProductoOrden: 'Leche Gloria'},
    {nombreProductoOrden: 'Aceite Sao'},
];
ProductoOrden.sort((a,b) => {
    const nombreProductoOrdenA=a.nombreProductoOrden.toLowerCase();
    const nombreProductoOrdenB=b.nombreProductoOrden.toLowerCase();
    if (nombreProductoOrdenA<nombreProductoOrdenB){
        return -1;
    }
    if (nombreProductoOrdenA>nombreProductoOrdenB){
        return 1;
    }
        return 0;
});
console.log(ProductoOrden)

//Local Storage

let usuario

const usuarioLS = localStorage.getItem('usuario')
if (usuarioLS === null) {
    usuario = prompt('Hola, por favor ingrese su nombre')
    localStorage.setItem('usuario', usuario)
} else {
    usuario = usuarioLS
}
alert('Bienvenido '+usuario)