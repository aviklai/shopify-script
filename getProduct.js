(function(){
    var gallery1 = {container: 'Product__Gallery', element: 'Product__SlideItem'};
    var gallery2 = {container: 'product-single__photo-wrapper', element: 'product-single__photo'};
    
    function findGallery() {
        if (document.getElementsByClassName(gallery1.container).length > 0 && document.getElementsByClassName(gallery1.element).length > 0) {
            return {container: '.' + gallery1.container, element: '.' + gallery1.element};
        }else if (document.getElementsByClassName(gallery2.container).length > 0 && document.getElementsByClassName(gallery2.element).length > 0) {
            return {container: '.' + gallery2.container, element: '.' + gallery2.element};
        }
        return null;
    }

    function preAdjustments(container) {
        switch (container) {
            case '.' + gallery2.container:
                document.getElementsByClassName(gallery2.element)[0].style.height = document.getElementsByClassName(gallery2.element)[0].offsetHeight + 'px';
                document.getElementsByClassName(gallery2.element)[0].style.width = document.getElementsByClassName(gallery2.element)[0].offsetWidth + 'px';                
                document.getElementsByClassName(gallery2.element)[0].style.paddingTop = "0px";                
                break;

            default:
                break;
        }
    }

    function postAdjustments(container) {
        switch (container) {
            case '.' + gallery2.container:
                break;
        
            default:
                break;
        }
    }

    var productId = null;
    if (ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.product) {
        var gallery = this.findGallery();
        if (gallery !== null) {
            preAdjustments(gallery.container);
            productId = ShopifyAnalytics.meta.product.id;
            var el = document.createElement('script');
            el.setAttribute('src', 'https://v2.rest-ar.com/restar-injector.js')
            el.onload = ()=> {
                window.RestARInjector.init({
                    container: gallery.container,
                    element: gallery.element,
                    productId: 4127557779542,
                    models_list: "secretoshape"
                });
                postAdjustments(gallery.container);    
            }
            document.head.appendChild(el);
        }    
    }
})();