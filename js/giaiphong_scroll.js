const scrollContainer = document.querySelector('.timeline-container');
const scrollLine = document.getElementById('scroll-line');
const scrollIcon = document.getElementById('scroll-xetang');
const dots = document.querySelectorAll('.timeline-dot');

scrollContainer.addEventListener('scroll', () => {
  const scrollLeft = scrollContainer.scrollLeft;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const scrollPercent = scrollLeft / maxScrollLeft;

  // Move scroll line
  scrollLine.style.width = `${scrollPercent * 100}%`;

  // Move tank icon
  const timelineWidth = scrollContainer.scrollWidth;
  const iconLeft = scrollPercent * timelineWidth;
  scrollIcon.style.left = `calc(${iconLeft}px - 115px)`;

  // Determine which dot is currently active
  let activeDot = null;
  dots.forEach(dot => {
    const dotLeft = dot.offsetLeft;
    if (iconLeft >= dotLeft - 15) { // 15px tolerance
      activeDot = dot;
    }
  });

  // Show info for active dot only
  dots.forEach(dot => {
    const infoBox = dot.querySelector('.timeline-info');
    if (dot === activeDot) {
      infoBox.style.opacity = 1;
      infoBox.style.transform = 'translateX(-50%) translateY(0)';
    } else {
      infoBox.style.opacity = 0;
      infoBox.style.transform = 'translateX(-50%) translateY(10px)';
    }
  });
});
