let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").textContent = cart.length;

    alert(name + " has been added to your bag! 🖤");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your bag is empty. Discover your dark beauty! 🥀");
        return;
    }

    let message = "YOUR DARK BEAUTY BAG\n\n";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        message += (i + 1) + ". " + cart[i].name
            + " - ₹" + cart[i].price + "\n";

        total += cart[i].price;
    }

    message += "\nTotal: ₹" + total;
    message += "\n\nThank you for shopping with us! 🖤";

    alert(message);
}

