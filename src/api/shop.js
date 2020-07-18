/**
 * Mocking data
 */
const _products = [
    {
        id: '1Xsxssss',
        goodImg: 'https://mywjch-1256164332.cos.ap-chengdu.myqcloud.com/color.png',
        title: 'Heart-Pin',
        price: 2,
        canSell: '', // 是否上架,
        inventory: 200,//总共数量
        onCartNum: 0,
    },
    {
        id: '2wewswd',
        goodImg: 'https://mywjch-1256164332.cos.ap-chengdu.myqcloud.com/milk.jpg',
        title: '夏日牛奶',
        price: 1,
        canSell: '', // 是否上架,
        inventory: 200,//总共数量
        onCartNum: 0,
    },
    {
        id: '3we2wawd',
        goodImg: 'https://mywjch-1256164332.cos.ap-chengdu.myqcloud.com/dance.png',
        title: '图片来自',
        price: 3,
        canSell: '', // 是否上架,
        inventory: 200,//总共数量
        onCartNum: 0,
    },
    {
        id: '4sdasdefdw',
        goodImg: 'https://mywjch-1256164332.cos.ap-chengdu.myqcloud.com/orange.png',
        title: '图片来自dribbble,名为Heart-Pin',
        price: 4,
        canSell: '', // 是否上架
        inventory: 200,//总共数量
        onCartNum: 0,
    },
    {
        id: '52edsded',
        goodImg: 'https://mywjch-1256164332.cos.ap-chengdu.myqcloud.com/milk.jpg',
        title: '咖啡',
        price: 5,
        canSell: '', // 是否上架,
        inventory: 200,//总共数量
        onCartNum: 0,
    }
]

export default {
    getProducts(cb) {
        setTimeout(() => {
            this.initProducts();
            cb(_products)
        }, 100)
    },
    initProducts() {
        _products.forEach(
            item => {
                item.onCartNum = 0;
                item.inventory = 200;
            }
        )
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            // (Math.random() > 0.5 || navigator.webdriver)
            //     ? cb()
            //     : errorCb()
            cb()
        }, 100)
    }
}