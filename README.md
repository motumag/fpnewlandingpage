# FastPay LLC - Landing Page

A modern, responsive landing page for FastPay LLC, a licensed FinTech Money Services Business specializing in cross-border remittance services between the United States and Ethiopia.

## Features

- 🎨 **Modern & Professional Design** - Beautiful UI with smooth animations using Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with React + Vite for lightning-fast loading
- 🎭 **Smooth Animations** - Engaging user experience with Framer Motion animations
- 🎯 **Multiple Pages** - Home, Services, Features, About Us, Contact, FAQs, Donations, Login
- 🔒 **Security Focused** - Highlighting compliance and regulatory information
- 🌈 **Tailwind CSS** - Modern utility-first CSS framework for styling

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Popular icon library

## Pages & Sections

### Home Page

- Hero section with call-to-action
- Statistics showcase
- Services overview
- Features & technology
- Compliance badges
- Call-to-action section

### About Us

- Company mission & vision
- Core values
- Company timeline
- Licensing & compliance information
- Technology platform details

### Services

Highlighted on home page with detailed cards:

- Mobile money transfer
- Bank network access
- Agent services
- Real-time processing
- Security features

### Features

Technology and compliance features:

- Cloud infrastructure
- API integration
- KYC/AML compliance
- Data security

### Contact Us

- Contact information cards
- Contact form
- Office location
- Support options

### FAQs

- Searchable FAQ system
- Categorized questions
- Expandable answers
- Quick links

### Donations

- Multiple cause selection
- Donation form
- Impact statistics
- Transparency information

### Login

- Login/Signup toggle
- Social authentication options
- Form validation
- Security features

## Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd /Users/motumagishu/Documents/mine/fastpay/webapps/landingPage
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
landingPage/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ContactUs.jsx
│   │   ├── FAQs.jsx
│   │   ├── Donations.jsx
│   │   └── Login.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ }
}
```

### Content

Update content in individual page components located in `src/pages/`

### Styling

- Global styles: `src/index.css`
- Component styles: Use Tailwind utility classes
- Custom animations: Defined in `tailwind.config.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Hosting

The built files in `dist/` can be deployed to any static hosting service:

- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License & Compliance

FastPay LLC is a licensed Money Services Business:

- **Maryland Incorporation**: Department ID W22452742
- **NMLS ID**: 2327896
- **FinCEN MSB Registration**: 31000249115048
- **National Bank of Ethiopia**: Approved

## Support

For questions or issues:

- Email: info@fastpay.com
- Visit: [Contact Us](/contact) page

## Version

Current Version: 1.0.0

---

Built with ❤️ by FastPay LLC

