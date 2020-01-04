(function(){
    function findGallery() {
        if (document.getElementsByClassName('woocommerce-product-gallery').length > 0 && document.getElementsByClassName('woocommerce-product-gallery__image').length > 0) {
            return {container: '.woocommerce-product-gallery', element: '.woocommerce-product-gallery__image'};
        }
        return null;
    }

    setTimeout(function() {
        var shopId = null;
        var productId = null;        
        var gallery = findGallery();
        if (gallery !== null) {
            if (document.querySelectorAll('[name="add-to-cart"]').length > 0) {
                shopId = window.location.hostname;
                productId = document.querySelectorAll('[name="add-to-cart"]')[0].value;
                var el = document.createElement('script');
                el.setAttribute('src', 'https://v2.rest-ar.com/restar-injector.js')
                el.onload = ()=> {
                    window.RestARInjector.init({
                        container: gallery.container,
                        element: gallery.element,
                        productId: 4127557779542,
                        models_list: "secretoshape"
                    })
                }
                document.head.appendChild(el);
            }            
        }    
    }, 1000);    
})();