document.addEventListener('DOMContentLoaded', () => {
    const catLinks = document.querySelectorAll('.cat-link');
    const postCards = document.querySelectorAll('.post-card');

    catLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Đổi màu menu active
            catLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            // Lọc logic
            const filter = link.getAttribute('data-filter');

            postCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});