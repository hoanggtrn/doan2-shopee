// btn selection
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-contain-classify-btn');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}

// title
const nameElements = document.querySelectorAll('.product-info-name');
const dynamicTitle = nameElements[0].textContent;
const cleanedTitle = dynamicTitle.replace('name', '');
document.title = cleanedTitle;

// preview image
function displayLargeImage(smallImage) {
    const largeImage = document.querySelector('.product-image-preview-top-img');
    largeImage.src = smallImage.src.replace('_tn', ''); // Thay đổi đường dẫn ảnh lớn bằng cách loại bỏ "_tn" từ đường dẫn ảnh nhỏ
    largeImage.alt = smallImage.alt;
}


// sort options
let selectedSortBtn = document.querySelector('.sort-btn');

function selectSortOption(button) {
    selectedSortBtn.classList.remove('sort-btn');
    button.classList.add('sort-btn');
    selectedSortBtn = button;
}

// số lượng sp
function changeQuantity(change) {
    let quantityInput = document.getElementById('quantityInput');
    let quantity = parseInt(quantityInput.value);
    quantity += change;
    if (quantity < 1) {
        quantity = 1;
    }
    quantityInput.value = quantity;
}

// btn selector
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-feedback-rating-overview-filter-item');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}

// search
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        // Nếu phím người dùng nhấn là "Enter" (mã ASCII là 13), thực hiện tìm kiếm sản phẩm
        searchProduct();
    }
}

function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function handleSearchInput() {
    let input = document.getElementById('searchInput');
    input.value = removeDiacritics(input.value); // Remove diacritics from the input text
    searchProduct();
    let noResultsMessage = document.querySelector('.no-results-message');
}

function searchProduct() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let productItems = document.querySelectorAll('.grid__column-2-4');
    let noResultsMessage = document.querySelector('.no-results-message');

    for (let i = 0; i < productItems.length; i++) {
        let productName = productItems[i].querySelector('.home-product-item-name').innerText;
        productName = removeDiacritics(productName); // Remove diacritics from the product name
        if (productName.toUpperCase().indexOf(filter) > -1) {
            productItems[i].style.display = ''; // Show products that match the search
            noResultsMessage.style.display = 'none'; // Ẩn thông báo "Không tìm thấy sản phẩm"
        } else {
            productItems[i].style.display = 'none'; // Hide products that don't match the search
            noResultsMessage.style.display = ''; // Hiển thị thông báo "Không tìm thấy sản phẩm"
        }
    }
}

// price sort

  document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("home-product");
    const products = Array.from(productsContainer.getElementsByClassName("grid__column-2-4"));

    function sortProductsByPrice(order) {
      products.sort(function (a, b) {
        const priceA = parseFloat(a.querySelector(".home-product-item-price-current").innerText.replace(/\D/g, ''));
        const priceB = parseFloat(b.querySelector(".home-product-item-price-current").innerText.replace(/\D/g, ''));

        return order === "desc" ? priceB - priceA : priceA - priceB;
      });

      products.forEach(function (product) {
        productsContainer.appendChild(product);
      });
    }

    document.querySelectorAll(".sort-option-link").forEach(function (sortLink) {
      sortLink.addEventListener("click", function (event) {
        event.preventDefault();
        const order = sortLink.getAttribute("data-sort");
        sortProductsByPrice(order);
      });
    });
  });

// thêm vào giỏ
document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".product-contain-puttocart");
    addToCartBtn.addEventListener("click", addToCart);
    updateEmptyCartMessage();
  });
  
  function addToCart() {
    // Lấy thông tin sản phẩm từ trang hiện tại
    const productImage = document.querySelector(".product-image-preview-top-img").getAttribute("src");
    const productName = document.querySelector(".product-info-name").innerText;
    const productPrice = document.querySelector(".product-price").innerText;
  
    // Hiển thị thông báo thêm vào giỏ hàng thành công
    alert("Đã thêm vào giỏ hàng thành công!");
  
    // Thêm mục sản phẩm vào giỏ hàng
    const cartList = document.querySelector(".header-cart-list-has-cart");
    const cartItem = document.createElement("li");
    cartItem.classList.add("header-cart-list-item");
  
    cartItem.innerHTML = `
      <img class="header-cart-list-item-img" src="${productImage}" alt="">
      <div class="header-cart-list-item-info">
        <span class="header-cart-list-item-name">${productName}</span>
        <span class="header-cart-list-item-price">${productPrice}</span>
      </div>
    `;
  
    cartList.appendChild(cartItem);
    updateEmptyCartMessage();
  }
  
//   function updateEmptyCartMessage() {
//     const emptyCartMessage = document.querySelector(".header-cart-list");
//     const cartList = document.querySelector(".header-cart-list-has-cart");
//     if (cartList.children.length > 0) {
//       emptyCartMessage.style.display = "none";
//     } else {
//       emptyCartMessage.style.display = "block";
//     }
//   }

