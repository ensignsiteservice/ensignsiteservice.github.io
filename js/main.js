// Featured Products Carousel Controls
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('featuredProductsScroll');
    const prevBtn = document.getElementById('featuredPrev');
    const nextBtn = document.getElementById('featuredNext');
    if (scrollContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            scrollContainer.scrollBy({ left: -260, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', function() {
            scrollContainer.scrollBy({ left: 260, behavior: 'smooth' });
        });
    }
});
// Main Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Image Slider Functionality
    const slides = document.querySelectorAll('.slide');
    // const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideInterval = 3000; // 3 seconds

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // indicators.forEach(indicator => indicator.classList.remove('active'));

        // Show current slide
        slides[index].classList.add('active');
        // indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides
    let slideTimer = setInterval(nextSlide, slideInterval);


    // Contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // Scroll to contact section or open contact modal
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // If no contact section exists, you can add your contact logic here
                alert('Contact functionality - you can customize this!');
            }
        });
    }

    // Add smooth scrolling animation for the hero section on load
    const heroSection = document.querySelector('.main-hero');
    // if (heroSection) {
    //     heroSection.style.opacity = '0.5';
    //     heroSection.style.transform = 'translateY(30px)';
        
    //     setTimeout(() => {
    //         heroSection.style.transition = 'all 0.5s ease-out';
    //         heroSection.style.opacity = '1';
    //         heroSection.style.transform = 'translateY(0)';
    //     }, 100);
    // }
});
