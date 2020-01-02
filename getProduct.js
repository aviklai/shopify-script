(function(){
    function findGallery() {
        if (document.getElementsByClassName('Product__Gallery').length > 0 && document.getElementsByClassName('Product__SlideItem').length > 0) {
            return {container: '.Product__Gallery', element: '.Product__SlideItem'};
        }else if (document.getElementsByClassName('product-single__photo-wrapper').length > 0 && document.getElementsByClassName('product-single__photo').length > 0) {
            document.getElementsByClassName('product-single__photo')[0].style.paddingTop = "0px !important"; 
            return {container: '.product-single__photo-wrapper', element: '.product-single__photo'};
        }
        return null;
    }

    var productId = null;
    if (ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.product) {
        var gallery = findGallery();
        if (gallery !== null) {
            productId = ShopifyAnalytics.meta.product.id;
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
})();