let carts = document.querySelectorAll('.add-cart');
let products = [{
        name: 'Diamond Elongated Infinity',
        tag: 'earring',
        price: 5.99,
        inCart: 0
    },
    {
        name: 'Diamond Frame Five Stone',
        tag: 'ring',
        price: 11.99,
        inCart: 0
    },
    {
        name: 'Composite Diamond Cushion',
        tag: 'earring',
        price: 20.99,
        inCart: 0
    },
    {
        name: 'Certified Pear-Shaped Lab-Created',
        tag: 'necklace',
        price: 10.99,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

const onloadCartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.btn-cart span').textContent = productNumbers;
    } else {
        document.querySelector('topnav-cart .btn-cart span').style.color = red;
    }
}

const cartNumbers = (product) => {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.btn-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.btn-cart span').textContent = 1;
    }

    setItems(product);
}

const setItems = (product) => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems, 
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
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
    } else {
        console.log("nay")
    }
}



window.onload = displayCart;
onloadCartNumbers();