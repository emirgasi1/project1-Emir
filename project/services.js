
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('togglebutton');
    const body = document.body;

    toggle.onclick = function() {
        body.classList.toggle('dark-theme'); // ugasena svjetla
    }
});

$(document).ready(function() {
    $('#togglebutton').click(function() {
        $(this).toggleClass('active');
    });
});



// Initialize spapp
var app = $.spapp({
    defaultView: "#productList"
});

// Define the routes
app.route({
    view: '#productList',
    load: 'products.html'
}).route({
    view: '#details',
    load: 'details.html'
}).route({
    view: '#editFormContainer',
    load: 'edit.html'
});

// Run app
app.run();

// Functions for button actions
function loadDetails(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(p => p.id === productId);
            if (product) {
                const details = document.getElementById('details');
                details.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
                app.navigate({ view: '#details', url: 'details.html', id: productId });
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

function showEditForm(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(p => p.id === productId);
            if (product) {
                const editFormContainer = document.getElementById('editFormContainer');
                editFormContainer.innerHTML = `
                    <form id="editForm">
                        <h2>Edit ${product.name}</h2>
                        <label for="productName" class="name1">Name:</label>
                        <input type="text" id="productName" class="text1" name="productName" value="${product.name}">
                        <label for="productDescription">Description:</label>
                        <textarea id="productDescription" class="area1" name="productDescription">${product.description}</textarea>
                        <button type="button" class="save1" onclick="saveProduct(${productId})">Save</button>
                    </form>
                `;
                app.navigate({ view: '#editFormContainer', url: 'edit.html', id: productId });
            }
        });
}

function saveProduct(productId) {
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;

    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(p => p.id === productId);
            if (product) {
                product.name = name;
                product.description = description;

                // Update the details section if it's showing the edited product
                const details = document.getElementById('details');
                if (details.innerHTML.includes(product.name)) {
                    details.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
                }

                showMessage(`Product ${productId} edited successfully!`);
                document.getElementById('editFormContainer').innerHTML = '';
            }
        });
}

function deleteProduct(productId) {
    const details = document.getElementById('details');
    if (details.innerHTML.includes(`Product ${productId}`)) {
        details.innerHTML = '';
    }

    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
        productElement.remove();
    }

    showMessage(`Product ${productId} deleted successfully!`);
}
