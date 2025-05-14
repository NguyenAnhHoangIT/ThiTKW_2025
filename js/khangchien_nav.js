document.addEventListener('DOMContentLoaded', function() {
  // TAB: Điều hướng chuyển tab
  const navItems = document.querySelectorAll('.khangchien-nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(nav => nav.classList.remove('khangchien-active'));
      this.classList.add('khangchien-active');

      const contentSections = document.querySelectorAll('.khangchien-content-section');
      contentSections.forEach(section => section.classList.remove('khangchien-active'));

      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('khangchien-active');
    });
  });

  const track = document.querySelector('.khangchien-slider-track');
    const slides = track.querySelectorAll('img');
    let currentIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;

    // Auto slide
    function autoSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function updateSlider() {
      currentTranslate = -currentIndex * slides[0].clientWidth;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }

    let interval = setInterval(autoSlide, 5000);

    // Initialize position
    updateSlider();
});
