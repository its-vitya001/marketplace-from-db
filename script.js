const API_URL = "https://my-json-server.typicode.com/its-vitya001/marketplace-from-db/db"

async function getProductsDb () {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.products;
}
getProductsDb().then(data => console.log(data))

const main = document.getElementById("main");

async function renderProductsCard () {
    const products = await getProductsDb();

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3 class="name">${product.name}</h3>
            <img class="image" src="${product.photo_url}">
            <p class="price">
                <span class="sub-item">Price:</span> 
                ${product.price}
            </p>
            <p class="description">
            <spand class="sub-item">Description:</span> 
            ${product.description}
            </p>

            <a class="seller-profile-link" href="#">Seller Profile</a>
            <button class="buy-button">Buy</button>
        `;

        main.append(card)
    });
}
renderProductsCard()