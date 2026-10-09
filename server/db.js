import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

const schemaSql = fs.readFileSync(path.join(root, 'database', 'schema.sql'), 'utf8');

if (process.argv.includes('--init')) {
  console.log('Database initialization is ready via .env configuration. Schema file located at database/schema.sql');
  console.log(schemaSql.slice(0, 200));
}
