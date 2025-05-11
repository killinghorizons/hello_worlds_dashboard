import { serial, text, varchar, pgTable } from "drizzle-orm/pg-core";

export const hello = pgTable("hello", {
  id: serial().primaryKey(),
  language: varchar().notNull(),
  slug: varchar().notNull(),
  category: varchar({ length: 3 }).notNull(),
  code: text().notNull(),
});
