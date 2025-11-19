// SPA Navigation
const links = document.querySelectorAll('nav a, .btn, .btn-small');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
    link.addEventListener('click', e => {
        const target = link.dataset.target;
        if (!target) return;
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(target).classList.add('active');
        links.forEach(l => l.classList.remove('active'));
        if(link.tagName==='A') link.classList.add('active');
        window.scrollTo(0,0);
        showCardsAnimation();
    });
});

// Dark Mode Toggle
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
});

// Cards Animation on Page Load
function showCardsAnimation(){
    const cards = document.querySelectorAll('section.active .card');
    cards.forEach((card,i) => {
        setTimeout(() => card.classList.add('show'), i*150);
    });
}
showCardsAnimation();

// Search & Filter in Courses
const searchBox = document.getElementById('searchBox');
if(searchBox){
    searchBox.addEventListener('input', () => {
        const filter = searchBox.value.toLowerCase();
        const cards = document.querySelectorAll('#courses .card');
        cards.forEach(card => {
            const text = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = text.includes(filter) ? 'block' : 'none';
        });
    });
}
