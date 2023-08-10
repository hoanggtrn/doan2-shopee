// // xử lý sản phẩm dùng chung 1 trang product
$(document).ready(function() {
    // Xử lý khi trang product.html được tải
    if (window.location.href.includes("/product/product.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");

        // Sử dụng AJAX để tải nội dung sản phẩm tương ứng và hiển thị vào #product-container
        $.ajax({
            url: `../product/product${productId}.html`,
            success: function(data) {
                $("#product-container").html(data);
            }
        });

        // Tải và hiển thị header và footer chung
        $("#header").load("/base/header.html");
        $("#footer").load("/base/footer.html");
    }

});

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


