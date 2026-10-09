import dotenv from 'dotenv';
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  port: Number(process.env.PORT || 3000),
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || '',
  jwtSecret: process.env.JWT_SECRET || 'dev-jwt-secret',
  adminUsername: process.env.ADMIN_USERNAME || 'SET_YOUR_ADMIN_USERNAME',
  adminPassword: process.env.ADMIN_PASSWORD || 'SET_A_STRONG_UNIQUE_ADMIN_PASSWORD',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@akaneshi.local',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000'
};

export const pool = config.databaseUrl ? new Pool({ connectionString: config.databaseUrl }) : null;

export async function initDatabase() {
  if (!pool) {
    console.warn('No DATABASE_URL configured; running in demo mode.');
    return false;
  }

  const schemaFile = path.join(__dirname, '..', 'database', 'schema.sql');
  const schemaSql = fs.readFileSync(schemaFile, 'utf8');

  try {
    await pool.query(schemaSql);
    console.log('Database initialized successfully.');
    return true;
  } catch (error) {
    console.error('Database initialization failed:', error.message);
    return false;
  }
}
