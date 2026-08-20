document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('exploreBtn');
    
    btn.addEventListener('click', () => {
        btn.textContent = 'Launching Services...';
        btn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            btn.textContent = 'Explore Stack';
            btn.style.transform = 'scale(1)';
            
            // Add a cool ripple effect
            createRipple(btn);
        }, 1000);
    });

    function createRipple(button) {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `50%`;
        circle.style.top = `50%`;
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        circle.style.animation = 'ripple 0.6s linear';

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes ripple {
                to { transform: translate(-50%, -50%) scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        const existing = button.getElementsByClassName('ripple')[0];
        if (existing) {
            existing.remove();
        }

        circle.classList.add('ripple');
        button.appendChild(circle);
    }
});
