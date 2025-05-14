"use server"
import { eq, desc } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { db } from "@/db/drizzle"
import { hello } from "@/db/schema"
import { redirect } from "next/navigation"

export const getData = async () => {
  const data = await db.select().from(hello).orderBy(desc(hello.id))
  return data
}

export const getById = async (id: number) => {
  const data = await db.select().from(hello).where(eq(hello.id, id))
  if (data.length > 0) {
    return data[0]
  }
  return {}
}

export const createHello = async (
  formState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const name = formData.get("name") as string
    const code = formData.get("code") as string
    // Validation
    if (!name || !code) {
      return {
        success: false,
        message: "All fields are required"
      }
    }
    // Create Hello
    const dbCreateHello = await db.insert(hello).values({
      name: name,
      code: code
    })

    // Success
    revalidatePath("/")
    return {
      success: true,
      message: "Hello created."
    }
  } catch (error) {
    // Error
    console.error(error)
    return {
      success: false,
      message: "An error has occured while creating the Hello."
    }
  }
}

export const updateHello = async (
  id: number,
  formState: string,
  formData: FormData
) => {
  try {
    const name = formData.get("name") as string
    const code = formData.get("code") as string

    await db
      .update(hello)
      .set({ name: name, code: code })
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
