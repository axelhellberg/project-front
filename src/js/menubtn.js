const menuBtn = function(e) {
    if (!e.target.classList.contains('menu-btn')) return;

    const btn = e.target;
    const menu = document.getElementById('main-menu');
    const delay = 200;

    menu.classList.toggle('hidden');
    if (btn.classList.contains('rotate')) {
        btn.classList.toggle('rotate');
        setTimeout(function(){ btn.classList.toggle('close') }, delay);
    } else {
        btn.classList.toggle('close');
        setTimeout(function(){ btn.classList.toggle('rotate') }, delay);
    }
};

document.addEventListener('click', menuBtn, false);

document.addEventListener('mousedown', function (e) {
    if (!e.target.classList.contains('menu-btn')) return;
    e.preventDefault();
}, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') menuBtn(e);
}, false);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') e.target.blur();
}, false);