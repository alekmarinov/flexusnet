You are tasked with building a modern, professional presentation website for Flexus Net, an IT MSP (Managed Service Provider) which operates as a two-sided marketplace connecting customers needing IT and office technology services with qualified technicians.

BUSINESS CONTEXT:
Flexus Net is an IT MSP which operates as a two-sided marketplace:
- Customers submit technical job requests for:
  * Laptop/Desktop & Office Installations
  * Network Installations
  * POS Systems Installations
- The platform matches requests with verified technicians
- Technicians complete jobs and the platform tracks completion and customer satisfaction

WEBSITE REQUIREMENTS:

1. HOMEPAGE
   - Hero section: CAROUSEL OF SERVICE ADVERTISEMENTS (CRITICAL REQUIREMENT)
     * The hero section must be a carousel/slider displaying advertisements for each of the three main services
     * Each carousel slide should feature one service with:
       - Service name as headline
       - Service description
       - Compelling visual/graphic (IT/technology themed)
       - Clickable CTA button that links to the Request Form (#for-customers section)
     * Carousel slides:
       1. Laptop/Desktop & Office
          - Description: "Professional installation and setup services"
          - Image: Use carusel_laptops_1.png
          - CTA: Links to Request Form
       2. Network Installations
          - Description: "Complete network infrastructure setup"
          - Image: Use carusel_networks_1.png
          - CTA: Links to Request Form
       3. POS Systems
          - Description: "Point of sale installation and configuration"
          - Image: Use carusel_pos_1.png
          - CTA: Links to Request Form
     * Carousel features:
       - Auto-rotate with smooth transitions
       - Manual navigation controls (previous/next arrows, dot indicators)
       - Pause on hover
       - Responsive design (mobile-friendly)
       - Each slide should be fully clickable or have prominent CTA button
   - CONTACT INFORMATION - HIGHLY VISIBLE (CRITICAL REQUIREMENT):
     * Email address (service@flexusnet.com) - prominently displayed in header or hero section (large font, easy to read)
     * Phone number (4703003369) - prominently displayed in header or hero section (large font, easy to read, clickable for mobile)
     * Should be immediately visible without scrolling
     * Use email and phone icons for visual clarity
     * Consider placing in sticky header or prominent hero area
   - Key feature highlighting:  100% nationwide service coverage - 50 States
   - Use logo.png for the logo/branding
   - Modern, clean design with professional color scheme

2. FOR CUSTOMERS SECTION
   - Service request form with fields:
     * Location/address input
     * Job description/requirements (textarea)
     * Preferred date/time
     * Contact information (name, phone, email)
   - This section should be accessible via anchor link (#for-customers) from the hero carousel CTAs
   - Service categories showcase with generated icons:
     * Laptop/Desktop & Office Installations icon
     * Network Installations icon
     * POS Systems Installations icon
   - Benefits section: Quick response times, Competitive pricing, Satisfaction guarantee
   - Form validation and user-friendly error messages
   - Form submission should send emails using SiteGround hosting capabilities (PHP mail or SMTP)

3. ABOUT US PAGE
   - Company Mission & Vision: What Flexus Net stands for, goals and values
   - Why Choose Flexus Net: Unique value proposition, competitive advantages, commitment to quality

4. RECOMMENDATIONS SECTION
   - Display recommendations from recomendations.json file
   - Each recommendation should include:
     * Name of the recommender
     * Recommendation text
     * Photo (use recommendation1.webp and recommendation2.webp as specified in the JSON)
   - Visual layout with cards showing name, photo, and testimonial text

5. CONTACT SECTION
   - Contact information displayed in a highly visible place:
     * Email address
     * Phone number
     * Business hours
   - Support Resources:
     * Help center link
     * Live chat (optional)
     * Social media links
   - Contact information should be prominently displayed, not hidden in a form

TECHNICAL SPECIFICATIONS:
- Build using React/Next.js or Vue.js for modern, component-based architecture
- Use Tailwind CSS or similar utility-first CSS framework
- Fully responsive design (mobile-first approach)
- Implement form validation and error handling
- Form submission: Configure to send emails using SiteGround hosting capabilities (PHP mail function or SMTP)
- Optimize for performance: lazy loading, image optimization, fast load times
- Ensure accessibility (WCAG 2.1 AA compliance)
- SEO-friendly: proper meta tags, semantic HTML, structured data

DESIGN GUIDELINES:
- Color scheme: Professional blues and greens (trust, reliability) with accent colors for CTAs
- Typography: Clean, readable sans-serif font (Inter, Roboto, or similar)
- Spacing: Generous whitespace, clear visual hierarchy
- Icons: Consistent icon set (Heroicons, Font Awesome, or similar) - generate service category icons
- Logo: Use logo.png provided in the project
- Images: Use carousel images (carusel_laptops_1.png, carusel_networks_1.png, carusel_pos_1.png) for the hero carousel, use recommendation photos from JSON
- Animations: Subtle, professional animations on scroll/interaction

CONTENT TONE:
- Professional yet approachable
- Clear and concise
- Customer-focused
- Trust-building
- Action-oriented

ADDITIONAL FEATURES:
- Mobile-responsive navigation (hamburger menu)
- Smooth scrolling and transitions
- Loading states for forms
- Success/error messages for form submissions
- Footer with links to Privacy Policy, Terms of Service, etc.

Please create a fully functional, production-ready website with all the above features. Use placeholder content where specific details aren't provided, but ensure the structure and functionality are complete. Include proper error handling, form validation, and a polished user experience. Make sure to integrate the recommendations.json file to display testimonials dynamically.
