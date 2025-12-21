import * as api from "./api.js";

const cartButton = document.getElementById("cart-button");
const cartItem = document.getElementById("cart-item");
const cartProducts = document.getElementById("cart-products");
let totalPrice = document.getElementById("total-price");

console.log(api.cart);

function showCart () {
    cartProducts.innerHTML = "";

    if (api.cart.length == 0) {
        cartProducts.textContent = "Cart is empty"
    }
    
    api.cart.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
            <img src="${product.img}" width="32px" alt="product image">
            <hr>
            <p>${product.name} | ${product.price}$</p>
        `;
        console.log(productItem);
        
        cartProducts.append(productItem)
    });
    totalPrice.textContent = api.cart.reduce((a, p) => a + p.price, 0);

    cartItem.hidden = !cartItem.hidden;
}
cartButton.addEventListener("click", () => {
    showCart()
});