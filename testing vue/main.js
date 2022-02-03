var app= new Vue ({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks.',
        selectedVariant: 0,
        link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
        details: [' 80% cotton', '20% polyester', 'gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage:'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                variantQuantity: 10,
                onSale: true
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0,
                onSale: false
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index){
            this.selectedVariant = index; 
        },
        decreaseCart: function(){
            this.cart -= 1
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        isOnSale() {
             if(this.variants[this.selectedVariant].onSale){
                 return this.brand + ' ' + this.product + '  on sale!'
             }
        }
    }
})