////////////////////////// load header và footer //////////////////////////
$(function() {
    $("#header").load("/base/header.html");
    $("#footer").load("/base/footer.html");
});


////////////////////////// Lấy phần tử có class product-info-name làm title//////////////////////////
const productNameElement = document.querySelector('.product-info-name');

// Lấy tên sản phẩm từ nội dung của phần tử
const productName = productNameElement.textContent;

// Đặt tên sản phẩm làm tiêu đề cho trang web
document.title = productName;


////////////////////////// số lượng sp //////////////////////////
function changeQuantity(change) {
    let quantityInput = document.getElementById('quantityInput');
    let quantity = parseInt(quantityInput.value);
    quantity += change;
    if (quantity < 1) {
        quantity = 1;
    }
    quantityInput.value = quantity;
}


////////////////////////// btn selector //////////////////////////
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-feedback-rating-overview-filter-item');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}


////////////////////////// btn selection //////////////////////////
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-contain-classify-btn');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}


////////////////////////// preview image //////////////////////////
function displayLargeImage(smallImage) {
    const largeImage = document.querySelector('.product-image-preview-top-img');
    largeImage.src = smallImage.src.replace('_tn', ''); // Thay đổi đường dẫn ảnh lớn bằng cách loại bỏ "_tn" từ đường dẫn ảnh nhỏ
    largeImage.alt = smallImage.alt;
}


////////////////////////// Lắng nghe sự kiện click trên nút "Thêm vào giỏ hàng" //////////////////////////
document.querySelector('.product-contain-puttocart').addEventListener('click', function() {
    // Lấy giá trị số lượng từ thanh điều chỉnh
    const quantityInput = document.getElementById('quantityInput');
    const selectedQuantity = parseInt(quantityInput.value);

    // Ẩn khối header-cart-empty và hiển thị khối header-cart-has-cart
    document.querySelector('.header-cart-empty').style.display = 'none';
    document.querySelector('.header-cart-has-cart').style.display = 'block';

    const productImage = document.querySelector('.product-image-preview-top-img').src;
    const productName = document.querySelector('.product-info-name').textContent;
    const productPrice = document.querySelector('.product-price').textContent;

    const existingCartItem = Array.from(document.querySelectorAll('.header-cart-list-item-name')).find(item => item.textContent === productName);

    if (existingCartItem) {
        // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng hoặc thay đổi thông tin khác
        const quantityElement = existingCartItem.parentElement.querySelector('.header-cart-list-item-quantity');
        const currentQuantity = parseInt(quantityElement.dataset.quantity);
        const newQuantity = currentQuantity + selectedQuantity;
        quantityElement.dataset.quantity = newQuantity;
        quantityElement.textContent = `x${newQuantity}`;
    } else {
        // Sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào
        const newCartItem = document.createElement('li');
        newCartItem.classList.add('header-cart-list-item');

        const itemContent = `
            <img class="header-cart-list-item-img" src="${productImage}" alt="">
            <div class="header-cart-list-item-info">
                <span class="header-cart-list-item-name">${productName}</span>
                <span class="header-cart-list-item-price">${productPrice}</span>
                <span class="header-cart-list-item-quantity" data-quantity="${selectedQuantity}">x${selectedQuantity}</span>
            </div>
        `;

        newCartItem.innerHTML = itemContent;

        // Thêm phần tử mới vào danh sách giỏ hàng
        const cartList = document.querySelector('.header-cart-list-has-cart');
        cartList.appendChild(newCartItem);
    }

    // Cập nhật số lượng trong badge
    const cartItemCount = document.querySelectorAll('.header-cart-list-item').length;
    updateCartBadge(cartItemCount);

    setTimeout(function() {
        showSuccessMessage();
    }, 250);
});

// Hàm cập nhật số lượng trong badge
function updateCartBadge(count) {
    const cartBadge = document.querySelector('.header-cart-number-badge');
    cartBadge.textContent = count.toString();
}

// Hàm hiển thị thông báo thành công và tự động ẩn sau một khoảng thời gian
function showSuccessMessage() {
    let successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Tự động ẩn thông báo sau 2 giây (2000ms)
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
}










