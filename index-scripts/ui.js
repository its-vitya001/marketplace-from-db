import * as api from "./api.js";

const cartButton = document.getElementById("cart-button");
const cartItem = document.getElementById("cart-item");
const cartProducts = document.getElementById("cart-products");
let totalPrice = document.getElementById("total-price");

let cart = [];

// Cart 
function showCart () {
    cartProducts.innerHTML = "";

    if (cart.length == 0) {
        cartProducts.textContent = "Cart is empty"
    }
    
    cart.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
            <img src="${product.img}" width="32px" alt="product image">
            <hr>
            <p>${product.name} | ${product.price}$</p>
        `;
        
        cartProducts.append(productItem)
    });
    totalPrice.textContent = cart.reduce((a, p) => a + p.price, 0);

    cartItem.hidden = !cartItem.hidden;
}

cartButton.addEventListener("click", () => {
    showCart()
});

// Products Render
const main = document.getElementById("main");

export async function renderProducts() {
  const products = await api.getProducts();

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <h3 class="name">${product.name}</h3>
        <img class="image" src="${product.photo_url}">
        <p class="price">
            <span class="sub-item">Price:</span> 
            ${product.price}$
        </p>
        <p class="description">
        <span class="sub-item">Description:</span> 
            ${product.description}
        </p>
    
        <a class="seller-profile-link" href="./user-profile/userProfile.html?id=1">Seller Profile</a>
        <button class="buy-button">Buy</button>
    `;
    main.append(card);

    const buyButton = card.querySelector(".buy-button");
    buyButton.addEventListener("click", () => {
      cart.push({
        name: product.name,
        price: product.price,
        img: product.photo_url,
      });
    });
  });
}