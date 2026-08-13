// 文章筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // 切换激活状态
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // 筛选文章
            portfolioItems.forEach(function(item) {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});