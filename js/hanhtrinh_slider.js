const images = [
            '/img/char/hanhtrinh1.png',
            '/img/char/hanhtrinh2.png',
            '/img/char/hanhtrinh3.png',
            '/img/char/hanhtrinh4.png',
            '/img/char/hanhtrinh5.png',
            '/img/char/hanhtrinh6.png',
            '/img/char/hanhtrinh7.png',
        ];

        // DOM Elements
        const mainImage = document.getElementById('main-image');
        const prevButton = document.getElementById('prev-btn');
        const nextButton = document.getElementById('next-btn');
        const thumbnailCarousel = document.getElementById('thumbnail-carousel');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        const scrollbarThumb = document.getElementById('scrollbar-thumb');
        
        // Current image index and dragging variables
        let currentIndex = 0;
        let isDragging = false;
        let isScrollbarDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let previousTranslate = 0;
        
        // Constants
        const thumbnailWidth = 200; // Width of each thumbnail
        const thumbnailGap = 10;   // Gap between thumbnails
        const visibleThumbnails = 5; // Number of visible thumbnails
        const itemWidth = thumbnailWidth + thumbnailGap;
        const maxScroll = (images.length - visibleThumbnails) * itemWidth;
        const scrollbarContainerWidth = 390; // Same as thumbnail container

        // Initialize slider and thumbnails
        function initSlider() {
            // Create thumbnails
            images.forEach((src, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = src;
                thumbnail.classList.add('hanhtrinh-thumbnail');
                if (index === 0) thumbnail.classList.add('active');
                
                // Click handler for thumbnails
                thumbnail.addEventListener('click', (e) => {
                    // Only trigger click if not dragging
                    if (!isDragging) {
                        updateSlider(index);
                    }
                });
                
                thumbnailCarousel.appendChild(thumbnail);
            });

            // Set initial image
            mainImage.src = images[0];

            // Navigation button event listeners
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    updateSlider(currentIndex - 1);
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex < images.length - 1) {
                    updateSlider(currentIndex + 1);
                }
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    updateSlider(currentIndex - 1);
                } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
                    updateSlider(currentIndex + 1);
                }
            });

            // Set up draggable thumbnails
            setupDraggable();
            
            // Set up scrollbar
            setupScrollbar();

            // Update button states
            updateNavigationButtons();
        }

        // Update slider, image, and thumbnails
        function updateSlider(index) {
            // Update current index
            currentIndex = index;
            
            // Update main image with fade effect
            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.src = images[currentIndex];
                mainImage.style.opacity = 1;
            }, 300);
            
            // Update thumbnail active state
            const thumbnails = document.querySelectorAll('.hanhtrinh-thumbnail');
            thumbnails.forEach((thumb, thumbIndex) => {
                if (thumbIndex === currentIndex) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });

            // Scroll thumbnail carousel to keep active thumbnail in the middle
            scrollThumbnails();

            // Update navigation button states
            updateNavigationButtons();
        }

        // Scroll thumbnails to keep active thumbnail in the middle
        function scrollThumbnails() {
            // Calculate the position to center the active thumbnail
            let scrollPosition;
            
            // For the first thumbnails
            if (currentIndex <= Math.floor(visibleThumbnails / 2)) {
                scrollPosition = 0;
            } 
            // For the last thumbnails
            else if (currentIndex >= images.length - Math.floor(visibleThumbnails / 2)) {
                scrollPosition = maxScroll;
                if (scrollPosition < 0) scrollPosition = 0;
            } 
            // For middle thumbnails
            else {
                scrollPosition = (currentIndex - Math.floor(visibleThumbnails / 2)) * itemWidth;
            }
            
            // Apply transform to move the carousel
            previousTranslate = -scrollPosition;
            currentTranslate = -scrollPosition;
            setCarouselPosition(currentTranslate);
            
            // Update scrollbar position
            updateScrollbarPosition();
        }

        // Setup draggable functionality
        function setupDraggable() {
            // Mouse events
            thumbnailContainer.addEventListener('mousedown', dragStart);
            thumbnailContainer.addEventListener('mouseup', dragEnd);
            thumbnailContainer.addEventListener('mouseleave', dragEnd);
            thumbnailContainer.addEventListener('mousemove', drag);
            
            // Touch events for mobile support
            thumbnailContainer.addEventListener('touchstart', dragStart);
            thumbnailContainer.addEventListener('touchend', dragEnd);
            thumbnailContainer.addEventListener('touchcancel', dragEnd);
            thumbnailContainer.addEventListener('touchmove', drag);
            
            // Prevent default behavior on drag
            thumbnailContainer.addEventListener('dragstart', (e) => e.preventDefault());
        }
        
        // Setup scrollbar functionality
        function setupScrollbar() {
            // Calculate thumb width - proportional to visible area
            const thumbWidthPercentage = visibleThumbnails / images.length;
            const thumbWidth = Math.max(30, scrollbarContainerWidth * thumbWidthPercentage);
            scrollbarThumb.style.width = thumbWidth + 'px';
            
            // Update initial scrollbar position
            updateScrollbarPosition();
            
            // Scrollbar drag events
            scrollbarThumb.addEventListener('mousedown', scrollbarDragStart);
            document.addEventListener('mouseup', scrollbarDragEnd);
            document.addEventListener('mousemove', scrollbarDrag);
            
            // Touch events for scrollbar
            scrollbarThumb.addEventListener('touchstart', scrollbarDragStart);
            document.addEventListener('touchend', scrollbarDragEnd);
            document.addEventListener('touchmove', scrollbarDrag);
        }
        
        // Scrollbar drag start
        function scrollbarDragStart(e) {
            e.preventDefault();
            isScrollbarDragging = true;
            startPosition = getPositionX(e) - scrollbarThumb.getBoundingClientRect().left;
        }
        
        // Scrollbar dragging
        function scrollbarDrag(e) {
            if (!isScrollbarDragging) return;
            e.preventDefault();
            
            const scrollTrackWidth = scrollbarContainerWidth - scrollbarThumb.offsetWidth;
            const trackRect = scrollbarThumb.parentElement.getBoundingClientRect();
            
            // Calculate position within scrollbar track
            let position = getPositionX(e) - trackRect.left - startPosition;
            
            // Limit position to track bounds
            position = Math.max(0, Math.min(position, scrollTrackWidth));
            
            // Calculate position percentage
            const percentage = position / scrollTrackWidth;
            
            // Calculate corresponding carousel position
            currentTranslate = -percentage * maxScroll;
            previousTranslate = currentTranslate;
            
            // Update carousel and scrollbar positions
            setCarouselPosition(currentTranslate);
            scrollbarThumb.style.left = position + 'px';
        }
        
        // Scrollbar drag end
        function scrollbarDragEnd() {
            if (isScrollbarDragging) {
                isScrollbarDragging = false;
            }
        }
        
        // Update scrollbar position based on carousel position
        function updateScrollbarPosition() {
            const percentage = -currentTranslate / maxScroll || 0;
            const scrollTrackWidth = scrollbarContainerWidth - scrollbarThumb.offsetWidth;
            const position = percentage * scrollTrackWidth;
            scrollbarThumb.style.left = position + 'px';
        }

        // Drag start event
        function dragStart(e) {
            isDragging = true;
            startPosition = getPositionX(e);
            thumbnailCarousel.classList.add('dragging');
        }
        
        // Dragging event
        function drag(e) {
            if (isDragging) {
                const currentPosition = getPositionX(e);
                const diff = currentPosition - startPosition;
                currentTranslate = previousTranslate + diff;
                
                // Limit scrolling bounds
                if (currentTranslate > 0) {
                    currentTranslate = 0;
                } else if (currentTranslate < -maxScroll) {
                    currentTranslate = -maxScroll;
                }
                
                setCarouselPosition(currentTranslate);
                updateScrollbarPosition();
            }
        }
        
        // Drag end event
        function dragEnd() {
            if (isDragging) {
                isDragging = false;
                previousTranslate = currentTranslate;
                thumbnailCarousel.classList.remove('dragging');
            }
        }
        
        // Helper to get position from mouse or touch event
        function getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        }
        
        // Set carousel position
        function setCarouselPosition(position) {
            thumbnailCarousel.style.transform = `translateX(${position}px)`;
        }

        // Update navigation button states
        function updateNavigationButtons() {
            // Disable previous button if at first image
            prevButton.disabled = currentIndex === 0;
            
            // Disable next button if at last image
            nextButton.disabled = currentIndex === images.length - 1;
        }

        // Initialize on page load
        initSlider();