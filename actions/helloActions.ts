"use server"
import { eq, desc } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { db } from "@/db/drizzle"
import { hello } from "@/db/schema"

export const getData = async () => {
  const data = await db.select().from(hello).orderBy(desc(hello.id))
  return data
}

export const getById = async (id: number) => {
  const data = await db.select().from(hello).where(eq(hello.id, id))
  return data[0]
}

export const addHello = async (formState: string, formData: FormData) => {
  try {
    const language = formData.get("language") as string
    const code = formData.get("code") as string
    const category = formData.get("category") as string
    const slug = formData.get("slug") as string

    await db.insert(hello).values({
      language: language,
      slug: slug.toLowerCase(),
      category: category.toLowerCase(),
      code: code
    })
  } catch (error) {
    return {
      message: "Something went wrong..."
    }
  }

  revalidatePath("/")
  return {
    message: "Message created..."
  }
}

export const updateHello = async (
  id: number,
  formState: string,
  formData: FormData
) => {
  try {
    const language = formData.get("language") as string
    const code = formData.get("code") as string
    const category = formData.get("category") as string
    const slug = formData.get("slug") as string

    await db
      .update(hello)
      .set({ language: language, slug: slug, category: category, code: code })
      .where(eq(hello.id, id))
  } catch (error) {
    return {
      message: "Something went wrong..."
    }
  }

  revalidatePath("/")
  return {
    message: `Hello ${id} updated...`
  }
}

export const deleteHello = async (id: number) => {
  await db.delete(hello).where(eq(hello.id, id))
  revalidatePath("/")
}
