window.openNav = function () {
    var sidebar = document.getElementById('mySidebar');
    var main = document.getElementById('main');
    if (!sidebar || !main) return;
    sidebar.style.width = '300px';
    sidebar.setAttribute('aria-hidden', 'false');
    main.style.marginLeft = '300px';
    var firstLink = sidebar.querySelector('a');
    if (firstLink) firstLink.focus();
};

window.closeNav = function () {
    var sidebar = document.getElementById('mySidebar');
    var main = document.getElementById('main');
    if (!sidebar || !main) return;
    sidebar.style.width = '0';
    sidebar.setAttribute('aria-hidden', 'true');
    main.style.marginLeft = '0';
    var openBtn = document.querySelector('.openbtn');
    if (openBtn) openBtn.focus();
};

window.abrirQuemSou = function () {
    var target = document.getElementById('detalhes-eu');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.add('highlight-temp');
        setTimeout(function () {
            target.classList.remove('highlight-temp');
        }, 1200);
    }
};

window.scrollCarousel = function (direction) {
    var track = document.getElementById('carouselTrack');
    if (!track) return;
    var card = track.querySelector('.project-card');
    if (!card) return;

    var cardStyle = window.getComputedStyle(card);
    var marginRight = parseFloat(cardStyle.marginRight) || 0;
    var scrollAmount = card.offsetWidth + marginRight;

    track.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
};

window.abrirJogoFreeway = function (url) {
    window.open(url || 'freeway/index.html', '_blank', 'noopener');
};

document.addEventListener('DOMContentLoaded', function () {
    var track = document.getElementById('carouselTrack');
    if (!track) return;

    var URL_JOGO = 'freeway/index.html';

    if (!track.querySelector('.project-shortcut')) {
        var atalho = document.createElement('a');
        atalho.href = URL_JOGO;
        atalho.target = '_blank';
        atalho.rel = 'noopener';
        atalho.className = 'project-card project-shortcut';

        atalho.innerHTML =
            '<div>' +
                '<span class="project-shortcut-tag">Jogo · HTML5 Canvas &amp; JS</span>' +
                '<h3 class="project-shortcut-title">Freeway<br><em>Atari 2600</em></h3>' +
                '<p class="project-shortcut-desc">Recriação multiplayer local do clássico de 1981 com áudio e física em Canvas.</p>' +
            '</div>' +
            '<span class="project-shortcut-cta">Jogar Agora &#8599;</span>';

        track.insertBefore(atalho, track.firstChild);
    }
});

document.addEventListener('click', function (e) {
    var sidebar = document.getElementById('mySidebar');
    if (!sidebar) return;
    var isOpen = sidebar.style.width && sidebar.style.width !== '0px';
    if (!isOpen) return;
    var openBtn = document.querySelector('.openbtn');
    var clickedInside = sidebar.contains(e.target) || (openBtn && openBtn.contains(e.target));
    if (!clickedInside && window.innerWidth <= 600) {
        closeNav();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
});