document.addEventListener('DOMContentLoaded', function () {
    const productsDropdown = document.getElementById('productsDropdown');
    const productsMegaMenu = document.getElementById('productsMegaMenu');
    const brochuresDropdown = document.getElementById('brochuresDropdown');
    const brochuresMegaMenu = document.getElementById('brochuresMegaMenu');

    productsDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        brochuresMegaMenu.classList.remove('show');
        productsMegaMenu.classList.toggle('show');
    });

    brochuresDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        productsMegaMenu.classList.remove('show');
        brochuresMegaMenu.classList.toggle('show');
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
});
