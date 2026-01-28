// RSave Website JavaScript

// Global variables
let currentPath = '';

// Path selection functionality
function selectPath(pathType) {
    currentPath = pathType;
    openSavingsCalculator();
}

// Modal functionality
function openSavingsCalculator() {
    const modal = document.getElementById('savingsModal');
    const homeCalculator = document.getElementById('homeownerCalculator');
    const businessCalculator = document.getElementById('businessCalculator');
    
    modal.style.display = 'block';
    
    if (currentPath === 'business') {
        homeCalculator.style.display = 'none';
        businessCalculator.style.display = 'block';
    } else {
        homeCalculator.style.display = 'block';
        businessCalculator.style.display = 'none';
    }
}

function closeSavingsCalculator() {
    document.getElementById('savingsModal').style.display = 'none';
    // Clear results
    document.getElementById('homeResults').innerHTML = '';
    document.getElementById('businessResults').innerHTML = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('savingsModal');
    if (event.target === modal) {
        closeSavingsCalculator();
    }
}

// Homeowner savings calculation
function calculateHomeSavings() {
    const internet = parseFloat(document.getElementById('homeInternet').value) || 0;
    const cellPhones = parseFloat(document.getElementById('homeCellPhones').value) || 0;
    const electric = parseFloat(document.getElementById('homeElectric').value) || 0;
    const timeWasted = parseFloat(document.getElementById('homeTimeWasted').value) || 0;
    
    // Calculate potential savings
    const internetSavings = Math.min(internet * 0.4, 50); // Up to $50 savings
    const phoneSavings = Math.min(cellPhones * 0.5, 40); // Up to 50% savings
    const solarSavings = Math.min(electric * 0.8, 200); // Up to 80% electric bill elimination
    
    const totalSavings = internetSavings + phoneSavings + solarSavings;
    const annualSavings = totalSavings * 12;
    
    // Calculate time value (assuming $25/hour for personal time)
    const timeValue = timeWasted * 25;
    const annualTimeValue = timeValue * 12;
    
    // Determine vacation reward tier
    let vacationReward = '';
    if (totalSavings >= 150) {
        vacationReward = '$1,500 Premium Vacation Package';
    } else if (totalSavings >= 100) {
        vacationReward = '$1,000 Vacation Package';
    } else if (totalSavings >= 50) {
        vacationReward = '$500 Restaurant Package';
    } else {
        vacationReward = '$200 Restaurant Package';
    }
    
    const resultsHTML = `
        <h3>💰 Your Potential Monthly Savings: $${totalSavings.toFixed(0)}</h3>
        <div style="margin: 20px 0;">
            <p><strong>✓ Internet:</strong> Save $${internetSavings.toFixed(0)}/month (faster speeds, better reliability)</p>
            <p><strong>✓ Cell Phones:</strong> Save $${phoneSavings.toFixed(0)}/month (better coverage, no dropped calls)</p>
            <p><strong>✓ Solar:</strong> Save $${solarSavings.toFixed(0)}/month (eliminate electric bill, we handle everything)</p>
        </div>
        <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Annual Money Savings: $${annualSavings.toFixed(0)}</strong></p>
            ${timeWasted > 0 ? `<p><strong>Time Value Saved: $${timeValue.toFixed(0)}/month ($${annualTimeValue.toFixed(0)}/year)</strong></p>` : ''}
        </div>
        <div style="background: #f59e0b; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>🎁 BONUS: ${vacationReward} FREE when you switch!</strong></p>
        </div>
        <div style="background: #3b82f6; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>⏰ Time is Money - We Do the Heavy Lifting</strong></p>
            <p>While you enjoy your free time, we handle all the paperwork, installation, and ongoing support.</p>
        </div>
        <button onclick="scheduleConsultation('homeowner')" class="btn-primary" style="width: 100%; margin-top: 20px;">
            Schedule Free Consultation
        </button>
    `;
    
    document.getElementById('homeResults').innerHTML = resultsHTML;
}

// Business savings calculation
function calculateBusinessSavings() {
    const internet = parseFloat(document.getElementById('bizInternet').value) || 0;
    const merchant = parseFloat(document.getElementById('bizMerchant').value) || 0;
    const phone = parseFloat(document.getElementById('bizPhone').value) || 0;
    const energy = parseFloat(document.getElementById('bizEnergy').value) || 0;
    const timeWasted = parseFloat(document.getElementById('bizTimeWasted').value) || 0;
    
    // Calculate potential savings
    const internetSavings = Math.min(internet * 0.3, 100); // Up to 30% savings
    const merchantSavings = Math.min(merchant * 0.4, 300); // Up to 40% savings
    const phoneSavings = Math.min(phone * 0.25, 50); // Up to 25% savings
    const solarSavings = Math.min(energy * 0.6, 200); // Up to 60% energy cost reduction
    
    const totalSavings = internetSavings + merchantSavings + phoneSavings + solarSavings;
    const annualSavings = totalSavings * 12;
    
    // Calculate time value (assuming $50/hour for business time)
    const timeValue = timeWasted * 50;
    const annualTimeValue = timeValue * 12;
    
    // Determine vacation reward tier
    let vacationReward = '';
    if (totalSavings >= 300) {
        vacationReward = '$2,000 Executive Team Vacation Package';
    } else if (totalSavings >= 200) {
        vacationReward = '$1,500 Team Vacation Package';
    } else if (totalSavings >= 100) {
        vacationReward = '$1,000 Business Vacation Package';
    } else {
        vacationReward = '$500 Team Restaurant Package';
    }
    
    const resultsHTML = `
        <h3>📈 Your Potential Monthly Savings: $${totalSavings.toFixed(0)}</h3>
        <div style="margin: 20px 0;">
            <p><strong>✓ Internet:</strong> Save $${internetSavings.toFixed(0)}/month (faster, more reliable, better support)</p>
            <p><strong>✓ Merchant Fees:</strong> Save $${merchantSavings.toFixed(0)}/month (lower processing rates, faster deposits)</p>
            <p><strong>✓ Phone System:</strong> Save $${phoneSavings.toFixed(0)}/month (advanced features, unified communications)</p>
            <p><strong>✓ Solar:</strong> Save $${solarSavings.toFixed(0)}/month (commercial installation, tax incentives)</p>
        </div>
        <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Annual Money Savings: $${annualSavings.toFixed(0)}</strong></p>
            ${timeWasted > 0 ? `<p><strong>Business Time Value Saved: $${timeValue.toFixed(0)}/month ($${annualTimeValue.toFixed(0)}/year)</strong></p>` : ''}
        </div>
        <div style="background: #f59e0b; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>🎁 BONUS: ${vacationReward} FREE for your team!</strong></p>
        </div>
        <div style="background: #3b82f6; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>⏰ Focus on Your Business - We Handle Your Services</strong></p>
            <p>While you grow your business, we optimize your services and operational costs.</p>
        </div>
        <button onclick="scheduleConsultation('business')" class="btn-primary" style="width: 100%; margin-top: 20px;">
            Schedule Business Consultation
        </button>
    `;
    
    document.getElementById('businessResults').innerHTML = resultsHTML;
}

// Schedule consultation
function scheduleConsultation(type) {
    // Close the modal
    closeSavingsCalculator();
    
    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill customer type
    const customerTypeSelect = document.querySelector('select[name="customer_type"]');
    if (customerTypeSelect) {
        customerTypeSelect.value = type;
    }
    
    // Show success message
    setTimeout(() => {
        alert('Great! Please fill out the contact form below and we\'ll schedule your free consultation within 24 hours.');
    }, 500);
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
            if (!phoneRegex.test(data.phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Submit form (this would normally go to your backend)
            submitForm(data);
        });
    }
});

// Form submission function
function submitForm(data) {
    // Show loading state
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // In a real implementation, you would send this data to your backend:
        console.log('Form submitted:', data);
        
        // You could also integrate with services like:
        // - Netlify Forms (if using Netlify)
        // - Formspree
        // - Your own backend API
        // - HighLevel CRM API
    }, 1000);
}

// Success message
function showSuccessMessage() {
    const successHTML = `
        <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3>🎉 Thank You!</h3>
            <p>We've received your request and will contact you within 24 hours with your personalized savings quote and vacation reward details.</p>
            <p><strong>Next Steps:</strong></p>
            <p>1. Check your email for confirmation</p>
            <p>2. Expect our call within 24 hours</p>
            <p>3. Get ready to start saving money!</p>
        </div>
    `;
    
    // Insert success message after the form
    const form = document.getElementById('contactForm');
    const successDiv = document.createElement('div');
    successDiv.innerHTML = successHTML;
    form.parentNode.insertBefore(successDiv, form.nextSibling);
    
    // Remove success message after 10 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 10000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
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
});

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .path-card, .vacation-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.service-card, .path-card, .vacation-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger animation on load
    animateOnScroll();
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Utility function to format phone numbers
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Auto-format phone number input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const formatted = formatPhoneNumber(e.target.value);
            e.target.value = formatted;
        });
    });
});