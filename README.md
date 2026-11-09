# fip-assignments-

## Layout Decisions: Flexbox vs. CSS Grid

- **Flexbox**: Used for 1D (one-dimensional) layouts like the navigation bar and footer to align items along a single row or column with clean spacing and alignment.
- **CSS Grid**: Used for 2D (two-dimensional) layouts like the product showcase grid, where control over both rows and columns simultaneously is needed.


## Week 5: Responsive Design Updates
* **Mobile-First Foundation:** Added responsive image constraints (`max-width: 100%`) and touch-friendly targets (minimum 44x44px padding) for better accessibility.
* **Tablet Breakpoint (`min-width: 768px`):** Adjusted the navigation layout to horizontal flexbox and expanded product/feature cards into a 2-column grid.
* **Desktop Breakpoint (`min-width: 1024px`):** Expanded product/feature grids to 3 columns for larger desktop monitors.
* **Testing:** Verified layouts using Chrome DevTools Device Mode across mobile, tablet, and desktop viewports.


# AURA Fashion Website

A modern, responsive e-commerce fashion site developed as part of the Web Development Internship Program.

## Project Features
- **Responsive Layout**: Designed mobile-first with adaptive layouts for tablet (~768px) and desktop (~1024px) devices.
- **Multi-page Structure**: Includes Home (`index.html`), About (`about.html`), and Contact (`contact.html`) pages.
- **Flexbox & CSS Grid**: Styled using Flexbox for navigation and CSS Grid for product item showcases.

## Project Structure
```text
├── index.html       # Main landing page
├── about.html       # Brand about page
├── contact.html     # Contact and inquiry form page
├── index.css        # Central stylesheet with media queries
├── .gitignore       # System ignore list
