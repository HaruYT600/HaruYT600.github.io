// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Enhanced animation for showcase text samples with random delays
const textSamples = document.querySelectorAll('.text-sample');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

textSamples.forEach(sample => {
  sample.style.opacity = '0';
  sample.style.transform = 'translateY(20px)';
  observer.observe(sample);
  
  // Add hover animation
  sample.addEventListener('mousemove', (e) => {
    const rect = sample.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    sample.style.setProperty('--x', `${x}px`);
    sample.style.setProperty('--y', `${y}px`);
  });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// Add random floating animation delays to features
document.querySelectorAll('.feature').forEach(feature => {
  feature.style.animationDelay = `${Math.random() * 2}s`;
});

// Create floating particles in the background
const createParticles = () => {
  const main = document.querySelector('main');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--size', `${Math.random() * 3 + 1}px`);
    particle.style.setProperty('--left', `${Math.random() * 100}vw`);
    particle.style.setProperty('--delay', `-${Math.random() * 20}s`);
    main.appendChild(particle);
  }
};

createParticles();

// Add copy functionality for code blocks
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const targetId = button.getAttribute('data-target');
    const codeElement = document.getElementById(targetId);
    const text = codeElement.textContent;

    try {
      await navigator.clipboard.writeText(text);
      button.innerHTML = `
        <svg class="copy-icon" viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
        Copied!
      `;
      button.classList.add('copied');
      
      setTimeout(() => {
        button.innerHTML = `
          <svg class="copy-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
          Copy
        `;
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  });
});
