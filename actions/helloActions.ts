"use server"
import { eq, desc } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { db } from "@/db/drizzle"
import { hello } from "@/db/schema"

// List all
export const getData = async () => {
  try {
    const data = await db.select().from(hello).orderBy(desc(hello.id))
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

// List one
export const getHelloById = async (id: string) => {
  try {
    const data = await db
      .select()
      .from(hello)
      .where(eq(hello.id, Number(id)))

    return data[0]
  } catch (error) {
    console.error(error)
    return null
  }
}

// Create one
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
    // Insert db Hello
    await db.insert(hello).values({
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

// Update one
export const updateHello = async (
  formState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const name = formData.get("name") as string
    const code = formData.get("code") as string
    const helloId = Number(formData.get("id"))

    // Validation
    if (!name || !code) {
      return {
        success: false,
        message: "All fields are required"
      }
    }

    const update = await db
      .update(hello)
      .set({ name: name, code: code })
      .where(eq(hello.id, helloId))

    // Success
    revalidatePath("/")
    return {
      success: true,
      message: "Hello updated."
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: "An error has occured while updating the Hello."
    }
  }
}

export const deleteHello = async (
  formState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  const helloId = Number(formData.get("id"))

  if (!helloId) {
    return {
      success: false,
      message: "Hello doesn't exists."
    }
  }

  try {
    await db.delete(hello).where(eq(hello.id, helloId))
    return {
      success: true,
      message: "Hello deleted."
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: "An error has occured while deleting the Hello."
    }
  }
}
