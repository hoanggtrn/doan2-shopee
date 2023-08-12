document.getElementById('searchButton').addEventListener('click', function() {
    saveSearchKeyword();
});

function saveSearchKeyword() {
    let searchInput = document.getElementById('searchInput');
    let keyword = searchInput.value.trim(); // Lấy giá trị từ khóa tìm kiếm và loại bỏ khoảng trắng

    if (keyword !== '') {
        // Tạo phần tử <a> mới cho từ khóa tìm kiếm và thêm vào danh sách
        let historyContainer = document.querySelector('.header-search-history');
        let linkItem = document.createElement('a');
        linkItem.className = 'header-search-history-link';
        linkItem.textContent = keyword;
        linkItem.href = '#'; // Có thể thay đổi href theo yêu cầu

        // Thêm sự kiện click để tái sử dụng từ khóa tìm kiếm khi nhấn vào
        linkItem.addEventListener('click', function() {
            searchInput.value = keyword;
        });

        historyContainer.appendChild(linkItem);

        // Xóa giá trị trong ô nhập liệu
        searchInput.value = '';

        // Lưu từ khóa tìm kiếm vào local storage hoặc cookie để duy trì sau khi tải lại trang
        // Ví dụ: localStorage.setItem('searchHistory', JSON.stringify([...historyContainer.children].map(item => item.textContent)));
    }
}
