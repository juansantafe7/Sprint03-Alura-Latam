let allContainerCart = document.querySelector('.shop-content');

let containerBuyCart = document.querySelector('.card-items')

let buyThings = [];


loadEventListener()

function loadEventListener(){

    allContainerCart.addEventListener('click',addProduct);
    
}

function addProduct(e){

    e.preventDefault();
    
    if (e.target.classList.contains('add-cart')) {
    
    const selectProduct = e.target.parentElement;

    readTheContent(selectProduct);

    }
}

function readTheContent(product){

    const infoProduct = {

        image: product.querySelector('.product-img').src,
        title: product.querySelector('.product-title').textContent,
        price: product.querySelector('.price').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1

    }

    buyThings = [...buyThings, infoProduct];



    loadHtml();


}

function loadHtml(){

    var children = Array.prototype.slice.call(containerBuyCart.childNodes)
    children.forEach(function(child) {
      containerBuyCart.removeChild(child);
    });

    buyThings.forEach(product => {
        
        const {image, title, price, amount, id} = product;

        const row = document.createElement('div');

        row.classList.add('product-box');

        row.innerHTML = `
            
            <img src="${image}" style="width: 5vw">
            <h2>${title}</h2>
            <span>${price}</span>
            <h6>Cantidad:${amount}</h6> 
            <a data-id="${id}" ></a>


        `
        

        containerBuyCart.appendChild(row);

    });

}
