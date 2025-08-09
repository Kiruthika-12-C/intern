


        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    
    document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Dark mode script running");
        
    
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
if (!toggleBtn) {
        console.error("❌ Theme toggle button not found in HTML");
        return;
    }

    
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});

  document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const messageDiv = document.getElementById('formMessage');
            
          
            messageDiv.innerHTML = '<div class="success-message">✅ Message sent successfully! I\'ll get back to you soon.</div>';
            this.reset();
            
            
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 5000);
        });