
// MOBILE MENU
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// SHOPPING CART
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();

    alert(name + " added to your cart!");
}

function updateCart() {
    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    document.getElementById("cartCount").innerText =
        "Items: " + cart.length;

    document.getElementById("cartTotal").innerText =
        "Total: ₹" + total;
}

function clearCart() {
    cart = [];
    updateCart();
    alert("Your cart has been cleared!");
}

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("response").innerText =
        "Thank you " + name + "! Your message was submitted successfully.";

    this.reset();
});
