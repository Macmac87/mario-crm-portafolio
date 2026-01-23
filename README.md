# Mario's CRM Portfolio - Website

Professional portfolio website showcasing 3 vertical CRM systems.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Render
- **Language:** TypeScript

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deploy to Render

### Option 1: Connect GitHub Repository

1. Push this code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** marios-crm-portfolio
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free (or upgrade as needed)
6. Click "Create Web Service"
7. Render will automatically deploy

### Option 2: Deploy from CLI

```bash
# Install Render CLI
npm install -g render-cli

# Login
render login

# Deploy
render deploy
```

### Environment Variables

No environment variables required for basic deployment.

## Project Structure

```
marios-crm-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── products/
│   │   │   └── page.tsx         # Products grid
│   │   ├── real-estate-crm/
│   │   │   └── page.tsx         # InmoLevel CRM detail
│   │   ├── remittances-crm/
│   │   │   └── page.tsx         # RAGFIN1 CRM detail
│   │   ├── global-trade-crm/
│   │   │   └── page.tsx         # GlobalTrade CRM detail
│   │   └── contact/
│   │       └── page.tsx         # Contact form
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       └── Footer.tsx           # Footer
├── public/                      # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Pages

- **/** - Home (hero, products preview, features, CTA)
- **/products** - Products grid with all 3 CRMs
- **/real-estate-crm** - InmoLevel CRM details
- **/remittances-crm** - RAGFIN1 CRM details
- **/global-trade-crm** - GlobalTrade CRM details
- **/contact** - Contact form

## Design System

- **Colors:** Slate (neutral palette)
- **Font:** Inter (system fallback)
- **Style:** Minimalist, B2B/fintech aesthetic
- **Responsive:** Mobile-first design

## Performance

- Static generation where possible
- Optimized fonts (next/font)
- Minimal JavaScript
- Fast page loads

## Customization

### Update CRM Content

Edit the respective page files in `src/app/`:
- `real-estate-crm/page.tsx`
- `remittances-crm/page.tsx`
- `global-trade-crm/page.tsx`

### Change Contact Email

Update in `src/app/contact/page.tsx`:
```tsx
<a href="mailto:your-email@domain.com">
```

### Modify Navigation

Edit `src/components/Navbar.tsx`

### Update Footer

Edit `src/components/Footer.tsx`

## Production Checklist

- [ ] Update contact email in contact page
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Check all pages load correctly
- [ ] Test form submission (or connect to email service)
- [ ] Update metadata in layout.tsx
- [ ] Add custom domain (if applicable)

## Troubleshooting

### Build fails on Render

- Check Node version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Port issues

- Render automatically assigns port via $PORT env variable
- Start command handles this: `next start -p ${PORT:-3000}`

### Styling not loading

- Ensure Tailwind is properly configured
- Check that globals.css is imported in layout.tsx
- Verify postcss.config.js exists

## Support

For issues or questions:
- Email: contact@marioscrmportfolio.com
- GitHub: [repository URL]

## License

© 2026 MGA Mario Cardozo. All rights reserved.
