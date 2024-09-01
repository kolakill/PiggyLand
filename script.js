document.addEventListener("DOMContentLoaded", function () {
    const hotspots = document.querySelectorAll('.hotspot');
    const infoPopup = document.getElementById('info-popup');
    const ownerSpan = document.getElementById('owner');
    const residentsSpan = document.getElementById('residents');
    const ownerAvatar = document.getElementById('owner-avatar');

    hotspots.forEach(spot => {
        spot.addEventListener('mouseenter', function (event) {
            const owner = event.target.getAttribute('data-owner');
            const residents = event.target.getAttribute('data-residents');
            const avatar = event.target.getAttribute('data-avatar');
            
            ownerSpan.textContent = owner;
            residentsSpan.textContent = residents;
            ownerAvatar.src = avatar;

            infoPopup.classList.add('show');
        });

        spot.addEventListener('mouseleave', function () {
            infoPopup.classList.remove('show');
        });
    });

    // Блокировка изменения масштаба на ПК
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
            event.preventDefault();
        }
    });

    document.addEventListener('wheel', function (event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    });
});
