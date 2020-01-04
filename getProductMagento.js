(function(){       
    var storeId = window.checkout.storeId;
    var productId = document.getElementById('product_addtocart_form').querySelectorAll('[name=product]')[0].value;
    var el = document.createElement('script');
    el.setAttribute('src', 'https://v2.rest-ar.com/restar-injector.js')
    el.onload = ()=> {
        window.RestARInjector.init({
            fotorama: true,
            productId: 4127557779542,
            models_list: "secretoshape"
        })
    }
    document.head.appendChild(el);
})();