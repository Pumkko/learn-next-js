import type { Config } from 'drizzle-kit';

export default {
    schema: './db-schema/schema.ts',
    out: './drizzle',
    driver: 'turso',
    dbCredentials: {
        url: process.env.DB_URL ?? "",
        authToken: process.env.DB_AUTH_TOKE
    }
} satisfies Config