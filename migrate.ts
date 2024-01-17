import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { migrate } from 'drizzle-orm/libsql/migrator';

const client = createClient({ url: process.env.DB_URL ?? "", authToken: process.env.DB_AUTH_TOKEN });

export const db = drizzle(client);
await migrate(db, {
    migrationsFolder: './drizzle'
});
