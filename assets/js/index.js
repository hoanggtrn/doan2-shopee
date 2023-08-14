////////////////////////// load header và footer //////////////////////////
$(function() {
    $("#header").load("/base/header.html");
    $("#footer").load("/base/footer.html");
});


///////////////////// slider //////////////////////
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderWidth = slider.offsetWidth;
const totalSlides = slider.childElementCount;
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSliderPosition();
});

function updateSliderPosition() {
    const newPosition = -currentIndex * sliderWidth;
    slider.style.transition = 'transform 0.5s ease-out';
    slider.style.transform = `translateX(${newPosition}px)`;

    // Sử dụng sự kiện transitionend để loại bỏ transition sau khi hoàn thành
    slider.addEventListener('transitionend', () => {
        slider.style.transition = '';
    }, { once: true });
}

// Tự động chuyển slide sau một khoảng thời gian
setInterval(() => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSliderPosition();
}, 5000); // Chuyển slide sau mỗi 5 giây (5000ms)
