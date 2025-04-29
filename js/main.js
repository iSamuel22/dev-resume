// Add smooth animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Animate profile elements
    const header = document.querySelector('header');
    const links = document.querySelectorAll('.link-card');
    
    // Simple fade-in animation
    setTimeout(() => {
        header.style.opacity = '1';
    }, 300);
    
    // Sequential animation for links
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    
    // Track link clicks (optional)
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // You can add analytics code here
            console.log(`Link clicked: ${link.textContent.trim()}`);
        });
    });
});