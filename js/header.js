document.addEventListener('DOMContentLoaded', function () {
    const productsDropdown = document.getElementById('productsDropdown');
    const productsMegaMenu = document.getElementById('productsMegaMenu');
    const brochuresDropdown = document.getElementById('brochuresDropdown');
    const brochuresMegaMenu = document.getElementById('brochuresMegaMenu');
    
    // Search functionality
    const searchToggle = document.getElementById('searchToggle');
    const searchToggleMobile = document.getElementById('searchToggleMobile');
    const searchSection = document.getElementById('searchSection');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');

    // Cart functionality
    const cartBadge = document.querySelector('.cart-badge');
    const cartLink = document.querySelector('.cart-link');

    // Initialize cart count from localStorage or set to 0
    let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    updateCartDisplay();

    // Toggle search section
    function toggleSearch() {
        searchSection.classList.toggle('show');
        if (searchSection.classList.contains('show')) {
            // Focus on search input when opened
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        }
    }

    // Close search section
    function closeSearchSection() {
        searchSection.classList.remove('show');
    }

    // Update cart display
    function updateCartDisplay() {
        if (cartBadge) {
            cartBadge.textContent = cartCount;
            // Hide badge if cart is empty
            if (cartCount === 0) {
                cartBadge.style.display = 'none';
            } else {
                cartBadge.style.display = 'flex';
            }
        }
    }

    // Add item to cart (example function)
    function addToCart() {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartDisplay();
        
        // Add animation effect
        if (cartBadge) {
            cartBadge.style.animation = 'none';
            setTimeout(() => {
                cartBadge.style.animation = 'pulse 2s infinite';
            }, 10);
        }
    }

    // Cart click handler
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Add shake animation on click
            cartLink.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                cartLink.style.animation = '';
            }, 500);
            
            // Here you would typically open cart modal or navigate to cart page
            console.log('Cart clicked - items:', cartCount);
        });
    }

    // Event listeners for search
    if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
    }
    
    if (searchToggleMobile) {
        searchToggleMobile.addEventListener('click', toggleSearch);
    }
    
    if (closeSearch) {
        closeSearch.addEventListener('click', closeSearchSection);
    }

    // Close search when clicking outside
    document.addEventListener('click', function (event) {
        if (searchSection.classList.contains('show') && 
            !searchSection.contains(event.target) && 
            !searchToggle?.contains(event.target) && 
            !searchToggleMobile?.contains(event.target)) {
            closeSearchSection();
        }
    });

    // Close search with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && searchSection.classList.contains('show')) {
            closeSearchSection();
        }
    });

    // Products and Brochures dropdown functionality
    productsDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        brochuresMegaMenu.classList.remove('show');
        productsMegaMenu.classList.toggle('show');
        // Close search when opening mega menus
        closeSearchSection();
    });

    brochuresDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        productsMegaMenu.classList.remove('show');
        brochuresMegaMenu.classList.toggle('show');
        // Close search when opening mega menus
        closeSearchSection();
    });

    document.addEventListener('click', function (event) {
        const isClickInsideProducts = productsDropdown.contains(event.target) || productsMegaMenu.contains(event.target);
        const isClickInsideBrochures = brochuresDropdown.contains(event.target) || brochuresMegaMenu.contains(event.target);

        if (!isClickInsideProducts) {
            productsMegaMenu.classList.remove('show');
        }
        if (!isClickInsideBrochures) {
            brochuresMegaMenu.classList.remove('show');
        }
    });

    // Expose addToCart function globally for other scripts to use
    window.addToCart = addToCart;
});
