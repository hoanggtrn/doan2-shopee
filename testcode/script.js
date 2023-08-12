// Lấy danh sách các sản phẩm
let productContainer = document.querySelector('.product-list');
let products = Array.from(productContainer.querySelectorAll('.home-product-item-link'));

// Sắp xếp theo giá từ thấp đến cao
document.querySelector('.sort-option-link-upto').addEventListener('click', function() {
    sortProductsByPrice(true);
});

// Sắp xếp theo giá từ cao xuống thấp
document.querySelector('.sort-option-link-downto').addEventListener('click', function() {
    sortProductsByPrice(false);
});

function sortProductsByPrice(ascending) {
    products.sort(function(a, b) {
        let priceA = parseFloat(a.querySelector('.home-product-item-price-current').innerText.replace('₫', '').replace(/\./g, ''));
        let priceB = parseFloat(b.querySelector('.home-product-item-price-current').innerText.replace('₫', '').replace(/\./g, ''));

        if (ascending) {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    // Xóa tất cả sản phẩm hiện có trong danh sách
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }

    // Thêm lại các sản phẩm theo thứ tự đã sắp xếp
    products.forEach(function(product) {
        productContainer.appendChild(product);
    });
}
