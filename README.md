# Cash Flow Website

A premium, static corporate website featuring modern, responsive UI design, glassmorphism aesthetics, and dynamic hover animations.

## Software Requirements
- **Web Browser**: Any modern web browser (Google Chrome, Mozilla Firefox, Safari, Edge) to view the website.
- **Python 3** (Optional): If you want to run a local web server for development or testing purposes.

## How to Build
This is a purely static website built with native HTML5 and CSS3. 
**There is no build process required** (no Node.js, Webpack, or compilers needed). The code is ready to run as-is.

## How to Run

### Option 1: Direct File Access (Easiest)
1. Clone or download this repository to your local machine.
2. Open the folder in your file explorer (Finder, Windows Explorer, etc.).
3. Double-click on `index.html`. It will open instantly in your default web browser.

### Option 2: Local Web Server (Recommended for Development)
If you want to test the site via a local server (to avoid any local file protocol CORS restrictions in the browser):
1. Open your terminal and navigate to the root directory of this project.
2. Start a Python HTTP server by running:
   ```bash
   python3 -m http.server 8080
   ```
3. Open your web browser and navigate to: `http://localhost:8080`

## Project Structure
- `index.html`: The main landing page.
- `about.html`: Information about the company and its mission.
- `services.html`: A breakdown of the consulting and development services offered.
- `contact.html`: Contact information and location.
- `privacy-policy.html`: Legal terms and privacy guidelines.
- `assets/css/style.css`: The global stylesheet containing all modern UI variables, layouts, and animations.