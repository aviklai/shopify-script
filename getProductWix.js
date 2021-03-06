(function(){
    function findGallery() {
        if (document.querySelectorAll('[data-hook="slider-gallery-slide"]').length > 0 && document.querySelectorAll('[data-hook="product-thumbnail-wrapper"]').length > 0) {
            return {container: '[data-hook="slider-gallery-slide"]', element: '[data-hook="product-thumbnail-wrapper"]'};
        }
        return null;
    }    
    var shopId = null;
    var productId = null;
    var gallery = findGallery();
    if (gallery !== null) {
        shopId = window.location.hostname;
        productId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);        
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
})();