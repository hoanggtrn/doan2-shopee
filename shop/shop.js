


// thêm vào giỏ
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.product-contain-puttocart').addEventListener('click', function() {
      addToCart();
  });

  function addToCart() {
      // Lấy thông tin sản phẩm
      let productName = document.querySelector('.header-cart-list-item-name').innerText;
      let productImageSrc = document.querySelector('.header-cart-list-item-img').getAttribute('src');
      let productPrice = document.querySelector('.header-cart-list-item-price').innerText;

      // Cập nhật thông tin sản phẩm vào giỏ hàng
      let hasCart = document.querySelector('.header-cart-has-cart');
      let cartList = hasCart.querySelector('.header-cart-list-has-cart');

      let cartItem = document.createElement('li');
      cartItem.className = 'header-cart-list-item';

      cartItem.innerHTML = `
          <img class="header-cart-list-item-img" src="${productImageSrc}" alt="">
          <div class="header-cart-list-item-info">
              <span class="header-cart-list-item-name">${productName}</span>
              <span class="header-cart-list-item-price">${productPrice}</span>
          </div>
      `;

      cartList.appendChild(cartItem);

      // Hiển thị giỏ hàng khi đã có sản phẩm
      let emptyCart = document.querySelector('.header-cart-empty');
      emptyCart.style.display = 'none';
      hasCart.style.display = 'block';
  }
});

// // search
function removeDiacritics(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function handleSearchInput() {
  let input = document.getElementById('searchInput');
  input.value = removeDiacritics(input.value); // Remove diacritics from the input text
  searchProduct();
}

function searchProduct() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toUpperCase();
  let productLinks = document.querySelectorAll('.home-product-item-link'); // Select the <a> tags instead of <div>
  let noResultsMessage = document.querySelector('.no-results-message');

  let foundResults = false; // Add a variable to track if any results are found

  for (let i = 0; i < productLinks.length; i++) {
      let productName = productLinks[i].querySelector('.home-product-item-name').innerText;
      productName = removeDiacritics(productName); // Remove diacritics from the product name
      if (productName.toUpperCase().indexOf(filter) > -1) {
          productLinks[i].style.display = ''; // Show products that match the search
          foundResults = true; // Set the flag to true if a result is found
      } else {
          productLinks[i].style.display = 'none'; // Hide products that don't match the search
      }
  }

  // Update the display of the noResultsMessage based on the foundResults flag
  if (foundResults) {
      noResultsMessage.style.display = 'none'; // Hide no results message if results are found
  } else {
      noResultsMessage.style.display = ''; // Show no results message if no results are found
  }
}

function handleSearchInput(event) {
  if (event.key === "Enter") {
      performSearch();
  }
}

function performSearch() {
  let input = document.getElementById('searchInput');
  input.value = removeDiacritics(input.value); // Remove diacritics from the input text
  searchProduct();
}

// history
function handleKeyPress(event) {
  if (event.keyCode === 13) {
      saveSearchKeyword();
  }
}

function saveSearchKeyword() {
  let searchInput = document.getElementById('searchInput');
  let keyword = searchInput.value.trim();

  if (keyword !== '') {
      let historyContainer = document.querySelector('.header-search-history');
      let linkItem = document.createElement('a');
      linkItem.className = 'header-search-history-link';
      linkItem.textContent = keyword;
      linkItem.href = '#';

      linkItem.addEventListener('click', function() {
          searchInput.value = keyword;
      });

      historyContainer.appendChild(linkItem);

      searchInput.value = '';
  }
}

function performSearch() {
  saveSearchKeyword(); // Lưu từ khóa tìm kiếm trước khi thực hiện tìm kiếm
  // Thực hiện tìm kiếm hoặc chuyển hướng tới trang kết quả tìm kiếm
}

// danh mục
$(document).ready(function() {
  const allProducts = $(".home-product-item-link"); // Lưu tất cả sản phẩm
  const categoryLinks = $(".category-item-link"); // Lưu các liên kết danh mục

  // Xử lý khi nhấn vào các liên kết danh mục
  categoryLinks.click(function(event) {
      event.preventDefault();

      const selectedCategory = $(this).attr("data-category");

      // Ẩn tất cả sản phẩm trước khi hiển thị sản phẩm tương ứng
      allProducts.hide();

      if (selectedCategory === "all") {
          allProducts.show(); // Hiển thị tất cả sản phẩm
      } else {
          // Hiển thị các sản phẩm có loại tương ứng
          $(`.home-product-item-link[data-category="${selectedCategory}"]`).show();
      }
  });
});


// title
const nameElements = document.querySelectorAll('.product-info-name');
const dynamicTitle = nameElements[0].textContent;
const cleanedTitle = dynamicTitle.replace('name', '');
document.title = cleanedTitle;




// sort options
let selectedSortBtn = document.querySelector('.sort-btn');

function selectSortOption(button) {
    selectedSortBtn.classList.remove('sort-btn');
    button.classList.add('sort-btn');
    selectedSortBtn = button;
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




  

