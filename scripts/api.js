const API_URL = "https://my-json-server.typicode.com/its-vitya001/marketplace-from-db/db";

async function getProducts () {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.products;
}
getProducts().then(data => console.log(data))

const main = document.getElementById("main");
export let cart = [];
export async function renderProductsCard () {
    const products = await getProducts();

    for (let i = 0; i < 2; i++) {
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
                    <span class="sub-item">Description:</span> 
                    ${product.description}
                </p>
    
                <a class="seller-profile-link" href="./user-profile/userProfile.html?id=1">Seller Profile</a>
                <button class="buy-button">Buy</button>
            `;
    
            main.append(card);
            
            const buyButton = card.querySelector('.buy-button');
            buyButton.addEventListener('click', function () {
                cart.push({
                    name: product.name,
                    price: product.price,
                    img: product.photo_url
                });
                console.log(cart);
            });

        });
    }
}