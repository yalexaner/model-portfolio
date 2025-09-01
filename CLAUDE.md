# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, responsive portfolio website for a teen model built with vanilla HTML, CSS, and JavaScript. The site features a minimalist design with a gray/neutral color palette and includes a hero section, about section, photo gallery with lightbox functionality, and contact section.

## Architecture

### Core Structure
- **Frontend Only**: Pure HTML/CSS/JavaScript with no build process or frameworks
- **Single Page Application**: All content in `index.html` with smooth scrolling navigation
- **Component-based CSS**: Organized by sections (hero, about, gallery, contact)
- **Mobile-first Design**: Responsive layout with hamburger navigation

### Key Files
- `index.html`: Main HTML structure with semantic sections
- `css/style.css`: All styles including responsive design (uses Playfair Display + Nunito fonts)
- `js/script.js`: Interactive functionality (navigation, gallery, lightbox, animations)
- `images/`: Photo assets including hero background (`IMG_7483.JPG`) and gallery images

### JavaScript Architecture
- **Gallery System**: Dynamic loading of images from `galleryImages` array in `script.js`
- **Lightbox**: Modal system for full-size image viewing
- **Navigation**: Mobile hamburger menu and smooth scrolling
- **Animations**: Intersection Observer for scroll-triggered animations
- **Performance**: Lazy loading for images and intersection observers

## Key Features

### Gallery Management
- Images are defined in `galleryImages` array in `js/script.js:33-40`
- To add/modify gallery images: Update the array and add corresponding image files to `images/`
- Lightbox automatically handles keyboard navigation (ESC to close)

### Responsive Design
- Breakpoints: 768px (tablet) and 480px (mobile)
- Mobile navigation uses hamburger menu with slide-down effect
- Hero text and button layouts adapt for mobile

### Color Scheme
- Primary text: `#2c2c2c` (dark gray)
- Background: `#f5f5f5` (light gray) 
- Accent: `#606060` (medium gray)
- Navigation uses gray gradients and backdrop blur

## Development Workflow

### Testing Changes
- Open `index.html` directly in browser (no build process required)
- Use browser dev tools for responsive testing
- Test mobile navigation and lightbox functionality

### Common Tasks
- **Update gallery**: Modify `galleryImages` array in `script.js` and add images to `images/`
- **Change colors**: Update color values in `css/style.css` (search for hex colors)
- **Update content**: Edit text directly in `index.html`
- **Add animations**: Use existing Intersection Observer pattern in `script.js`

### Current Development Status
The project has a todo.md file tracking ongoing restructuring work, currently focused on:
- Hero section redesign (completed)
- Stats/highlights section (planned)  
- Gallery enhancements (planned)
- About section restructure (planned)

## File Modification Guidelines

### Adding Images
1. Add image files to `images/` directory
2. Update `galleryImages` array in `script.js` if adding to gallery
3. Reference with relative path: `images/filename.jpg`

### CSS Changes
- Follow existing BEM-like naming conventions
- Maintain mobile-first responsive design patterns
- Use existing CSS custom properties for consistency

### JavaScript Changes
- Maintain vanilla JavaScript (no frameworks)
- Follow existing patterns for event listeners and DOM manipulation
- Preserve accessibility features (keyboard navigation, proper ARIA labels)