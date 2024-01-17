import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const characters = sqliteTable('Characters', {
    id: integer('id'),
    name: text('name')
})