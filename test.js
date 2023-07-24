function removeVietnameseDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function handleSearchInput() {
    let input = document.getElementById('searchInput');
    let searchHistory = document.querySelector('.search-history');
    let noResultsMessage = document.querySelector('.no-results-message');

    input.value = removeVietnameseDiacritics(input.value); // Loại bỏ dấu từ ô nhập liệu
    searchHistory.innerHTML = input.value; // Hiển thị nội dung của ô nhập liệu vào div "search-history"
    noResultsMessage.style.display = 'none'; // Ẩn thông báo "Không tìm thấy sản phẩm"
}

function searchProduct() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let productItems = document.querySelectorAll('.home-product-item');
    let noResultsMessage = document.querySelector('.no-results-message');

    for (let i = 0; i < productItems.length; i++) {
        let productName = productItems[i].querySelector('.home-product-item-name').innerText;
        productName = removeVietnameseDiacritics(productName); // Loại bỏ dấu từ tên sản phẩm
        if (productName.toUpperCase().indexOf(filter) > -1) {
            productItems[i].style.display = ''; // Hiển thị sản phẩm phù hợp với tìm kiếm
            noResultsMessage.style.display = 'none'; // Ẩn thông báo "Không tìm thấy sản phẩm"
        } else {
            productItems[i].style.display = 'none'; // Ẩn sản phẩm không phù hợp
            noResultsMessage.style.display = ''; // Hiển thị thông báo "Không tìm thấy sản phẩm"
        }
    }
}
