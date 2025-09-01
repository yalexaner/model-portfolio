# Teen Model Portfolio Website

A modern, responsive portfolio website for a teen model featuring a minimalist design with pastel colors.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, minimalist design with pastel color palette
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: CSS animations and transitions
- **SEO Optimized**: Meta tags and semantic HTML structure

## File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Photo directory
│   ├── profile.jpg     # Profile photo
│   ├── photo1.jpg      # Gallery photos
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
└── README.md          # This file
```

## Setup Instructions

1. **Replace Placeholder Images**:
   - Add your actual photos to the `images/` folder
   - Replace `profile.jpg` with the model's profile photo
   - Replace `photo1.jpg` through `photo6.jpg` with portfolio photos
   - Recommended image sizes: 800x600px for gallery, 400x400px for profile

2. **Customize Content**:
   - Edit the bio text in `index.html` (About section)
   - Update statistics in the About section
   - Add real social media links in the Contact section
   - Modify contact form action if needed

3. **Update Social Links**:
   - Replace placeholder links in the Contact section with actual social media URLs

4. **Deploy**:
   - Upload all files to your web hosting service
   - Ensure the `css/`, `js/`, and `images/` folders are uploaded

## Customization

### Colors
The color scheme uses:
- Primary: `#8b5cf6` (Purple)
- Background: `#fafafa` (Light gray)
- Text: `#333` (Dark gray)

To change colors, edit the CSS variables in `css/style.css`.

### Fonts
Uses Google Fonts 'Poppins'. To change fonts, update the link in `index.html` and font-family in `css/style.css`.

### Gallery
To add more photos:
1. Add image files to `images/` folder
2. Update the `galleryImages` array in `js/script.js`

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- Semantic HTML for better SEO
- Mobile-first responsive design

## Contact

For questions or customization requests, use the contact form on the website.