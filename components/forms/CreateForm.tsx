"use client"
// Db
import { addHello } from "@/actions/helloActions"
// React
// Comps
import SubmitButton from "./SubmitButton"
import { useActionState } from "react"

const CreateForm = () => {
  const [formState, formAction, isPending] = useActionState(addHello, {
    message: ""
  })

  return (
    <>
      {formState.message && (
        <div className="text-primary font-bold pb-4">{formState.message}</div>
      )}
      <form action={formAction}>
        <div className="mb-4 flex items-center gap-10">
          {/* Langue */}
          <div className="w-full">
            <label htmlFor="language" className="label block mb-4">
              Language
            </label>
            <input
              type="text"
              name="language"
              id="language"
              required
              className="input w-full block"
            />
          </div>
          {/* Slug  */}
          <div className="w-full">
            <label htmlFor="slug" className="label block mb-4">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              required
              className="input w-full block"
            />
          </div>
          {/* Category  */}
          <div className="w-1/5">
            <label htmlFor="category" className="label block mb-4">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              required
              className="input w-full block"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="code" className="label block mb-4">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            required
            className="textarea w-full min-h-[250px]"
          ></textarea>
        </div>
        <SubmitButton
          label="Create"
          loading="Creating..."
          pending={isPending}
        />
      </form>
    </>
  )
}

export default CreateForm
