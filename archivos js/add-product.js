document.getElementById('product-form').addEventListener('submit', function (e){

    const url = document.querySelector('.direction').value;

    const name = document.querySelector('.name').value;

    const description = document.querySelector('.description-text').value;

    const price = document.querySelector('.price').value;

    const product = new Product(url,name,description,price);

    const ui = new UI();

    ui.addProduct(product);

    e.preventDefault();

    console.log(url,name,description,price);

});

class Product{

    constructor(url,name,description,price){

        this.url = url;
        this.name = name;
        this.description = description;
        this.price = price;

    }

}

class UI{

    addProduct(product){

        const productList = document.getElementById('product-list');

        const element = document.createElement('div');

        element.innerHTML = `
        
    <div class="product-box" data-name="p-1">

        <div>
             <img src="${product.url}" class="product-img">
             <h2 class="product-title">${product.name}</h2>
             <p>${product.description}</p>
        </div>
        <span class="price">$${product.price}</span>  
    </div>`;

    productList.appendChild(element);

    }

}

