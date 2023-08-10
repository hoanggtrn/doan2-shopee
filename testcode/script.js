$(document).ready(function() {
    // Xử lý khi nhấn vào các link sản phẩm
    $(".home-product-item-link").click(function(event) {
        event.preventDefault();

        // Lấy tên sản phẩm từ nội dung của class home-product-item-name
        const productName = $(this).find(".home-product-item-name").text();

        // Đặt tên sản phẩm là title của trang
        document.title = productName;

        // Chuyển hướng đến trang chi tiết sản phẩm
        window.location.href = $(this).attr("href");
    });
});
