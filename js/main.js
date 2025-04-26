/*---------------------------
  DOM Elements
---------------------------*/
// Navigation
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Forms
const appointmentForm = document.getElementById('appointment-form');
const newsletterForm = document.getElementById('newsletter-form');

// Modal
const confirmationModal = document.getElementById('confirmation-modal');
const closeModalBtns = document.querySelectorAll('.close-modal, .modal-close-btn');

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

// Gallery
const galleryGrid = document.querySelector('.gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

/*---------------------------
  Gallery Data
---------------------------*/
const galleryItems = [
    {
        id: 1,
        category: 'haircuts',
        title: 'Classic Fade',
        description: 'Timeless style with modern precision',
        imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 2,
        category: 'haircuts',
        title: 'Executive Cut',
        description: 'Professional look for the modern gentleman',
        imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 3,
        category: 'beards',
        title: 'Full Beard Styling',
        description: 'Expertly crafted beard shape and trim',
        imageUrl: 'https://images.unsplash.com/photo-1621607950331-41a4f546ec11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80'
    },
    {
        id: 4,
        category: 'shop',
        title: 'Premium Workspace',
        description: 'Where artistry meets craftsmanship',
        imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 5,
        category: 'haircuts',
        title: 'Textured Crop',
        description: 'Modern style with natural texture',
        imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80'
    },
    {
        id: 6,
        category: 'beards',
        title: 'Precision Beard Line-up',
        description: 'Sharp edges and clean lines',
        imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 7,
        category: 'shop',
        title: 'Relaxing Atmosphere',
        description: 'Luxury environment for your grooming needs',
        imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
        id: 8,
        category: 'haircuts',
        title: 'Modern Pompadour',
        description: 'Classic style with contemporary flair',
        imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80'
    },
    {
        id: 9,
        category: 'shop',
        title: 'Premium Tools',
        description: 'Only the finest equipment for precise cuts',
        imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80'
    }
];

/*---------------------------
  Mobile Navigation
---------------------------*/
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/*---------------------------
  Sticky Header
---------------------------*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

/*---------------------------
  Active Navigation Link
---------------------------*/
const sections = document.querySelectorAll('section');

// Highlight the active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

/*---------------------------
  Back to Top Button
---------------------------*/
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*---------------------------
  Gallery Functionality
---------------------------*/
// Populate gallery with items
function populateGallery(items) {
    galleryGrid.innerHTML = '';
    
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        
        galleryItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter gallery items
function filterGallery(category) {
    if (category === 'all') {
        populateGallery(galleryItems);
    } else {
        const filteredItems = galleryItems.filter(item => item.category === category);
        populateGallery(filteredItems);
    }
}

// Initialize gallery
populateGallery(galleryItems);

// Gallery filter buttons functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        
        // Update active button
        filterBtns.forEach(filterBtn => {
            filterBtn.classList.remove('active');
        });
        btn.classList.add('active');
        
        // Filter gallery
        filterGallery(category);
    });
});

/*---------------------------
  Form Submissions
---------------------------*/
// Appointment form submission
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate form
        if (validateForm(appointmentForm)) {
            // In a real scenario, you would send the form data to a server
            // For now, just show a confirmation modal
            confirmationModal.classList.add('active');
            
            // Reset form
            appointmentForm.reset();
        }
    });
}

// Newsletter form submission
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate email
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (validateEmail(emailInput.value)) {
            // Show confirmation (could be a toast notification in a real scenario)
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

/*---------------------------
  Modal Functionality
---------------------------*/
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
        confirmationModal.classList.remove('active');
    }
});

/*---------------------------
  Form Validation
---------------------------*/
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            markInvalid(input, 'This field is required');
            isValid = false;
        } else {
            if (input.type === 'email' && !validateEmail(input.value)) {
                markInvalid(input, 'Please enter a valid email address');
                isValid = false;
            } else {
                markValid(input);
            }
        }
    });
    
    return isValid;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function markInvalid(input, message) {
    input.classList.add('invalid');
    
    // Remove existing error message if any
    const parent = input.parentElement;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    parent.appendChild(errorDiv);
}

function markValid(input) {
    input.classList.remove('invalid');
    
    // Remove error message if exists
    const parent = input.parentElement;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

/*---------------------------
  Animation on Scroll
---------------------------*/
// Detect elements in viewport and add animation classes
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Add animation class to elements
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service-card');
    const aboutValues = document.querySelectorAll('.value');
    
    services.forEach(service => {
        service.classList.add('animate-on-scroll');
    });
    
    aboutValues.forEach(value => {
        value.classList.add('animate-on-scroll');
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

/*---------------------------
  Smooth Scrolling
---------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});
