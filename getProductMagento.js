(function(){
    
    function commonElementAdjustment(element) {
        document.querySelectorAll(element)[0].style.height = document.querySelectorAll(element)[0].offsetHeight + 'px';
        document.querySelectorAll(element)[0].style.width = document.querySelectorAll(element)[0].offsetWidth + 'px';                
        document.querySelectorAll(element)[0].style.paddingTop = "0px"; 
    }

    function getGalleries() {
        return [
            {container: '.Product__Gallery', element: '.Product__SlideItem'},
            {container: '.product-single__photo-wrapper', element: '.product-single__photo', preAdjustments: function() { commonElementAdjustment(this.element) }},
            {container: '.product-single__featured-image-wrapper', element: '.product-single__photos', preAdjustments: function() { commonElementAdjustment(this.element) }},
            {container: '.product__photo', element: '.product__photo--single', preAdjustments: function() { commonElementAdjustment(this.element) }},
            {container: '.photos__item', element: '.product-single__photo', preAdjustments: function() { commonElementAdjustment(this.element) }},
            {container: '.lazyload__image-wrapper', element: '.product__image-wrapper', preAdjustments: function() { commonElementAdjustment(this.element) }},
            {container: '.product-single__photo--flex', element: '.product-single__photo--container', preAdjustments: function() { commonElementAdjustment(this.element) }},
            {container: '.product-single__photos', element: '.product-single__image-wrapper', preAdjustments: function() { commonElementAdjustment(this.element) }}
        ]
    }  

    function Gallery(container, element, preAdjustments) {
        this.container = container;
        this.element = element;
        this.preAdjustments = preAdjustments ? preAdjustments : function() {};
    }       

    function galleryFactory(galleries) {
        for (let index = 0; index < galleries.length; index++) {
           if (document.querySelectorAll(galleries[index].container).length > 0 && document.querySelectorAll(galleries[index].element).length > 0 && document.querySelectorAll(galleries[index].element)[0].nodeName !== 'IMG') {
               return new Gallery(galleries[index].container, galleries[index].element, galleries[index].preAdjustments);
           }            
        }
        return null;        
    }    
 
    var productId = null; //get product from hidden input
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