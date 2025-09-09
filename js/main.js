document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const links = document.querySelectorAll('.link-card');

    setTimeout(() => {
        header.style.opacity = '1';
    }, 300);

    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Link clicked: ${link.textContent.trim()}`);
        });
    });
});