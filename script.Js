


document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 

        
        targetSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});


const navToggle = document.createElement('button'); 
navToggle.innerText = '☰';
navToggle.classList.add('nav-toggle'); 
document.querySelector('nav').prepend(navToggle); 


navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('visible'); 
});

const style = document.createElement('style');
style.innerHTML = `
    .nav-toggle {
        background: none;
        border: none;
        font-size: 30px;
        cursor: pointer;
        color: white;
        margin-left: auto; /* Align to the right */
        display: none; /* Hide by default */
    }
    
    @media (max-width: 768px) { /* Media query for mobile */
        .nav-toggle {
            display: block; /* Show the toggle button on mobile */
        }
        
        nav ul {
            display: none; /* Hide nav links by default */
            flex-direction: column; /* Stack links vertically */
            position: absolute; /* Position absolutely */
            background: rgba(0, 0, 0, 0.8); /* Background color */
            top: 60px; /* Position below the nav */
            width: 100%; /* Full width */
            left: 0; /* Align to the left */
        }
        
        nav ul.visible {
            display: flex; /* Show nav links when visible */
        }
    }
`;
document.head.appendChild(style);
