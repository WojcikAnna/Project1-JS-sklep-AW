console.log("Hello World!");

// SELECT ELEMENTS//
const $koszulki = document.querySelector(".koszulki");
const $wiatrowki = document.querySelector(".wiatrowki");
const $cartItems = document.querySelector(".cart-items");

// RENDER PRODUCTS IN SHOP PAGE
function renderKoszulki() {
  koszulki.forEach((product) => {
    $koszulki.innerHTML += `
    <div class="product">
<div class="product-img-box">
  <img
    src="${product.imgSrc}"
    class="product-img"
    alt="${product.name}"
  />
</div>
<div class="product-text-box">
  <div class="product-tags">
    <span class="tag tag--woman ${
      product.productTag === "Damska" ? "tag--woman" : "tag--man"
    }">${product.productTag}</span>
  </div>
  <p class="product-title">${product.name}</p>
  <p class="product-price">${product.price}</p>
  <div class="kup-teraz" onclick="addToCart(${product.id})">
    <a href="#" class="btn btn--full">Kup teraz</a>
  </div>
</div>
</div>`;
  });
}
renderKoszulki();

function renderWiatrowki() {
  wiatrowki.forEach((product) => {
    $wiatrowki.innerHTML += `
    <div class="product">
<div class="product-img-box">
  <img
    src="${product.imgSrc}"
    class="product-img"
    alt="${product.name}"
  />
</div>
<div class="product-text-box">
  <div class="product-tags">
    <span class="tag tag--woman ${
      product.productTag === "Damska" ? "tag--woman" : "tag--man"
    }">${product.productTag}</span>
  </div>
  <p class="product-title">${product.name}</p>
  <p class="product-price">${product.price}</p>
  <div class="kup-teraz" onclick="addToCart(${product.id})">
    <a href="#" class="btn btn--full">Kup teraz</a>
  </div>
</div>
</div>`;
  });
}
renderWiatrowki();

// ADD PRODUCT TO CART
let cart = [];

function addToCart(id) {
  // console.log(id);
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    alert("Product already in cart");
  } else {
    const item = koszulki.find((product) => product.id === id);
    // console.log(item);
    // cart.push(item);
    cart.push({
      ...item,
      numberofUnits: 1,
    });
    // console.log(cart);
  }
  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal();
}

function renderCartItems() {
  // $cartItems.innerHTML = ""; //clear cart element
  cart.forEach((item) => {
    $cartItems.innerHTML += `
    <div class="cart-item">
    <div class="item-info">
        <img src="${item.imgSrc}" alt="${item.name}">
        <h4>${item.name}</h4>
    </div>
    <div class="unit-price">
        <p class="price">${item.price}</p>
    </div>
    <div class="units">
        <div class="btn minus">-</div>
        <div class="number">${item.numberofUnits}</div>
        <div class="btn plus">+</div>           
    </div>
</div>
    `;
  });
}

//SETING CURRENT YEAR IN FOOTER//
const $year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
$year.textContent = currentYear;
