let divProduct = document.querySelector("#product-view");

const getUrlItem = () => {
    let parameters = new URLSearchParams(window.location.search);
    result = parameters.get("product");
    // result = result.toUpperCase();
    // result ? searchProduct(result) : console.log("producto no encontrado")
}

getUrlItem();