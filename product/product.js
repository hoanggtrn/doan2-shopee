////////////////////////// load header và footer //////////////////////////
$(function() {
    $("#header").load("/base/header.html");
    $("#footer").load("/base/footer.html");
});


////////////////////////// btn selector //////////////////////////
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-feedback-rating-overview-filter-item');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}


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
    setTimeout(function() {
        showSuccessMessage();
    }, 300); // Thời gian trễ 0.5 giây (500ms)
});

// Hàm hiển thị thông báo thành công và tự động ẩn sau một khoảng thời gian
function showSuccessMessage() {
    let successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Tự động ẩn thông báo sau 2 giây (2000ms)
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
}
