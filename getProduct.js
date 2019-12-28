var productId = null;
if (ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.product) {
    productId = ShopifyAnalytics.meta.product.id;
    var el = document.createElement('script');
    el.setAttribute('src', 'https://v2.rest-ar.com/restar-injector.js')
    el.onload = ()=> {
        console.log(productId);
        console.log(Shopify.shop)
        window.RestARInjector.init({
            
        })
    }
    document.head.appendChild(el);
}