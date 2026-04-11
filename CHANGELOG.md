# Changelog

## [Unreleased]

## [0.6.0] - 2026-04-11

### Added
- NewsletterSection component
- Newsletter form with name and email inputs
- Success modal for fake submission
- Animated success feedback icon

### Changed
- Added form validation for required fields
- Improved user feedback with error message and input highlighting

### Fixed
- Reset form fields after modal close

## [0.5.0] - 2026-04-10

### Added
- ProductCarouselSection component
- Horizontal product carousel with arrow navigation
- Pagination indicators (dots)
- Smooth transition using translateX

### Changed
- Implemented responsive carousel behavior (1 item on mobile, 4 on desktop)
- Improved mobile UX with precise slide calculation using element width
- Adjusted layout to prevent overflow and ensure consistent card sizing
- Enhanced title handling with line clamp to avoid layout shifts

### Fixed
- Resolved mobile layout inconsistencies across multiple viewport sizes (360px, 375px, 390px, 412px, 428px)
- Fixed card overflow and clipping issues in mobile carousel
- Corrected spacing and sizing behavior to ensure consistent rendering
- Improved transition smoothness on mobile devices

## [0.4.0] - 2026-04-10

### Added
- Integration with external products API (EscuelaJS)
- Randomized product selection on each page reload
- Skeleton loading state for products section
- ApiProduct type for API response typing

### Changed
- Replaced static mock rendering with dynamic API data
- Improved data validation to ensure minimum product count
- Added fallback to local mock data when API fails or returns insufficient items
- Enhanced error handling for API requests
- Improved type safety by removing usage of `any`

## [0.3.0] - 2026-04-09

### Added
- Reusable ProductCard component
- Product type definition for shared data structure
- Integration of product data from JSON file

### Changed
- Refactored ProductsSection to use ProductCard component
- Replaced static mock with dynamic product rendering
- Improved accessibility (alt text and aria-label on button)
- Enhanced product card UI and styling

## [0.2.0] - 2026-04-08

### Added
- Products section with responsive grid layout
- Mock product cards for layout visualization

### Changed
- Improved banner button interaction and UI
- Replaced default favicon with custom shopping cart icon

## [0.1.1] - 2026-04-08

### Added
- Responsive banner component
- Base structure for /offers page

### Changed
- Banner UI improvements (button, typography and spacing)

## [0.1.0] - 2026-04-07

### Added
- Initial project setup with Vite + React + TypeScript
- ESLint and Prettier configuration
- Base project structure following Clean Architecture principles
