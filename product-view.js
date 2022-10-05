const addProduct = (product) => {
    let addCartBtn = document.querySelector(".product-view__addCart");
    addCartBtn.addEventListener("click", () => {
        cartNumbers(product);
    })
};


// for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener("click", () => {
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }

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
    console.log(productNumbers)
    setItems(product);
}

// const setItems = (product) => {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     console.log(product)

//     if (cartItems != null) {
//         if (cartItems[tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [tag]: product
//             }
//         }
//         cartItems[3] += 1;
//     } else {
//         inCart = 1;
//         cartItems = {
//             [tag]: product
//         }
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }

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
    console.log(cartItems)

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
