const search = () => {

    const searchBox = document.getElementById('search').value.toUpperCase();
    
    const storeItems = document.getElementById('product-list');

    const product = document.querySelectorAll('.product-box');

    const productName = storeItems.querySelectorAll('.product-title');

    for (var i = 0; i < productName.length; i++){

        let match = product[i].querySelectorAll('.product-title')[0];

        if(match){

            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchBox) > -1){

                product[i].style.display = '';

            }else{

                product[i].style.display = 'none';

            }

        }

    }

}