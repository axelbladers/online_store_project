document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartLink = document.getElementById("cart-link");
    const cartContainer = document.getElementById("cart-container");
    const cartItemsList = document.getElementById("cart-items-list");
    const cartTotalElement = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const discountButton = document.getElementById("discount-button"); 

    let cartTotal = 0;
    let discountApplied = false; 

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productPriceString = button.previousElementSibling.textContent;
            const productPrice = parseFloat(productPriceString.replace(/[^\d.]/g, ''));

            cartTotal += productPrice;

            cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;

            const cartItem = document.createElement("li");

            cartItem.textContent = `${button.previousElementSibling.previousElementSibling.textContent} - $${productPrice.toFixed(2)}`;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                cartTotal -= productPrice;
                cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
                cartItemsList.removeChild(cartItem);
            });

            cartItem.appendChild(removeButton);

            cartItemsList.appendChild(cartItem);
        });
    });

    discountButton.addEventListener("click", function () {
        if (!discountApplied) {
            const discountPercentage = 25;
            const discountAmount = (cartTotal * discountPercentage) / 100;

            cartTotal -= discountAmount;
            cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;

            console.log(`Discount of ${discountPercentage}% applied. Total after discount: $${cartTotal.toFixed(2)}`);

            discountApplied = true;

            discountButton.disabled = true;
        } else {
            console.log("Discount already applied.");
        }
    });

    cartLink.addEventListener("click", function () {
        cartContainer.style.right = cartContainer.style.right === "0px" ? "-600px" : "0px";
    });

    checkoutButton.addEventListener("click", function () {
        window.location.href = "payment.html";
    });

    const searchInput = document.querySelector('.search-bar input');
    const productItems = document.querySelectorAll('.product-item');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        productItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            const itemVisible = itemName.includes(searchTerm);

            item.style.display = itemVisible ? 'block' : 'none';
        });
    });
});
