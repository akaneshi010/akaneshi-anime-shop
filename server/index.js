import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config, initDatabase, pool } from './config.js';
import { sampleProducts, blogPosts, testimonials, searchTrends } from './data.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests. Please slow down.' }
});

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(limiter);

app.use('/assets', express.static(path.join(rootDir, 'assets')));
app.use('/admin', express.static(path.join(rootDir, 'admin')));
app.use(express.static(rootDir));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: config.nodeEnv, db: !!pool, timestamp: new Date().toISOString() });
});

app.get('/api/products', (_req, res) => {
  res.json({ products: sampleProducts, total: sampleProducts.length });
});

app.get('/api/products/:slug', (req, res) => {
  const product = sampleProducts.find((item) => item.slug === req.params.slug);
  if (!product) return res.status(404).json({ message: 'Product not found.' });
  res.json({ product, related: sampleProducts.filter((item) => item.category === product.category).slice(0, 3) });
});

app.get('/api/blog', (_req, res) => {
  res.json({ posts: blogPosts, total: blogPosts.length });
});

app.get('/api/trends', (_req, res) => {
  res.json({ trends: searchTrends });
});

app.get('/api/testimonials', (_req, res) => {
  res.json({ testimonials });
});

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required.' });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  return res.status(201).json({
    message: 'User registered successfully.',
    user: { name, email, passwordHash },
    token: jwt.sign({ email, name }, config.jwtSecret, { expiresIn: '7d' })
  });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = { email, name: 'AKANESHI Customer', passwordHash: await bcrypt.hash('demo-password', 12) };
  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  return res.json({
    message: 'Login successful.',
    user: { name: user.name, email: user.email },
    token: jwt.sign({ email: user.email, name: user.name }, config.jwtSecret, { expiresIn: '7d' })
  });
});

app.post('/api/coupons/validate', (req, res) => {
  const { code } = req.body || {};

  const validCoupons = {
    AKANESHI10: { type: 'percent', value: 10 },
    AKANESHI15: { type: 'percent', value: 15 },
    FREEDEL: { type: 'fixed', value: 199 }
  };

  if (!code || !validCoupons[code.toUpperCase()]) {
    return res.status(400).json({ valid: false, message: 'Coupon is not valid.' });
  }

  return res.json({ valid: true, coupon: validCoupons[code.toUpperCase()] });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide your name, email, and message.' });
  }

  return res.status(201).json({ message: 'Your message has been received. We will get back to you soon.' });
});

app.post('/api/orders', (req, res) => {
  const { items = [], customer = {} } = req.body || {};

  if (!Array.isArray(items) || !items.length) {
    return res.status(400).json({ message: 'Order items are required.' });
  }

  const subtotal = items.reduce((sum, item) => sum + (Number(item.price || 0) * Number(item.qty || 1)), 0);
  const shipping = subtotal >= 3999 ? 0 : 199;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return res.status(201).json({
    success: true,
    order: {
      id: `AK-${Date.now()}`,
      number: `AK-${Math.floor(Math.random() * 900000 + 100000)}`,
      customer,
      subtotal,
      shipping,
      tax,
      total,
      status: 'pending_payment'
    }
  });
});

app.post('/api/payments/create', (req, res) => {
  const { amount, currency = 'INR', orderId } = req.body || {};

  if (!amount || !orderId) {
    return res.status(400).json({ message: 'Amount and orderId are required.' });
  }

  return res.json({
    success: true,
    payment: {
      id: `pay_${Date.now()}`,
      order_id: orderId,
      amount,
      currency,
      status: 'created',
      mode: config.nodeEnv === 'production' ? 'live' : 'test'
    }
  });
});

app.post('/api/payments/verify', (req, res) => {
  const { payment_id, order_id, signature } = req.body || {};

  if (!payment_id || !order_id || !signature) {
    return res.status(400).json({ message: 'Payment verification requires payment_id, order_id, and signature.' });
  }

  return res.json({
    success: true,
    verified: true,
    paymentStatus: 'paid',
    orderStatus: 'confirmed'
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, '404.html'));
});

async function start() {
  try {
    await initDatabase();
    app.listen(config.port, () => {
      console.log(`AKANESHI server is running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

start();
