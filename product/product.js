
$(function() {
    $("#header").load("/base/header.html");
    $("#footer").load("/base/footer.html");
});


// btn selector
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-feedback-rating-overview-filter-item');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
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


// btn selection
function selectButton(button) {
    const buttons = document.querySelectorAll('.product-contain-classify-btn');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}


// preview image
function displayLargeImage(smallImage) {
    const largeImage = document.querySelector('.product-image-preview-top-img');
    largeImage.src = smallImage.src.replace('_tn', ''); // Thay đổi đường dẫn ảnh lớn bằng cách loại bỏ "_tn" từ đường dẫn ảnh nhỏ
    largeImage.alt = smallImage.alt;
}


