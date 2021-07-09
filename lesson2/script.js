class GoodItem {
    constructor(title = 'Товар', price = '150', img = 'img/no-image.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <div class="goods-info">
                  <img src="${this.img}" alt="${this.title}">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                </div>
                <button class='addClick'>Добавить</button>
              </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
            title: 'Shirt',
            price: 150,
            img: "images/shirt.jpg"
        },
        {
            title: 'Socks',
            price: 50,
            img: 'images/socks.jpg'
        },
        {
            title: 'Jacket',
            price: 350,
            img: 'images/jacket.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
            img: 'images/shoes.jpg'
        },
        {
            price: 250,
            img: 'images/shoes.jpg'
        },
        {
            title: 'Watch',
            img: 'images/watches.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
        },
        {}
        ]
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price);
            }
        });
        let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
}


class BasketItem {

    constructor(title, price, img, link) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.link = link;
    }
    render() {

    }
}

class Basket {
    constructor() {

        this.addGoods = [];
        this.deletedGoods = [];
    }

    addToBasket() { }
    deleteFromBasket() { }
    calcBasket() { }
    isOrder() { }
    render() { }
    openBasket() { }
}

const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
    list.render();
    list.calcAllGoods();
};