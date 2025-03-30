let cart = [];
let total = 0;

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');

    // Clear the current cart items display
    cartItemsList.innerHTML = '';

    // Populate the cart items
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${item.name} <span class="badge bg-primary rounded-pill">${item.quantity}</span>
                        <button class="btn btn-danger btn-sm ms-2 remove-item" data-index="${index}">Remove</button>`;
        cartItemsList.appendChild(li);
    });

    // Update the total price display
    totalPriceElement.textContent = `Rs${total.toFixed(2)}`;
    cartCountElement.textContent = `(${cart.reduce((acc, item) => acc + item.quantity, 0)})`;
}

// Function to add items to the cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    total += price;
    updateCartDisplay();
}

// Function to remove items from the cart
function removeFromCart(index) {
    const item = cart[index];
    total -= item.price;
    item.quantity--;

    if (item.quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    total = 0;
    updateCartDisplay();
}

// Event listeners for adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        addToCart(name, price);
    });
});

// Event listener for removing items from the cart
document.getElementById('cart-items').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index');
        removeFromCart(index);
    }
});

// Event listener for clearing the cart
document.getElementById('clear-cart-button').addEventListener('click', clearCart);

// Event listener for checkout (you can customize this as needed)
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
});

// Initialize the cart display on page load
updateCartDisplay();