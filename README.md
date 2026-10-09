# AKANESHI e-commerce and portfolio website

AKANESHI is a premium anime-inspired streetwear and collectibles storefront built with Node.js, Express, PostgreSQL-ready schema, and a responsive front-end experience.

## Features

- Premium anime-themed storefront and portfolio home page
- Responsive navigation and mobile hamburger menu
- Product shop, collections, blog, contact, and account pages
- Secure server-side API layer for carts, orders, auth, and payment verification
- PostgreSQL schema and demo-mode fallbacks for local dev
- Razorpay-ready payment integration with server verification
- Admin initialization instructions and environment-based configuration

## Stack

- Frontend: HTML, CSS, vanilla JavaScript
- Backend: Node.js, Express
- Database: PostgreSQL (with demo-mode fallback)
- Security: Helmet, rate limiting, JWT-ready auth, bcrypt password hashing

## Project structure

- `index.html` — storefront home page
- `shop.html` — product grid and filtering
- `product.html` — product detail page
- `cart.html` — shopping cart
- `checkout.html` — secure checkout
- `login.html` — customer login
- `register.html` — new account creation
- `account.html` — customer account dashboard
- `blog.html` — blog listing
- `contact.html` — contact form
- `admin/` — admin login and dashboard shell
- `assets/` — static media and images
- `server/` — API, config, and database bootstrap files
- `database/schema.sql` — PostgreSQL schema

## Local installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment file and update values:

   ```bash
   cp .env.example .env
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

4. Open the site in a browser:

   ```text
   http://localhost:3000/
   ```

## Database setup

If you want the full PostgreSQL-backed system, create a database and set `DATABASE_URL` in `.env`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/akaneshi
```

Then initialize schema:

```bash
npm run db:init
```

If `DATABASE_URL` is not configured, the app runs in a local demo mode with sample product and blog data so the storefront still works.

## First admin setup

Set the following placeholders in `.env` before first login:

```env
ADMIN_USERNAME=SET_YOUR_ADMIN_USERNAME
ADMIN_PASSWORD=SET_A_STRONG_UNIQUE_ADMIN_PASSWORD
ADMIN_EMAIL=admin@akaneshi.local
```

Then log in at `/admin/` and change the password on first access. This initial admin is protected by server-side authorization rules.

## Payment gateway configuration

AKANESHI is prepared for Razorpay-based checkout.

1. Create a Razorpay merchant account and set production credentials when approved.
2. Enter the key ID and secret in `.env`:

```env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

3. Use test credentials during development and only switch to live credentials after merchant approval.

Do not store payment secrets in the frontend; all verification must happen on the server.

## Adding products and posts

Use the admin dashboard once authenticated to:

- add and edit products
- manage categories
- upload images
- publish blog posts
- update coupons and banners

## Testing

Recommended checks:

- customer registration and login
- adding items to the cart and wishlist
- applying coupon validation
- checkout flow and payment verification
- admin product creation and order review

## Deployment

For production, deploy to a secure host with SSL enabled and configure:

- HTTPS domain
- `BASE_URL` pointing to the production URL
- strong environment secrets
- PostgreSQL database service
- load balancer or reverse proxy if needed

## Contact details used by the site

- Email: `akaneshi010@gmail.com`
- Mobile: `9828491235`
- Instagram: `https://www.instagram.com/_akane__shi?srtk=b3NudWpsZGQ0azdk`

## Notes

- All payment, customer, and order workflows must be verified server-side.
- All admin credentials are intentionally left as environment placeholders.
- Replace any placeholder media in `assets/` with the actual production files.
