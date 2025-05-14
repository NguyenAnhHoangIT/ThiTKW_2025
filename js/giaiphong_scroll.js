
  const scrollContainer = document.querySelector('.timeline-container');
  const scrollLine = document.getElementById('scroll-line');
  const scrollIcon = document.getElementById('scroll-xetang');

  scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const scrollPercent = (scrollLeft / maxScrollLeft) * 100;

    scrollLine.style.width = scrollPercent + '%';
    scrollIcon.style.left = `calc(${scrollPercent}% - 100px)`;
  });
    