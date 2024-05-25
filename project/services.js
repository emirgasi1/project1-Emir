function loadDetails(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(p => p.id === productId);
            if (product) {
                const details = document.getElementById('details');
                details.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
            }
        });
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

function editProduct(productId) {
    // Simulate editing functionality
    showMessage(`Product ${productId} edited successfully!`);
}

function deleteProduct(productId) {
    // Simulate delete functionality
    showMessage(`Product ${productId} deleted successfully!`);
}