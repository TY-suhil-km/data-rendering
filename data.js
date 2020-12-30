(function () {
    if (Array.isArray(getProducts())) {
        displayProducts();
    }
    else {
        setProducts([]);
    }
})();


function setProducts(Products) {
    localStorage.setItem('Products', JSON.stringify(Products));
}
function getProducts() {
    return JSON.parse(localStorage.getItem('Products'));
}
function displayProducts() {
    var ProductsData = getProducts();
    var cardbody = "";
    ProductsData.forEach(function (Product, index) {
        cardbody += `
            
                <div class="col-md-4 card  mb-5 mr-5 d-inline-block">
                    <div class="card-body">
                        <div class="divsize"><img class="card-img-top img-fluid" src="${Product.Pimage}" alt="${Product.Pname} image"></div>
                        <h5 class=" h3">${Product.Pname}</h5>
                        <p class="card-text"><span class="h5">Quantity:</span> ${Product.Pquality}</p>
                        <p class="card-text"><span class="h6">Description:</span>: ${Product.Pdescription}</p>
                    </div>
                    <div class="card-footer"><button class="col-md-4 col-sm-6 col-lg-3  btn btn-primary float-right mybtn" onclick="onDelete(${index})">Delete</button>
                    <button class="col-md-4 col-sm-6 col-lg-3  btn btn-primary float-right mybtn mx-5 px-4" onclick="onEdit(${index})">Edit</button>
                    </div>

                </div>
        `;
    });
    document.getElementById('cbody').innerHTML = cardbody;
}
function onSubmit() {
    var form = document.productForm;
    var product = {
        Pname: form.Pname.value,
        Pprice: form.Pprice.value,
        Pquality: form.Pquality.value,
        Pdescription: form.Pdescription.value,
        Pimage: form.Pimage.value
    }
    var ProductsData = getProducts();
    ProductsData.push(product);
    setProducts(ProductsData);
    displayProducts();
}

function onDelete(index) {
    let item = getProducts();
    item.splice(index, 1);
    setProducts(item);
    displayProducts();
}

function onEdit(i){
    let name=prompt("Enter the new name");
    let price=prompt("Enter the new price");
    let quantity=prompt("Enter the new quantity");
    let description=prompt("Enter the new description");
    let image=prompt("Enter the new image");

    let items = getProducts();
    console.log(items[i].Pname);
    items[i].Pname=name;
    items[i].Pprice=price;
    items[i].Pquality=quantity;
    items[i].Pdescription=description;
    items[i].Pimage=image;
    setProducts(items);
    displayProducts();
  
}