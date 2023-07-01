/*CODIGO DE PANTALLA LOGIN*/
/*1 . Declaracion de los elementos del HTML*/
const body = document.querySelector('body');
body.style.overflow= 'hidden';
body.style.height = '0px';
body.style.width = '0px';
const loginPage = document.querySelector('.login');	
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

const loginButton = document.querySelector('.login-button');
      loginButton.addEventListener('click', loginIntent)
const signUpButton = document.querySelector('.signup-button');

var errorMessage = document.createElement('p');
errorMessage.setAttribute('class', 'error');
loginPage.appendChild(errorMessage);

/*2. Funciones dentro del HTML*/
function loginIntent(event) {
    event = event.preventDefault();
if (emailField.value === 'ezenh87@gmail.com' && passwordField.value === '12345') {
    loginButton.setAttribute('href', './main.html');
    body.style.overflow = 'auto';
    body.style.height = '100vh';
    body.style.width = '100vw';
    loginPage.remove();
    console.log('Login si va');
    } 
else {
    console.log('Login no va');
    errorMessage.innerHTML = 'Email o contraseña incorrectos';
     }};


/*CODIGO DE PAGINA*/
var orderList = [];
const productList = [];
var totalCompra = 0;

/*Declaracion de iconos para ser escuchados*/
const menuBurgerIcon = document.querySelector('.menu');
const menuUserIcon = document.querySelector('.navbar-email');
const orderIcon = document.querySelector('.navbar-shopping-cart');
const closeProductDetailIcon = document.querySelector('.Product-detail-close--Icon');
const addToOrderButton = document.querySelector('.add-to-order-button');

/*Declaracion de menues que se MUESTRAN - OCULTAN*/
const userMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.mobile-menu');
const orderDetail = document.querySelector('.order-detail');
const orderContainer = document.querySelector('.my-order-content');
const productDetail = document.querySelector('.product-detail');
const orderItemsCount = document.querySelector('.shopItemsCount');

/*Declaracion de relacion gral entre variables y elementos HTML*/
const cardsContainer = document.querySelector('.cards-container');
var target = 0;
var orderAmount = document.querySelector('.total-shop');
var orderTitle = document.querySelector('.order-detail--title');

/*Declaracion de la funcion que escucha los iconos o elementos*/
menuBurgerIcon.addEventListener('click', toggleBurgerMenu);
menuUserIcon.addEventListener('click', toggleUserMenu);
orderIcon.addEventListener('click', toggleOrderDetail);
closeProductDetailIcon.addEventListener('click', closeProductDetail);
addToOrderButton.addEventListener('click', addingToOrder);



/*Vinculacion del contenido de product-detail con JS*/
var productDetailImg = document.querySelector('.product-detail--img');
var productDetailPrice = document.querySelector('.product-detail-info--price');
var productDetailName = document.querySelector('.product-detail-info--name');
var productDetailDescription = document.querySelector('.product-detail-info--description');

/* Lista de elementos que van a componer cada item dentro del carrito*/


function toggleBurgerMenu() {
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
function toggleProductDetail(event) {
    element = event.target.parentNode.id;
    console.log(element);
    productDetailImg.setAttribute('src', productList[element].image);
    productDetailPrice.innerText = '$ ' + productList[element].price;
    productDetailName.innerText = productList[element].name;
    productDetailDescription.innerText = productList[element].description;
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
function calculatingOrderAmount () {

};
function addingToOrder() {
    
    orderList.push(productList[element]);

    const orderProductContainer = document.createElement('div');
    orderProductContainer.classList.add('shopping-cart');
    orderProductContainer.setAttribute('id', productList[element].id);

        const orderProductFigure = document.createElement('figure');

            const orderProductImg = document.createElement('img');
            orderProductImg.setAttribute('src', productList[element].image);
            orderProductImg.setAttribute('class', 'shopping-cart--img')

        const orderProductName = document.createElement('p');
        orderProductName.innerText = productList[element].name;
        const orderProductPrice = document.createElement('p');
        orderProductPrice.innerText = '$' + productList[element].price;

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productImgCart.setAttribute('class', 'add-to-order-icon');

    const removeFromOrderIcon = document.createElement('img');
    removeFromOrderIcon.setAttribute('src', './icons/icon_close.png');
    removeFromOrderIcon.setAttribute('alt', 'close');
    removeFromOrderIcon.setAttribute('class', 'remove-from-order--icon');
    removeFromOrderIcon.addEventListener('click', removingFromOrder);

    orderContainer.appendChild(orderProductContainer);
    orderProductContainer.appendChild(orderProductFigure);
    orderProductContainer.appendChild(orderProductName);
    orderProductContainer.appendChild(orderProductPrice);
    orderProductFigure.appendChild(orderProductImg);
    orderProductContainer.appendChild(removeFromOrderIcon);

    orderItemsCount.innerHTML = orderList.length;
    totalCompra += productList[element].price;
    orderAmount.innerText = '$ ' + totalCompra;
    orderTitle.innerText ='My order: (' + orderList.length + ') products';
};
function addingToOrderIcon(event) {
    element2 = event.target.parentNode.parentElement
    element = element2.parentElement.id;
    console.log(element);

    orderList.push(productList[element]);

    const orderProductContainer = document.createElement('div');
    orderProductContainer.classList.add('shopping-cart');
    orderProductContainer.setAttribute('id', productList[element].id);

        const orderProductFigure = document.createElement('figure');

            const orderProductImg = document.createElement('img');
            orderProductImg.setAttribute('src', productList[element].image);
            orderProductImg.setAttribute('class', 'shopping-cart--img')

        const orderProductName = document.createElement('p');
        orderProductName.innerText = productList[element].name;
        const orderProductPrice = document.createElement('p');
        orderProductPrice.innerText = '$' + productList[element].price;

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productImgCart.setAttribute('class', 'add-to-order-icon');

    const removeFromOrderIcon = document.createElement('img');
    removeFromOrderIcon.setAttribute('src', './icons/icon_close.png');
    removeFromOrderIcon.setAttribute('alt', 'close');
    removeFromOrderIcon.setAttribute('class', 'remove-from-order--icon');
    removeFromOrderIcon.addEventListener('click', removingFromOrder);

    orderContainer.appendChild(orderProductContainer);
    orderProductContainer.appendChild(orderProductFigure);
    orderProductContainer.appendChild(orderProductName);
    orderProductContainer.appendChild(orderProductPrice);
    orderProductFigure.appendChild(orderProductImg);
    orderProductContainer.appendChild(removeFromOrderIcon);

    orderItemsCount.innerHTML = orderList.length;
    totalCompra += productList[element].price;
    orderAmount.innerText = '$ ' + totalCompra;
    orderTitle.innerText ='My order: (' + orderList.length + ') products';
};
function removingFromOrder(event){
    elementToRemove = event.target.parentNode.id;
    event.target.parentNode.remove();

    orderList.splice(orderList.indexOf(elementToRemove), 1);
    console.log('El elemento que se está eliminando es: ' + productList[elementToRemove].name + ' con precio $' + productList[elementToRemove].price);

    totalCompra -= productList[elementToRemove].price;

    orderItemsCount.innerHTML = orderList.length;
    orderAmount.innerText ='$ ' +  totalCompra;
    orderTitle.innerText ='My order: (' + orderList.length + ') products';

    console.log(orderList, orderList.length)
};

/*CONSTRUCTOR para la estructura de cada producto*/
let Product = function(name, price, image, description){
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
    this.id = productList.length;
    productList.push(this);
    };

/*Creacion de cada producto*/
Product.push = new Product(
    'Hola',
    999,
    'https://th.bing.com/th/id/R.47ad7216585cf04a5fde40abe059484e?rik=kXGv6kLYx0K1Cw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-rjMUtjFb6hc%2fVVmdEGmGw0I%2fAAAAAAAAEU4%2fNa9vUw5U_EE%2fs1600%2fhello-saludo.jpg&ehk=ndBazUB6mLwhSxUdr18%2fyDuZdXw7isXqXcAPHAsqa5k%3d&risl=&pid=ImgRaw&r=0',
    'Este es un producto de prueba, creado inicialmente para testear los resultados del código.',
    );
Product.push = new Product(
    'Venzo Carbono Bike',
    320,
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Mountain bike Venzo Skyline Evo R29 18" 21v frenos de disco mecánico cambios Shimano Tourney TY700 y Shimano Tourney TY300 color negro/celeste/rojo. La marca Venzo está comprometida a satisfacer las necesidades de cada uno de sus clientes. Para ciclistas de competición, cicloturistas, amateurs o simplemente para quienes utilizan la bici como medio de transporte o de recreación, Venzo busca cumplir sus sueños y brindarles el mejor producto.'
    );
Product.push = new Product(
    'Apple MacBook Air M2',
    999,
    'https://th.bing.com/th/id/OIP.XGMD3bnsJ_Xu3cSN1V5AQwAAAA?pid=ImgDet&rs=1',
    'La notebook Apple MacBook Air M2 2022 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Pantalla con gran impacto visual: Su pantalla LED de 13.6" y 2560x1664 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance: Su procesador Apple de 8 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.'
    );
Product.push = new Product(
    'Samsung S23 Ultra',
    1199,
    'https://th.bing.com/th/id/OIP.QO4j0JDr3vnPWOTA3I9MegHaEK?pid=ImgDet&rs=1',
    );
Product.push = new Product(
    'Apple iPhone 14 Pro',
    999,
    'https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    );
Product.push = new Product(
    'Apple iPhone 14 Pro max',
    1099,
    'https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    );
Product.push = new Product(
    'Apple MacMini M2',
    699,
    'https://th.bing.com/th/id/R.c9e3ebd80ad3337441b9071bee8d2712?rik=LQDvMn03etj%2fvA&pid=ImgRaw&r=0',
    );
Product.push = new Product(
    'Apple MacBook Air M2 15',
    1199,
    'https://th.bing.com/th/id/OIP.QO4j0JDr3vnPWOTA3I9MegHaEK?pid=ImgDet&rs=1',
    );
Product.push = new Product(
    'Apple Vision Pro',
    3499,
    'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/apple-vision-pro-gaming.jpg',
    );

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
    // const productId = document.createElement('p');
    // productId.innerText = product.id;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productImgCart.setAttribute('class', 'add-to-order--icon');

    productImg.addEventListener('click', toggleProductDetail);
    productImgCart.addEventListener('click', addingToOrderIcon);

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    // productInfoDiv.appendChild(productId);
};
