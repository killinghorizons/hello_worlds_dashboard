import { serial, text, varchar, pgTable } from "drizzle-orm/pg-core"

export const hello = pgTable("hello", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  code: text().notNull()
})
