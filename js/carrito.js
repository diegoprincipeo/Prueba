//carrito//

let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: "Aceite Primor",
        tag: "AceitePrimor",
        price: 6.50,
        inCart:0
    },
    {
        name: "Aceite Sao",
        tag: "AceiteSao",
        price: 5.50,
        inCart:0
    },
    {
        name: "Leche Gloria",
        tag: "LecheGloria",
        price: 3.20,
        inCart:0
    },
];
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseFloat(productNumbers);
    if( productNumbers ){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent =  productNumbers+1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);

    if(cartItems !=null){
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart +=1;
    } else {
        product.inCart =1;
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}
function totalCost(product){
        let cartCost = localStorage.getItem('totalCost');

    console.log("El costo de mi carrito es ", cartCost);
    console.log(typeof cartCost);

    if(cartCost !=null){
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

//carrito//

//compra//

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector (".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    if ( cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./img/${item.tag}.jpg">
                <span>${item.name}</span>
                <div class="price">${item.price}</div>
                <div class="quantity">
                    <ion-icon class="decrease" name="remove-circle"></ion-icon>
                    <span class="qty"">${item.inCart}</span>
                    <ion-icon class="increase" name="add-circle"></ion-icon>
                </div>
                <div class="total">
                    S/.${item.inCart*item.price}
                </div>
            </div>
            `;
        });
        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
            Total a Pagar
        </h4>
        </h4 class="basketTotal">
            s/.${cartCost}
        </h4>
        </div>
        `;
    }
}

//compra//

//borrar compra//

//borrar compra//

onLoadCartNumbers();
displayCart();