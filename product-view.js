searchProduct = (result) => {
    console.log("el id de producto es:", result)
    obtenerProductos(result);
}

const getUrl = () => {
    let parameters = new URLSearchParams(window.location.search);
    result = parameters.get("product");
    // result = result.toUpperCase();
    result ? searchProduct(result) : console.log("producto no encontrado")
}

getUrl();