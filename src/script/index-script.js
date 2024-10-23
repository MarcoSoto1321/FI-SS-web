new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    //pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //Responsive 
    breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:3
        },
        1024: {
            slidesPerView:4
        }
    }
});


const carousel = document.querySelector('.news-carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const newsItems = document.querySelectorAll('.news-item');
let currentIndex = 0;
let itemsPerView = 1;

function updateItemsPerView() {
    if (window.innerWidth >= 1024) {
        itemsPerView = 4;
    } else if (window.innerWidth >= 768) {
        itemsPerView = 2;
    } else {
        itemsPerView = 1;
    }
}

function cloneItems() {
    newsItems.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });
}

function showNews(index) {
    const itemWidth = 100 / itemsPerView;
    const offset = itemWidth * index;
    carousel.style.transform = `translateX(-${offset}%)`;
}

function nextNews() {
    currentIndex++;
    if (currentIndex >= newsItems.length) {
        currentIndex = 0;
        carousel.style.transition = 'none';
        showNews(currentIndex);
        setTimeout(() => {
            carousel.style.transition = 'transform 0.3s ease';
        }, 10);
    } else {
        showNews(currentIndex);
    }
}

function prevNews() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = newsItems.length - 1;
        carousel.style.transition = 'none';
        showNews(currentIndex);
        setTimeout(() => {
            carousel.style.transition = 'transform 0.3s ease';
        }, 10);
    } else {
        showNews(currentIndex);
    }
}

function handleResize() {
    updateItemsPerView();
    showNews(currentIndex);
}

nextButton.addEventListener('click', nextNews);
prevButton.addEventListener('click', prevNews);
window.addEventListener('resize', handleResize);

// Initial setup
updateItemsPerView();
cloneItems();
showNews(currentIndex);