.PHONY: build clean install help

# Default target
help:
	@echo "Available targets:"
	@echo "  build    - Build the site for GitHub Pages (outputs to 'out' directory)"
	@echo "  clean    - Remove build artifacts and dependencies"
	@echo "  install  - Install npm dependencies"
	@echo "  help     - Show this help message"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Build target for GitHub Pages
build: install
	@echo "Building site for GitHub Pages..."
	npm run build
	@echo ""
	@echo "Build complete! Static files are in the 'out' directory."
	@echo "To deploy to GitHub Pages:"
	@echo "  1. Copy the contents of the 'out' directory to your gh-pages branch"
	@echo "  2. Or configure GitHub Pages to use the 'out' directory from your main branch"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf .next
	rm -rf out
	rm -rf node_modules
	@echo "Clean complete!"

