// Lista de productos a ser filtrada
const products = [
    { title: "iPad Pro 12.9", images: ["https://i.postimg.cc/kX8PKZpq/ipad.jpg"], description: "Silver", price: "900000", discount: "50% Off" },
    { title: "iPad Pro 12.9", images: ["https://i.postimg.cc/kX8PKZpq/ipad.jpg"], description: "Silver", price: "900000", discount: "50% Off" },
    { title: "iPad Pro 12.9", images: ["https://i.postimg.cc/kX8PKZpq/ipad.jpg"], description: "Silver", price: "900000", discount: "50% Off" },
    // Otros productos...
];

// Definición de la función captureText
function captureText(event) {
    // Obtener el valor del input
    const searchText = event.target.value.toLowerCase(); // Texto a minúsculas para filtrado insensible a mayúsculas/minúsculas

    console.log("Texto capturado:", searchText); // Para depuración

    // Filtrar productos por nombre
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText) || 
        product.description.toLowerCase().includes(searchText)
    );

    // Imprimir tarjetas para productos filtrados
    printCards(filteredProducts, "products");
}

// Asignar el evento keyup al input de búsqueda
const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", event => captureText(event));

// Función para imprimir tarjetas de producto
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const product of arrayOfProducts) {
        productsTemplate += createCard(product); // Generar tarjetas para cada producto
    }
    const productsSelector = document.getElementById(idSelector);
    if (productsSelector) {
        productsSelector.innerHTML = productsTemplate; // Actualizar el contenido del DOM
    } else {
        console.error("Products selector not found");
    }
}

// Función para crear una tarjeta de producto
function createCard(product) {
    return `
        <a href="/details.html" class="product-card">
            <img class="product-img" src="${product.images[0]}" alt="${product.title}">
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="product-price">${product.price}</span>
                    <span class="product-discount">${product.discount}</span>
                </div>
            </div>
        </a>
    `;
}
