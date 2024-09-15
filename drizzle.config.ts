import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('🔴 Cannot find database URL.');
}

export default {
  dialect: 'postgresql',
  schema: './src/lib/superbase/schema.ts',
  out: './migrations',
  // driver: 'pg', 
 dbCredentials: {
    url: process.env.DATABASE_URL! || '',
  },
  verbose: true,
  strict: true,
} satisfies Config;
