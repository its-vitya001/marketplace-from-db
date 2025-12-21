const urlParams = new URLSearchParams(window.location.search);
const SELLER_ID = urlParams.get("id"); // seller id 

const API_URL = "https://my-json-server.typicode.com/its-vitya001/marketplace-from-db/db";
const profileContainer = document.getElementById("profile-container");
const productsContainer = document.getElementById("products-container");

async function getProducts () {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.products;
}
getProducts().then(data => console.log(data))

async function getSeller () {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.users.find(s => s.id === 1);
}
getSeller().then(data => console.log(data))

async function renderSellerProfile () {
    const seller = await getSeller();    
    const products = await getProducts();
    let product = products.find(p => p.author_id === 1);
    console.log(product)

    const cardContainer = document.createElement("div");
    cardContainer.innerHTML = `
        <div class="seller-card">
            <h2>${seller.name} ${seller.sirname}</h2>
            <img src="${seller.photo_url}" alt="seller image">
            <p>Balance: ${seller.balance}</p>
            <p>Id: ${seller.id}</p>
        </div>
    `;

    const productsContainer = document.createElement("div");
    productsContainer.className = "products-container";
    
    const productCard = document.createElement("div");

    productCard.innerHTML = `
        <div class="product-card">
            <h3>${product.name}</h3>
            <img src="${product.photo_url}" alt="product image" width="200px">
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    `;
        productsContainer.append(productCard)

    profileContainer.append(cardContainer, productsContainer)
}
renderSellerProfile()