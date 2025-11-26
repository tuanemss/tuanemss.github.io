// src/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tất cả các liên kết điều hướng và bài đăng
    const filterLinks = document.querySelectorAll('.category-nav .cat-link');
    const postCards = document.querySelectorAll('.content .post-card');

    // 2. Định nghĩa hàm lọc bài đăng
    function filterPosts(filter) {
        postCards.forEach(card => {
            // Lấy category của bài viết (Nếu không có thì mặc định là 'all')
            const category = card.getAttribute('data-category') || 'all'; 
            
            // Ẩn/Hiện bài viết
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden'); 
            } else {
                card.classList.add('hidden'); 
            }
        });
    }

    // 3. Thiết lập sự kiện nhấp chuột
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn trình duyệt chuyển hướng (tải lại trang)

            const currentFilter = link.getAttribute('data-filter');

            // Xử lý class 'active' (đánh dấu mục đang chọn)
            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Lọc
            filterPosts(currentFilter);
        });
    });

    // 4. Lọc lần đầu khi trang tải để hiển thị bài của mục đang active
    const initialActiveLink = document.querySelector('.category-nav .cat-link.active');
    if (initialActiveLink) {
        filterPosts(initialActiveLink.getAttribute('data-filter'));
    } else {
        filterPosts('all');
    }
});