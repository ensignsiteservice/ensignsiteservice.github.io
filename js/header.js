// Header functionality for navigation menu interactions
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const mobileMenuButton = document.querySelector('.flex.lg\\:hidden button[type="button"]');
    const mobileMenu = document.querySelector('div.lg\\:hidden[role="dialog"]');
    const closeMobileMenuButton = mobileMenu?.querySelector('button[type="button"]');
    
    // Desktop product dropdown elements
    const productButton = document.querySelector('.hidden.lg\\:flex button[aria-expanded]');
    const productDropdown = document.querySelector('.absolute.inset-x-0.top-0.-z-10');
    
    // Desktop brochures dropdown elements
    const brochuresButton = document.querySelectorAll('.hidden.lg\\:flex button[aria-expanded]')[1];
    const brochuresDropdown = document.querySelectorAll('.absolute.inset-x-0.top-0.-z-10')[1];
    
    // Mobile product submenu elements
    const mobileProductButton = document.querySelector('[aria-controls="disclosure-1"]');
    const mobileProductSubmenu = document.getElementById('disclosure-1');
    const mobileProductIcon = mobileProductButton?.querySelector('svg');
    
    // Mobile brochures submenu elements
    const mobileBrochuresButton = document.querySelector('[aria-controls="disclosure-2"]');
    const mobileBrochuresSubmenu = document.getElementById('disclosure-2');
    const mobileBrochuresIcon = mobileBrochuresButton?.querySelector('svg');
    
    // Mobile services submenu elements
    const mobileServicesButton = document.querySelector('[aria-controls="disclosure-3"]');
    const mobileServicesSubmenu = document.getElementById('disclosure-3');
    const mobileServicesIcon = mobileServicesButton?.querySelector('svg');
    
    // State variables
    let isMobileMenuOpen = false;
    let isProductDropdownOpen = false;
    let isBrochuresDropdownOpen = false;
    let isMobileProductSubmenuOpen = false;
    let isMobileBrochuresSubmenuOpen = false;
    let isMobileServicesSubmenuOpen = false;
    
    
    // Mobile menu toggle functionality
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            // console.log('Mobile menu button clicked'); // Debug
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                // Show mobile menu
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
                // console.log('Mobile menu opened'); // Debug
            } else {
                // Hide mobile menu
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
                document.body.style.overflow = '';
                // console.log('Mobile menu closed'); // Debug
            }
        });
    }
    
    // Close mobile menu functionality
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', function() {
            isMobileMenuOpen = false;
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Desktop product dropdown functionality
    if (productButton && productDropdown) {
        productButton.addEventListener('click', function() {
            isProductDropdownOpen = !isProductDropdownOpen;
            
            if (isProductDropdownOpen) {
                // Show dropdown with animation
                productDropdown.classList.remove('hidden');
                productDropdown.classList.add('transition', 'ease-out', 'duration-200');
                productDropdown.classList.remove('opacity-0', '-translate-y-1');
                productDropdown.classList.add('opacity-100', 'translate-y-0');
                productButton.setAttribute('aria-expanded', 'true');
            } else {
                // Hide dropdown with animation
                productDropdown.classList.add('transition', 'ease-in', 'duration-150');
                productDropdown.classList.remove('opacity-100', 'translate-y-0');
                productDropdown.classList.add('opacity-0', '-translate-y-1');
                productButton.setAttribute('aria-expanded', 'false');
                
                // Hide after animation completes
                setTimeout(() => {
                    if (!isProductDropdownOpen) {
                        productDropdown.classList.add('hidden');
                    }
                }, 150);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!productButton.contains(event.target) && !productDropdown.contains(event.target)) {
                if (isProductDropdownOpen) {
                    isProductDropdownOpen = false;
                    productDropdown.classList.add('transition', 'ease-in', 'duration-150');
                    productDropdown.classList.remove('opacity-100', 'translate-y-0');
                    productDropdown.classList.add('opacity-0', '-translate-y-1');
                    productButton.setAttribute('aria-expanded', 'false');
                    
                    setTimeout(() => {
                        productDropdown.classList.add('hidden');
                    }, 150);
                }
            }
        });
    }
    
    // Desktop brochures dropdown functionality
    if (brochuresButton && brochuresDropdown) {
        brochuresButton.addEventListener('click', function() {
            isBrochuresDropdownOpen = !isBrochuresDropdownOpen;
            
            if (isBrochuresDropdownOpen) {
                // Show dropdown with animation
                brochuresDropdown.classList.remove('hidden');
                brochuresDropdown.classList.add('transition', 'ease-out', 'duration-200');
                brochuresDropdown.classList.remove('opacity-0', '-translate-y-1');
                brochuresDropdown.classList.add('opacity-100', 'translate-y-0');
                brochuresButton.setAttribute('aria-expanded', 'true');
            } else {
                // Hide dropdown with animation
                brochuresDropdown.classList.add('transition', 'ease-in', 'duration-150');
                brochuresDropdown.classList.remove('opacity-100', 'translate-y-0');
                brochuresDropdown.classList.add('opacity-0', '-translate-y-1');
                brochuresButton.setAttribute('aria-expanded', 'false');
                
                // Hide after animation completes
                setTimeout(() => {
                    if (!isBrochuresDropdownOpen) {
                        brochuresDropdown.classList.add('hidden');
                    }
                }, 150);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!brochuresButton.contains(event.target) && !brochuresDropdown.contains(event.target)) {
                if (isBrochuresDropdownOpen) {
                    isBrochuresDropdownOpen = false;
                    brochuresDropdown.classList.add('transition', 'ease-in', 'duration-150');
                    brochuresDropdown.classList.remove('opacity-100', 'translate-y-0');
                    brochuresDropdown.classList.add('opacity-0', '-translate-y-1');
                    brochuresButton.setAttribute('aria-expanded', 'false');
                    
                    setTimeout(() => {
                        brochuresDropdown.classList.add('hidden');
                    }, 150);
                }
            }
        });
    }
    
    // Mobile product submenu functionality
    if (mobileProductButton && mobileProductSubmenu) {
        mobileProductButton.addEventListener('click', function() {
            isMobileProductSubmenuOpen = !isMobileProductSubmenuOpen;
            
            if (isMobileProductSubmenuOpen) {
                // Show submenu
                mobileProductSubmenu.classList.remove('hidden');
                mobileProductSubmenu.style.display = 'block';
                mobileProductButton.setAttribute('aria-expanded', 'true');
                
                // Rotate icon
                if (mobileProductIcon) {
                    mobileProductIcon.classList.add('rotate-180');
                }
            } else {
                // Hide submenu
                mobileProductSubmenu.classList.add('hidden');
                mobileProductSubmenu.style.display = 'none';
                mobileProductButton.setAttribute('aria-expanded', 'false');
                
                // Rotate icon back
                if (mobileProductIcon) {
                    mobileProductIcon.classList.remove('rotate-180');
                }
            }
        });
    }
    
    // Mobile brochures submenu functionality
    if (mobileBrochuresButton && mobileBrochuresSubmenu) {
        mobileBrochuresButton.addEventListener('click', function() {
            isMobileBrochuresSubmenuOpen = !isMobileBrochuresSubmenuOpen;
            
            if (isMobileBrochuresSubmenuOpen) {
                // Show submenu
                mobileBrochuresSubmenu.classList.remove('hidden');
                mobileBrochuresSubmenu.style.display = 'block';
                mobileBrochuresButton.setAttribute('aria-expanded', 'true');
                
                // Rotate icon
                if (mobileBrochuresIcon) {
                    mobileBrochuresIcon.classList.add('rotate-180');
                }
            } else {
                // Hide submenu
                mobileBrochuresSubmenu.classList.add('hidden');
                mobileBrochuresSubmenu.style.display = 'none';
                mobileBrochuresButton.setAttribute('aria-expanded', 'false');
                
                // Rotate icon back
                if (mobileBrochuresIcon) {
                    mobileBrochuresIcon.classList.remove('rotate-180');
                }
            }
        });
    }
    
    // Mobile services submenu functionality
    if (mobileServicesButton && mobileServicesSubmenu) {
        mobileServicesButton.addEventListener('click', function() {
            isMobileServicesSubmenuOpen = !isMobileServicesSubmenuOpen;
            
            if (isMobileServicesSubmenuOpen) {
                // Show submenu
                mobileServicesSubmenu.classList.remove('hidden');
                mobileServicesSubmenu.style.display = 'block';
                mobileServicesButton.setAttribute('aria-expanded', 'true');
                
                // Rotate icon
                if (mobileServicesIcon) {
                    mobileServicesIcon.classList.add('rotate-180');
                }
            } else {
                // Hide submenu
                mobileServicesSubmenu.classList.add('hidden');
                mobileServicesSubmenu.style.display = 'none';
                mobileServicesButton.setAttribute('aria-expanded', 'false');
                
                // Rotate icon back
                if (mobileServicesIcon) {
                    mobileServicesIcon.classList.remove('rotate-180');
                }
            }
        });
    }
    
    // Handle escape key to close menus
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            // Close mobile menu
            if (isMobileMenuOpen) {
                isMobileMenuOpen = false;
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.style.display = 'none';
                }
                document.body.style.overflow = '';
            }
            
            // Close product dropdown
            if (isProductDropdownOpen && productDropdown && productButton) {
                isProductDropdownOpen = false;
                productDropdown.classList.add('transition', 'ease-in', 'duration-150');
                productDropdown.classList.remove('opacity-100', 'translate-y-0');
                productDropdown.classList.add('opacity-0', '-translate-y-1');
                productButton.setAttribute('aria-expanded', 'false');
                
                setTimeout(() => {
                    productDropdown.classList.add('hidden');
                }, 150);
            }
            
            // Close brochures dropdown
            if (isBrochuresDropdownOpen && brochuresDropdown && brochuresButton) {
                isBrochuresDropdownOpen = false;
                brochuresDropdown.classList.add('transition', 'ease-in', 'duration-150');
                brochuresDropdown.classList.remove('opacity-100', 'translate-y-0');
                brochuresDropdown.classList.add('opacity-0', '-translate-y-1');
                brochuresButton.setAttribute('aria-expanded', 'false');
                
                setTimeout(() => {
                    brochuresDropdown.classList.add('hidden');
                }, 150);
            }
        }
    });
    
    // Handle window resize to close mobile menu on desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024 && isMobileMenuOpen) { // lg breakpoint
            isMobileMenuOpen = false;
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
            }
            document.body.style.overflow = '';
        }
    });
    
    // Initialize elements that should be hidden by default
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        mobileMenu.style.display = 'none';
    }
    
    if (productDropdown) {
        productDropdown.classList.add('hidden');
    }
    
    if (brochuresDropdown) {
        brochuresDropdown.classList.add('hidden');
    }
    
    if (mobileProductSubmenu) {
        mobileProductSubmenu.classList.add('hidden');
        mobileProductSubmenu.style.display = 'none';
    }
    
    if (mobileBrochuresSubmenu) {
        mobileBrochuresSubmenu.classList.add('hidden');
        mobileBrochuresSubmenu.style.display = 'none';
    }
    
    if (mobileServicesSubmenu) {
        mobileServicesSubmenu.classList.add('hidden');
        mobileServicesSubmenu.style.display = 'none';
    }
});
