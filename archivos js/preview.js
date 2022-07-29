const previewContainer = document.querySelector('.products-preview');

const previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.shop-content .product-box').forEach(product =>{

    product.onclick = () => {

        previewContainer.style.display = 'flex';

        const name = product.getAttribute('data-name');

        previewBox.forEach(preview => {

            const target = preview.getAttribute('data-target');

            if(name == target){

                preview.classList.add('active');

            }

        });

    }

})

previewBox.forEach(close => {

    close.querySelector('.fa-times').onclick = () => {

        close.classList.remove('active');

        previewContainer.style.display = 'none';

    }

});