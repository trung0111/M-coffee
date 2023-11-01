let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
searchBtn.onclick = () =>{
  searchBtn.classList.toggle('active')
  cartBtn.classList.remove('active')
  loginBtn.classList.remove('active')
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let cartBtn = document.querySelector('#cart-btn')
let shoppingCart = document.querySelector('.shopping-cart');
cartBtn.onclick = () =>{
  cartBtn.classList.toggle('active')
  searchBtn.classList.remove('active')
  loginBtn.classList.remove('active')
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let loginBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form');
loginBtn.onclick = () =>{
  loginBtn.classList.toggle('active')
  searchBtn.classList.remove('active')
  cartBtn.classList.remove('active')
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

window.onscroll = () =>{
  loginBtn.classList.remove('active')
  searchBtn.classList.remove('active')
  cartBtn.classList.remove('active')
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".head-slider", {
  loop:true,
  spaceBetween: 28,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  
});

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 28,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3.2,
      },
    },
});


let priceItem = document.querySelector('.container-item .info-item p')

let choose_Small_Size_Item = document.querySelector('.container-item .choose-item.size-item .choose-item-box p:first-child')
let choose_Medium_Size_Item = document.querySelector('.container-item .choose-item.size-item .choose-item-box p:nth-child(2)')
let choose_Big_Size_Item = document.querySelector('.container-item .choose-item.size-item .choose-item-box p:last-child')

choose_Small_Size_Item.onclick = () =>{

  priceItem.innerText = '49.000 đ'

  choose_Small_Size_Item.classList.add('active')
  choose_Medium_Size_Item.classList.remove('active')
  choose_Big_Size_Item.classList.remove('active')
}
choose_Medium_Size_Item.onclick = () =>{

  priceItem.innerHTML = '55.000 đ'

  choose_Medium_Size_Item.classList.add('active')
  choose_Small_Size_Item.classList.remove('active')
  choose_Big_Size_Item.classList.remove('active')
}
choose_Big_Size_Item.onclick = () =>{

  priceItem.innerText = '65.000 đ'

  choose_Big_Size_Item.classList.add('active')
  choose_Small_Size_Item.classList.remove('active')
  choose_Medium_Size_Item.classList.remove('active')
}

let toppingItems = document.querySelectorAll('.container-item .choose-item.topping-item .choose-item-box p')

toppingItems.forEach(function(topping) {

  topping.addEventListener('click', function() {
    topping.classList.toggle('active')
  })
})