// console.log("Hello World!");

// SELECT ELEMENTS//

const $koszulki = document.querySelector(".koszulki");
const $wiatrowki = document.querySelector(".wiatrowki");
const $cartItems = document.querySelector(".cart-items");
const $subtotal = document.querySelector(".cart-total");
const $cartCountInfo = document.querySelector("#cart-count-info");

// RENDER PRODUCTS IN SHOP PAGE
function renderKoszulki() {
  products.forEach((product) => {
    if (product.productKategory === "Koszulka Run Sympatyk Witalny")
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
  <p class="product-price">${product.price}zł</p>
  <div class="kup-teraz" onclick="addToCart(${product.id})">
    <a href="#cart" class="btn btn--full">Kup teraz</a>
  </div>
</div>
</div>`;
  });
}
renderKoszulki();

function renderWiatrowki() {
  products.forEach((product) => {
    if (product.productKategory === "Wiatrówka Sympatyk Witalny")
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
  <p class="product-price">${product.price}zł</p>
  <div class="kup-teraz" onclick="addToCart(${product.id})">
    <a href="#cart" class="btn btn--full">Kup teraz</a>
  </div>
</div>
</div>`;
  });
}
renderWiatrowki();

// ADD PRODUCT TO CART
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {
  // check if prodcut is already in cart
  if (cart.some((item) => item.id === id)) {
    // alert("Product already in cart");
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// UPDATE CART
function updateCart() {
  renderCartItems();
  renderSubtotal();

  //SAVE CART TO LOCAL STORAGE
  localStorage.setItem("CART", JSON.stringify(cart));
}

function priceFormatting(cena) {
  // cena === '73,00'
  return Number(cena.replace(",", "."));
}

//CALCULATE AND RENDER SUBTOTAL IN CART
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += priceFormatting(item.price) * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  let totalcena = `${totalPrice.toFixed(2)}`;
  totalcena = totalcena.replace(".", ",");

  $subtotal.innerHTML = `
  Suma zamówienia (${totalItems} szt.): (${totalcena} zł)`;
  $cartCountInfo.innerHTML = totalItems;
}

// RENDER CART ITEMS
function renderCartItems() {
  $cartItems.innerHTML = ""; //clear cart element
  cart.forEach((item) => {
    $cartItems.innerHTML += `
      <figure class="product-in-cart">
        <img src="${item.imgSrc}" alt="${item.name}">
      </figure>
      <h4>${item.name}</h4>
      <div class="units">
        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
        <div class="number">${item.numberOfUnits}</div>
        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
      </div>
      <div class="unit-price">
        <p class="price">${item.price}zł</p>
      </div>
      <div class="wartosc-div">
        <p class="wartosc">${item.price}zł</p>
      </div>
      <button class="remove-from-cart" onclick="removeItemFromCart(${item.id})">
        <ion-icon class="icon-remove-from-cart" name="close-outline"></ion-icon>
      </button>
    `;
  });
}

//REMOVE ITEM FROM CART
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}
//CHANGE NO OF UNITS FOR AN ITEM IN CART
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let oldNumberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && item.numberOfUnits > 1) {
        oldNumberOfUnits--;
      } else if (action === "plus" && item.numberOfUnits < item.instock) {
        oldNumberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits: oldNumberOfUnits,
    };
  });

  updateCart();
}

//SETING CURRENT YEAR IN FOOTER//
const $year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
$year.textContent = currentYear;
