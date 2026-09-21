// HTMLの要素（ボタンとメニュー）を取得して変数に入れる
const hamburger = document.getElementById('js-hamburger');
const navMenu = document.getElementById('js-nav-menu');

// ボタンがクリックされたときの動き
hamburger.addEventListener('click', () => {
    // ボタンとメニューに「is-active」クラスをつけたり外したりする
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});

// メニュー内のリンクがクリックされたらメニューを閉じる
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
    });
});
