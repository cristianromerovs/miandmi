const onloadCartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.btn-cart span').textContent = productNumbers;
    } else {
        document.querySelector('.topnav-cart .btn-cart span').style.color = "red";
    }
}

const totalCost = (product) => {
    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

const displayCart = () => {
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost");
    cartItems = JSON.parse(cartItems);

    let myPathname = window.location.pathname;
    let productTable = document.querySelector('#product-table tbody')

    if (cartItems && myPathname == "/cart.html") {
        productTable.innerHTML = ""
        Object.values(cartItems).map(item => {
            productTable.innerHTML += 
            `<tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>${item.inCart}</td>
                <td>$${item.inCart * item.price}</td>
            </tr>`
        });

        productTable.innerHTML += `<div class="d-flex"><p><b>Total Price Cart:</b> $${cartCost}</p></div>`
    }
}

displayCart();
onloadCartNumbers();
