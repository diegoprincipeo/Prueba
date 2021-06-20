for (let i=0; i<1; i++) {
    let producto = parseInt(prompt("Ingrese el producto que desea comprar"));
    switch (producto) {
        case 1:
            console.log("Aceite Primor");
            break;
        case 2:
            console.log("Arroz Costeño");
            break;
        case 3:
            console.log("Leche Gloria");
            break;
        case 4:
            console.log("Aceite Sao");
            break;
        default:
            console.log("El Codigo no existe, favor de ingresar un numero del 1 al 4");
            break;
    }
}