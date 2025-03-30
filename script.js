// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Hero Slider (simplified version)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto slide change every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Search Form Submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;
    const date = document.getElementById('visitDate').value;
    
    // In a real implementation, this would redirect to search results page
    // with parameters or make an API call
    alert(Searching for destinations near ${location} for date ${date});
    
    // For demo purposes, we'll simulate search results
    simulateSearchResults(location);
});

function simulateSearchResults(location) {
    // This would be replaced with actual API call in real implementation
    console.log(Fetching tourist places near ${location}...);
    
    // Create a modal or redirect to results page with mock data
    // For now, we'll just show an alert
    alert(Showing tourist places near ${location}\n\n1. Chitrakote Falls (15km)\n2. Tirathgarh Waterfall (25km)\n3. Barnawapara Wildlife Sanctuary (40km));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(document.querySelector('.navbar.active')) {
                document.querySelector('.navbar').classList.remove('active');
                document.querySelector('.menu-toggle i').classList.remove('fa-times');
                document.querySelector('.menu-toggle i').classList.add('fa-bars');
            }
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '15px 0';
    }
});