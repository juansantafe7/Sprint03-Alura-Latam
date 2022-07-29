let wrapper = document.querySelector('.slider-wrapper');

let menuItems = document.querySelectorAll('.menu-item');

let products = [

    {
        id:1,
        title: 'Vinilos Adhesivos',
        price: 600,
        colors: [{

                code: 'yellow',
                img: 'imagenes/vinilo-amarillo.png',


            },
            {

                code: 'blue',
                img: 'imagenes/vinilo-azul.png',


                   },
                   {

                    code: 'black',
                    img: 'imagenes/vinilo-negro.png',
    
    
                       },
                       {

                        code: 'red',
                        img: 'imagenes/vinilo-rojo.png',
        
        
                           },
                           {

                            code: 'green',
                            img: 'imagenes/vinilo-verde.png',
            
            
                               },

                ],
    },            
         {
            id:2,
            title: 'Lona Reforzada',
            price: 2000,
            colors: [{
    
                            code: 'yellow',
                            img: 'imagenes/lona-amarilla.png',
                
                
                        },
                        {
                
                            code: 'blue',
                            img: 'imagenes/lona-azul.png',
                
                
                        },
                        {
                
                            code: 'red',
                            img: 'imagenes/lona-roja.png',
                
                
                        },
                        {
                
                            code: 'black',
                            img: 'imagenes/lona-negra.png',
                
                
                        },
                        {
                
                            code: 'green',
                            img: 'imagenes/lona-verde.png',
                
                
                        },
                     ],

         },
         {
            id:3,
            title: 'Acrílico',
            price: 500,
            colors: [{
    
                            code: 'blue',
                            img: 'imagenes/acrilico-azul2.png',
                
                
                        },
                        {
                
                            code: 'black',
                            img: 'imagenes/acrilico-negro.png',
                
                
                        },
                        {
                
                            code: 'yellow',
                            img: 'imagenes/acrilico-amarillo.png',
                
                
                        },
                        {
                
                            code: 'green',
                            img: 'imagenes/acrilico-verde.png',
                
                
                        },
                        {
                
                            code: 'red',
                            img: 'imagenes/acrilico-rojo.png',
                
                
                        },
                     ],

         },
         {
            id:4,
            title: 'Polyfan',
            price: 1000,
            colors: [{
    
                            code: 'yellow',
                            img: 'imagenes/polyfan-amarillo.png',
                
                
                        },
                        {
                
                            code: 'blue',
                            img: 'imagenes/polyfan-azul.png',
                
                
                        },
                        {
                
                            code: 'black',
                            img: 'imagenes/polyfan-negro.png',
                
                
                        },
                        {
                
                            code: 'green',
                            img: 'imagenes/polyfan-verde.png',
                
                
                        },
                        {
                
                            code: 'red',
                            img: 'imagenes/polyfan-rojo.png',
                
                
                        },
                     ],

         },

];

let choosenProduct = products[0];

let currentProductImg = document.querySelector('.product-img');
let currentProductTitle = document.querySelector('.product-title');
let currentProductPrice = document.querySelector('.product-price');
let currentProductColors = document.querySelectorAll('.color');

menuItems.forEach((item,index) => {

    item.addEventListener('click', () =>{

        wrapper.style.transform =  `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = '$' + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductColors.forEach((color,index) => {

            color.style.backgroundColor = choosenProduct.colors[index].code;

        });

    });

});

currentProductColors.forEach((color,index) =>{
        color.addEventListener('click', ()=>{

            currentProductImg.src = choosenProduct.colors[index].img;

        });
    });

let productButton = document.querySelector('.product-button');
let payment = document.querySelector('.payment');
let close = document.querySelector('.close');


productButton.addEventListener('click', () =>{

    payment.style.display = 'flex';

});

close.addEventListener('click', () =>{

    payment.style.display = 'none';

});