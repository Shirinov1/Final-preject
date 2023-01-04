const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
const paybar = document.querySelector(".paybar");

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");
const check = document.querySelector("#check");
const submit = document.querySelector("#submit");
const contact = document.querySelector("#contact");
const span = document.querySelector("#span");


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const pbtn1 = document.querySelector("#pbtn1");
const pbtn2 = document.querySelector("#pbtn2");
const pbtn3 = document.querySelector("#pbtn3");




btn1.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/menu-1.png" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = '6 mini pizza';
  const d = document.createElement('div');
  d.innerText = '$19.99';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });

});


btn2.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/menu-2.png" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = '5 Mini Burgers';
  const d = document.createElement('div');
  d.innerText = '$99.99';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });
  
});


btn3.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/menu-3.png" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = '2 Mixed Pizzas';
  const d = document.createElement('div');
  d.innerText = '$49.99';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });
  
});


btn4.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/menu-4.png" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = '3 Meatball Burgers';
  const d = document.createElement('div');
  d.innerText = '$79.99 ';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });
  
});


pbtn1.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/product-1.png" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = 'Bacon Burger';
  const d = document.createElement('div');
  d.innerText = '$6.00';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });
  
});


pbtn2.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/product-2.png" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = 'Dark+Cheese Burger';
  const d = document.createElement('div');
  d.innerText = '$12.00';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });
  
});


pbtn3.addEventListener('click', () =>{

  span.innerText = '';
  
  const a = document.createElement('div');
  a.classList.add('cart-item');
  const e = document.createElement('button');
  e.innerHTML = '<i class="fas fa-times"></i>';
  a.innerHTML = '<img src="images/dark-product.jpg" alt="menu">';
  const b = document.createElement('div');
  b.classList.add('content');
  a.appendChild(e);
  a.appendChild(b);
  const c = document.createElement('h3');
  c.innerText = 'Dark+Cheese+Double Burger';
  const d = document.createElement('div');
  d.innerText = '$24.00';
  d.classList.add('price');
  b.appendChild(c);
  b.appendChild(d);
  cartItem.appendChild(a);

  e.addEventListener('click', () =>{
    a.remove();
  });
  
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
      ) {
        searchForm.classList.remove("active");
      }
    });
});
  
cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
      ) {
        cartItem.classList.remove("active");
      }
    });
});

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
      if (
        !e.composedPath().includes(menuBtn) &&
        !e.composedPath().includes(navbar)
        ) {
          navbar.classList.remove("active");
        }
      });
});

check.addEventListener("click", () => {
      paybar.classList.toggle("active");
      document.addEventListener("click", function (e) {
        if (
          !e.composedPath().includes(check) &&
          !e.composedPath().includes(paybar)
          ) {
            paybar.classList.remove("active");
          }
        });
});


submit.addEventListener('click', () => {
      
        submit.value = 'paying...';
      
});


contact.addEventListener('click', () => {
      
        contact.value = 'sended';
      
});