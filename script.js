const products = [
    {
        name: "kurtha set",
        description: "Embroided kurtha set",
        price: 3099,
        image: "https://sslimages.shoppersstop.com/sys-master/images/hd0/h4e/30416495181854/AW23KSSE04BF_CHERRY_alt1.jpg_2000Wx3000H",
    },
    {
        name: "Indya",
        description: "Printed Georgette pre-stitched saree",
        price: 3500,
        image: "https://sslimages.shoppersstop.com/sys-master/images/h64/h85/29261130792990/A22INISK00801_BLACK_alt2.jpg_2000Wx3000H",
    },
    {
        name: "Janasya",
        description: "V Neck Top",
        price: 799,
        image: "https://sslimages.shoppersstop.com/sys-master/images/h40/h86/27478384836638/S22JAE3865_WHITE_alt2.jpg_2000Wx3000H",
    },
    {
        name: "kami kubi",
        description: "co-ord set",
        price: 4999,
        image: "https://sslimages.shoppersstop.com/sys-master/images/h5c/h53/31092024672286/S23CODM8100_MAROON.jpg_2000Wx3000H",
    },
    {
        name: "juniper",
        description: "jumpsuit",
        price: 949,
        image: "https://sslimages.shoppersstop.com/sys-master/images/h2b/h6a/29951425085470/3754SKYBLUE_SKY_BLUE.jpg_2000Wx3000H",
    },
];

const cart = [];

function renderProducts() {
    const productContainer = document.querySelector('.product-container');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-product='${JSON.stringify(product)}'>Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const product = JSON.parse(event.target.getAttribute('data-product'));
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <span>${product.name}</span>
            <span>${product.price.toFixed(2)}</span>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

function removeFromCart(event) {
    const index = parseInt(event.target.getAttribute('data-index'));
    cart.splice(index, 1);
    updateCart();
}

renderProducts();
