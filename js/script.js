// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navMenu.classList.remove('active');
        }
    });
});

// Gallery Lightbox Functionality
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Gallery images with categories and metadata
const galleryImages = [
    { src: 'images/photo1.jpg', alt: 'Fashion Editorial', category: 'editorial', caption: 'High fashion editorial shoot showcasing elegant styling' },
    { src: 'images/photo2.jpg', alt: 'Portrait Session', category: 'beauty', caption: 'Professional beauty portrait with natural lighting' },
    { src: 'images/photo3.jpg', alt: 'Outdoor Fashion', category: 'fashion', caption: 'Outdoor fashion shoot in natural environment' },
    { src: 'images/photo4.jpg', alt: 'Studio Portrait', category: 'beauty', caption: 'Studio beauty shot with professional lighting' },
    { src: 'images/photo5.jpg', alt: 'Runway Style', category: 'fashion', caption: 'Fashion shoot inspired by runway trends' },
    { src: 'images/photo6.jpg', alt: 'Editorial Beauty', category: 'editorial', caption: 'Editorial beauty shot for fashion magazine' }
];

// Gallery categories
const categories = [
    { id: 'all', name: 'All', count: galleryImages.length },
    { id: 'editorial', name: 'Editorial', count: galleryImages.filter(img => img.category === 'editorial').length },
    { id: 'fashion', name: 'Fashion', count: galleryImages.filter(img => img.category === 'fashion').length },
    { id: 'beauty', name: 'Beauty', count: galleryImages.filter(img => img.category === 'beauty').length }
];

// Current filter state
let currentFilter = 'all';

// Load gallery filters
function loadGalleryFilters() {
    const filtersContainer = document.querySelector('.gallery-filters');
    
    categories.forEach(category => {
        const filterBtn = document.createElement('button');
        filterBtn.className = `filter-btn ${category.id === 'all' ? 'active' : ''}`;
        filterBtn.textContent = `${category.name} (${category.count})`;
        filterBtn.dataset.filter = category.id;
        
        filterBtn.addEventListener('click', () => {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
            
            // Filter gallery
            currentFilter = category.id;
            loadGallery();
        });
        
        filtersContainer.appendChild(filterBtn);
    });
}

// Load gallery images with filtering
function loadGallery() {
    galleryGrid.innerHTML = ''; // Clear existing images
    
    const filteredImages = currentFilter === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === currentFilter);
    
    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = image.category;
        
        // Create image with lazy loading
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        
        // Add caption overlay
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.innerHTML = `
            <h4>${image.alt}</h4>
            <p>${image.caption}</p>
        `;
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        
        // Add click handler for lightbox
        galleryItem.addEventListener('click', () => openLightbox(galleryImages.indexOf(image)));
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Open lightbox
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxImg.src = galleryImages[index].src;
    caption.textContent = galleryImages[index].alt;
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add loading animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryFilters();
    loadGallery();
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    // Add lazy class to images that should be lazy loaded
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}