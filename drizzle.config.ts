import type { Config } from 'drizzle-kit';

export default {
    schema: './db-schema/schema.ts',
    out: './drizzle',
    driver: 'turso',
} satisfies Config