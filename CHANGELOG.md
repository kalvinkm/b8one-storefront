# Changelog

## [Unreleased]

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
