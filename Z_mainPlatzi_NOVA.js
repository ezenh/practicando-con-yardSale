const orderList = [];
const productList = [];
const productId = document.querySelector('#id')
/*Declaracion de iconos para ser escuchados*/
const menuBurgerIcon = document.querySelector('.menu');
const menuUserIcon = document.querySelector('.navbar-email');
const orderIcon = document.querySelector('.navbar-shopping-cart');
const closeProductDetailIcon = document.querySelector('.Product-detail-close--Icon');
const addToOrder = document.querySelector('.add-to-cart-button');

/*Declaracion de menues que se abren y cierran*/
const userMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.mobile-menu');
const orderDetail = document.querySelector('.order-detail');
const productDetail = document.querySelector('.product-detail');
const orderItemsCount = document.querySelector('.shopItemsCount');

/*Declaracion de relacion gral entre variables y elementos HTML*/
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContainer = document.querySelector('.my-order-content');	


/*Declaracion de la funcion que escucha los iconos o elementos*/
menuBurgerIcon.addEventListener('click', toggleBurgerMenu);
menuUserIcon.addEventListener('click', toggleUserMenu);
orderIcon.addEventListener('click', toggleOrderDetail);
closeProductDetailIcon.addEventListener('click', closeProductDetail);
addToOrder.addEventListener('click', addingToCart);


function toggleBurgerMenu(event) {
    event.preventDefault();
    if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'flex';
    } else {
        burgerMenu.style.display = 'none';
}};
function toggleUserMenu(event) {
    event.preventDefault();
    if (userMenu.style.display === 'none') {
        userMenu.style.display = 'flex';
    } else {
        userMenu.style.display = 'none';
}};
function toggleOrderDetail(event) {
    event.preventDefault();
    if (orderDetail.style.display === 'none') {
        orderDetail.style.display = 'flex';
        productDetail.style.display = 'none';
    } else {
        orderDetail.style.display = 'none';
}};
function toggleProductDetail() {
    if (productDetail.style.display === 'none') {
        productDetail.style.display = 'flex';
    }
    if (productDetail.style.display === 'flex') {
        orderDetail.style.display = 'none';
    } else {
        productDetail.style.display = 'none';
}};
function closeProductDetail() {
     productDetail.style.display = 'none';
};
function addingToCart() {
    orderList.push(productList[productId]);
    console.log(orderList.length);
    orderItemsCount.innerHTML = orderList.length;
};



console.log(orderList);

/*
var productList = [];

let product = function(name, price, image){
    this.name = name;
    this.price = price;
    this.image = image;
    productList.push(this);
    };



const product1 = new product(
    'Hola',
    999,
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);

const product2

console.log(productList);
*/


productList.push({
    name: 'Venzo Carbono Bike',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    id: 0,
});
productList.push({
    name: 'Apple MacBook Air M2',
    price: 999,
    image: 'https://th.bing.com/th/id/OIP.XGMD3bnsJ_Xu3cSN1V5AQwAAAA?pid=ImgDet&rs=1',
    id: 1,
});
productList.push({
    name: 'Samsung S23 Ultra',
    price: 1199,
    image: 'https://th.bing.com/th/id/OIP.QO4j0JDr3vnPWOTA3I9MegHaEK?pid=ImgDet&rs=1',
    id: 2,
});
productList.push({
    name: 'Apple iPhone 14 Pro',
    price: 999,
    image: 'https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    id: 3,
});
productList.push({
    name: 'Apple iPhone 14 Pro max',
    price: 1099,
    image: 'https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    id: 4,
});
productList.push({
    name: 'Apple MacMini M2',
    price: 699,
    image: 'https://th.bing.com/th/id/R.c9e3ebd80ad3337441b9071bee8d2712?rik=LQDvMn03etj%2fvA&pid=ImgRaw&r=0',
    id: 5,
});
productList.push({
    name: 'Apple MacBook Air M2 15',
    price: 1199,
    image: 'https://th.bing.com/th/id/OIP.QO4j0JDr3vnPWOTA3I9MegHaEK?pid=ImgDet&rs=1',
    id: 6,
});
productList.push({
    name: 'Apple Vision Pro',
    price: 3499,
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/apple-vision-pro-gaming.jpg',
    id: 7,
});


for (product of productList) {
    var productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('id', product.id);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productCard.addEventListener('click', toggleProductDetail);

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoFigure.appendChild(productImgCart);
};

for (product of orderList) {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');
    const productItemFigure = document.createElement('figure');
    const productItemImg = document.createElement('img');

    const productItemName = document.createElement('p');
    productItemName.innerText = product.name;
    const productItemPrice = document.createElement('p');
    productItemPrice.innerText = '$' + product.price;

    const productItemQuit = document.createElement('img');

    shoppingCartContainer.appendChild(shoppingCart);
    shoppingCart.appendChild(productItemFigure);
    productItemFigure.appendChild(productItemImg);
    shoppingCart.appendChild(productItemName);
    shoppingCart.appendChild(productItemPrice);
    shoppingCart.appendChild(productItemQuit);
    // productCard.classList.add('shopping-cart');

    // const productImg = document.createElement('img');
    // productImg.setAttribute('src', product.image);

    // const productInfo = document.createElement('div');
    // productInfo.classList.add('product-info');

    // const productInfoDiv = document.createElement('div');

    // const productPrice = document.createElement('p');
    // productPrice.innerText = '$' + product.price;
    // const productName = document.createElement('p');
    // productName.innerText = product.name;

    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);

    // const productInfoFigure = document.createElement('figure');
    // const productImgCart = document.createElement('img');
    // productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    // productCard.addEventListener('click', toggleAsideProductDetail);

    // cardsContainer.appendChild(productCard);
    // productCard.appendChild(productImg);
    // productCard.appendChild(productInfo);
    // productInfo.appendChild(productInfoDiv);
    // productInfo.appendChild(productInfoFigure);
    // productInfoFigure.appendChild(productImgCart);
};

let indexacion = function () {
    for (let i = 0; i <= productList.length; i++) {
        console.log (i + ' es el producto ' + productList.indexOf(3, 1));
}};
indexacion();
console.log(productList);