# Game Changerz Youth Soccer Coaching Landing Page

A modern, high-conversion React landing page for Game Changerz, a youth soccer coaching program targeting players aged 10-15.

## 🚀 Features

- **Modern Design**: Clean, youthful, and premium design following the specified brand identity
- **Responsive**: Mobile-first responsive design that works on all devices
- **Animations**: Smooth Framer Motion animations for scroll-triggered effects and hover states
- **Calendly Integration**: Seamless booking system integration
- **Form Validation**: Comprehensive contact form with client-side validation
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🎨 Brand Identity

- **Primary Color**: Sky Blue (#4FC3F7) - 60% usage
- **Background**: Clean White (#FFFFFF) - 25% usage
- **Secondary**: Fresh Green (#4CAF50) - 10% usage
- **Accent**: Sunshine Yellow (#FFD54F) - 5% usage
- **Text**: Soft Charcoal (#2E2E2E)

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons
- **Vite** for build tooling

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header with logo and menu
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Values.tsx           # Three-column values section
│   ├── TestimonialMarquee.tsx # Infinite scroll testimonials
│   ├── HowItWorks.tsx       # Four-step process section
│   └── SessionCard.tsx      # Reusable session booking card
├── pages/
│   ├── Home.tsx             # Home page combining all sections
│   ├── Sessions.tsx         # Session selection page
│   ├── Pricing.tsx          # Pricing information page
│   └── Contact.tsx          # Contact form page
├── App.tsx                  # Main app component with routing
├── main.tsx                 # App entry point
└── style.css               # Global styles and Tailwind imports
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📱 Pages & Features

### Home Page
- Hero section with compelling headline and CTA
- Values section explaining the coaching approach
- Infinite-scrolling testimonial marquee
- How It Works step-by-step process

### Sessions Page
- 7v7 Specialists (available for booking)
- 9v9 Mastery (coming soon)
- 11v11 Elite (coming soon)
- Direct Calendly integration for booking

### Pricing Page
- Clear $25 per session pricing
- Private training inquiry section
- Link to contact page

### Contact Page
- Comprehensive contact form with validation
- Parent and player information collection
- Age group selection (10-11, 12-13, 14-15)
- Mailto integration for form submission

## 🔧 Configuration

### Calendly Integration
The app includes Calendly widget integration. The booking URL is configured to:
```
https://calendly.com/spikeballclubrb/soccer-training-session?hide_gdpr_banner=1
```

To change the Calendly URL, update the `handleCalendlyClick` functions in:
- `Header.tsx`
- `Hero.tsx`
- `SessionCard.tsx`

### Contact Form
Currently uses `mailto:` for form submission. For production, consider:
- EmailJS for client-side email sending
- Formspree for simple form handling
- Custom backend API for secure processing

## 🎯 Performance & Security

- **Optimized Bundle**: Tree-shaken dependencies and efficient imports
- **No Sensitive Data**: All configuration is client-safe
- **Form Validation**: Client-side validation with user-friendly error messages
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **SEO**: Meta tags, structured content, clean URLs

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (single column, stacked layout)
- **Tablet**: 640px - 1024px (2 columns where appropriate)
- **Desktop**: > 1024px (full layout)

## 🎨 Animation Details

- **Scroll Animations**: Fade in + slide up on viewport entry
- **Hover Effects**: Scale and shadow transitions on interactive elements
- **Stagger Effects**: Sequential animations for multi-item sections
- **Performance**: Optimized with `once: true` viewport triggers

## 🔍 Testing Checklist

- [x] All navigation links work correctly
- [x] Calendly popup opens and closes properly
- [x] Contact form validates and submits
- [x] All animations are smooth (60fps)
- [x] Responsive on mobile, tablet, desktop
- [x] Testimonial marquee loops seamlessly
- [x] Hover states work on all interactive elements
- [x] "Coming Soon" overlays prevent clicks
- [x] Accessibility: keyboard navigation works
- [x] No console errors or warnings

## 🤝 Contributing

This is a complete, production-ready landing page. For modifications:

1. Follow the established component structure
2. Maintain the brand color palette and design system
3. Test responsiveness across all breakpoints
4. Ensure animations enhance rather than distract

## 📄 License

Built for Game Changers Youth Soccer Coaching program.