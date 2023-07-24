function showProductDetails(productName) {
    // Đây là hàm để hiển thị thông tin chi tiết sản phẩm dựa vào tên sản phẩm được chọn.
    // Trong ví dụ này, chúng ta sẽ sử dụng một đoạn văn bản đơn giản.
    let productDetailsDiv = document.getElementById('productDetails');
    productDetailsDiv.innerHTML = `<h2>${productName}</h2>
                                    <p>Thông tin chi tiết về ${productName}</p>`;
}
