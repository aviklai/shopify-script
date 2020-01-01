(function(){
    function findGallery() {
        if (document.getElementsByClassName('slider-gallery-slide').length > 0 && document.getElementsByClassName('_1M-R0').length > 0) {
            return {container: '.slider-gallery-slide', element: '._1M-R0'};
        }
        return null;
    }

    setTimeout(function() {
        var productId = null;
        var gallery = findGallery();
        if (gallery !== null) {
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
    }, 1000);    
})();