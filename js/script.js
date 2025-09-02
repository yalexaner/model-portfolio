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
    // Folder 1 - one
    { src: 'images/1/1.JPG', alt: 'Model Portrait One', category: 'one', caption: 'Professional modeling portrait from first session' },
    { src: 'images/1/2.JPG', alt: 'Model Portrait Two', category: 'one', caption: 'Creative portrait work showcasing natural beauty' },

    // Folder 2 - two
    { src: 'images/2/3.JPG', alt: 'Fashion Session One', category: 'two', caption: 'Fashion photography with elegant styling' },
    { src: 'images/2/4.JPG', alt: 'Fashion Session Two', category: 'two', caption: 'Contemporary fashion shoot in studio setting' },
    { src: 'images/2/5.JPG', alt: 'Fashion Session Three', category: 'two', caption: 'Dynamic fashion poses with professional lighting' },

    // Folder 3 - three
    { src: 'images/3/6.JPG', alt: 'Editorial Shoot One', category: 'three', caption: 'Editorial photography with artistic composition' },
    { src: 'images/3/7.JPG', alt: 'Editorial Shoot Two', category: 'three', caption: 'High-fashion editorial with dramatic lighting' },
    { src: 'images/3/8.JPG', alt: 'Editorial Shoot Three', category: 'three', caption: 'Creative editorial work for fashion magazine' },
    { src: 'images/3/9.JPG', alt: 'Editorial Shoot Four', category: 'three', caption: 'Artistic portrait with fashion elements' },
    { src: 'images/3/10.JPG', alt: 'Editorial Shoot Five', category: 'three', caption: 'Editorial beauty shot with professional styling' },

    // Folder 4 - four
    { src: 'images/4/11.JPG', alt: 'Studio Session One', category: 'four', caption: 'Studio photography with controlled lighting' },
    { src: 'images/4/12.JPG', alt: 'Studio Session Two', category: 'four', caption: 'Professional studio portrait work' },

    // Folder 5 - five
    { src: 'images/5/13.JPG', alt: 'Outdoor Photography One', category: 'five', caption: 'Natural light photography in outdoor setting' },
    { src: 'images/5/14.JPG', alt: 'Outdoor Photography Two', category: 'five', caption: 'Location shoot with environmental elements' },
    { src: 'images/5/15.JPG', alt: 'Outdoor Photography Three', category: 'five', caption: 'Outdoor fashion photography with natural backdrop' },
    { src: 'images/5/16.JPG', alt: 'Outdoor Photography Four', category: 'five', caption: 'Environmental portrait in scenic location' },
    { src: 'images/5/17.JPG', alt: 'Outdoor Photography Five', category: 'five', caption: 'Natural light beauty photography' },
    { src: 'images/5/18.JPG', alt: 'Outdoor Photography Six', category: 'five', caption: 'Outdoor session with dynamic composition' },

    // Folder 6 - six
    { src: 'images/6/19.PNG', alt: 'Creative Session One', category: 'six', caption: 'Creative photography with artistic vision' },
    { src: 'images/6/20.PNG', alt: 'Creative Session Two', category: 'six', caption: 'Experimental photography techniques' },
    { src: 'images/6/21.PNG', alt: 'Creative Session Three', category: 'six', caption: 'Artistic portrait with creative lighting' },
    { src: 'images/6/22.PNG', alt: 'Creative Session Four', category: 'six', caption: 'Innovative fashion photography' },
    { src: 'images/6/23.JPG', alt: 'Creative Session Five', category: 'six', caption: 'Creative beauty photography' },
    { src: 'images/6/24.JPG', alt: 'Creative Session Six', category: 'six', caption: 'Artistic composition with model' },

    // Folder 7 - seven
    { src: 'images/7/25.PNG', alt: 'Portfolio Session One', category: 'seven', caption: 'Professional portfolio photography' },
    { src: 'images/7/26.PNG', alt: 'Portfolio Session Two', category: 'seven', caption: 'Headshot and portrait work' },
    { src: 'images/7/27.PNG', alt: 'Portfolio Session Three', category: 'seven', caption: 'Commercial photography for portfolio' },
    { src: 'images/7/28.PNG', alt: 'Portfolio Session Four', category: 'seven', caption: 'Professional modeling portfolio' },
    { src: 'images/7/29.JPG', alt: 'Portfolio Session Five', category: 'seven', caption: 'Portfolio beauty shot' },
    { src: 'images/7/30.JPG', alt: 'Portfolio Session Six', category: 'seven', caption: 'Professional portfolio image' },
    { src: 'images/7/31.JPG', alt: 'Portfolio Session Seven', category: 'seven', caption: 'Portfolio fashion photography' },
    { src: 'images/7/32.JPG', alt: 'Portfolio Session Eight', category: 'seven', caption: 'Commercial portfolio work' },
    { src: 'images/7/33.JPG', alt: 'Portfolio Session Nine', category: 'seven', caption: 'Professional portfolio session' }
];

// Gallery categories
const categories = [
    { id: 'all', name: 'All', count: galleryImages.length },
    { id: 'one', name: 'One', count: galleryImages.filter(img => img.category === 'one').length },
    { id: 'two', name: 'Two', count: galleryImages.filter(img => img.category === 'two').length },
    { id: 'three', name: 'Three', count: galleryImages.filter(img => img.category === 'three').length },
    { id: 'four', name: 'Four', count: galleryImages.filter(img => img.category === 'four').length },
    { id: 'five', name: 'Five', count: galleryImages.filter(img => img.category === 'five').length },
    { id: 'six', name: 'Six', count: galleryImages.filter(img => img.category === 'six').length },
    { id: 'seven', name: 'Seven', count: galleryImages.filter(img => img.category === 'seven').length }
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

// Contact functionality - Tap to copy
document.addEventListener('DOMContentLoaded', () => {
    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const contactValue = button.closest('.contact-value');
            const textToCopy = contactValue.dataset.copy;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback
                contactValue.classList.add('copy-success');
                button.textContent = '✓';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    contactValue.classList.remove('copy-success');
                    button.textContent = '📋';
                }, 2000);
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Visual feedback
                contactValue.classList.add('copy-success');
                button.textContent = '✓';
                
                setTimeout(() => {
                    contactValue.classList.remove('copy-success');
                    button.textContent = '📋';
                }, 2000);
            }
        });
    });
    
});