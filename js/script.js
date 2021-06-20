 const Total = () => {
     alert(("El monto a pagar por tus productos es: S/. ") + ((producto1 + producto2)*1.18));
 }
 var producto1=parseInt(prompt("Ingresa el valor del primer producto"));
 var producto2=parseInt(prompt("Ingreas el valor del segundo producto"));
 Total()
 alert("Felicidades!!! eres nuestro cliente numero 1,000,000 ganaste un descuento del 10% en tu compra")
 var Descuento = ((producto1+producto2)*1.18*0.9)
 alert (("Por lo cual tus productos solo te costaran: S/. ") + Descuento)
 alert("Y el envio te saldra S/ 5.00")
 var Delivery = (((producto1+producto2)*1.18*0.9)+ 5)
 alert (("Por lo que el total de tu compra es: S/. ") + Delivery)