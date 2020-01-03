(function(){
    var gallery1 = {container: '.Product__Gallery', element: '.Product__SlideItem'};
    var gallery2 = {container: '.product-single__photo-wrapper', element: '.product-single__photo', preAdjustments: function() { 
        document.querySelectorAll(this.element)[0].style.height = document.querySelectorAll(gallery2.element)[0].offsetHeight + 'px';
        document.querySelectorAll(this.element)[0].style.width = document.querySelectorAll(gallery2.element)[0].offsetWidth + 'px';                
        document.querySelectorAll(this.element)[0].style.paddingTop = "0px"; 
    }};
    
    function Gallery(container, element, preAdjustments) {
        this.container = container;
        this.element = element;
        this.preAdjustments = preAdjustments ? preAdjustments : function() {};
    }

    function galleryFactory() {
        if (document.querySelectorAll(gallery1.container).length > 0 && document.querySelectorAll(gallery1.element).length > 0) {
            return new Gallery(gallery1.container, gallery1.element);
        }else if (document.querySelectorAll(gallery2.container).length > 0 && document.querySelectorAll(gallery2.element).length > 0) {
            return new Gallery(gallery2.container, gallery2.element, gallery2.preAdjustments);
        }
        return null;
    }    
 
    var productId = null;
    if (ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.product) {
        var gallery = galleryFactory();
        if (gallery !== null) {
            gallery.preAdjustments();
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