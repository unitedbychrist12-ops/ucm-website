// UCM Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Let Netlify handle the form submission
            console.log('Form submitted to Netlify');
        });
    }

    // Mobile menu toggle (if needed)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Founder testimonial dropdown toggle
function toggleFounderStory() {
    const founderStory = document.getElementById('founderStory');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (founderStory.style.display === 'none' || founderStory.style.display === '') {
        founderStory.style.display = 'block';
        toggleIcon.classList.add('rotated');
        toggleIcon.textContent = '▲';
    } else {
        founderStory.style.display = 'none';
        toggleIcon.classList.remove('rotated');
        toggleIcon.textContent = '▼';
    }
}

// Show intake form modal/popup
function showIntakeForm() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'intake-modal-overlay';
    modal.innerHTML = `
        <div class="intake-modal">
            <div class="modal-header">
                <h3>UCM Street Outreach Intake Process</h3>
                <button class="close-modal" onclick="closeIntakeModal()">&times;</button>
            </div>
            <div class="modal-content">
                <p><strong>Our volunteers use this respectful, simple process to connect with people in need:</strong></p>
                
                <div class="intake-steps">
                    <div class="step">
                        <h4>1. Immediate Needs Assessment</h4>
                        <p>• Food, water, shelter, medical attention<br>
                        • Safety and urgent concerns<br>
                        • Basic comfort items</p>
                    </div>
                    
                    <div class="step">
                        <h4>2. Respectful Information Gathering</h4>
                        <p>• Only what they're comfortable sharing<br>
                        • Contact information (if desired)<br>
                        • Current living situation</p>
                    </div>
                    
                    <div class="step">
                        <h4>3. Service Connection</h4>
                        <p>• What help they want<br>
                        • UCM program interest<br>
                        • Referrals to other services</p>
                    </div>
                    
                    <div class="step">
                        <h4>4. Follow-up Plan</h4>
                        <p>• Scheduled appointments<br>
                        • Return visit plans<br>
                        • Resource materials provided</p>
                    </div>
                </div>
                
                <div class="volunteer-training">
                    <h4>Volunteer Training Includes:</h4>
                    <ul>
                        <li>Trauma-informed care approaches</li>
                        <li>De-escalation techniques</li>
                        <li>Resource navigation</li>
                        <li>Safety protocols</li>
                        <li>Respectful communication</li>
                    </ul>
                </div>
                
                <div class="modal-actions">
                    <a href="#contact" class="btn btn-primary" onclick="closeIntakeModal()">Volunteer with Street Outreach</a>
                    <button class="btn btn-secondary" onclick="closeIntakeModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Close intake form modal
function closeIntakeModal() {
    const modal = document.querySelector('.intake-modal-overlay');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}