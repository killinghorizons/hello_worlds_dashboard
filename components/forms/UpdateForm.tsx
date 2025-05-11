"use client"
import { useActionState } from "react"
// Comps
import { IHelloWorld } from "@/types/HelloWorld"
import SubmitButton from "./SubmitButton"
import { updateHello } from "@/actions/helloActions"

const UpdateForm = ({ language, code, slug, category, id }: IHelloWorld) => {
  const [formState, formAction, isPending] = useActionState(
    updateHello.bind(null, id),
    {
      message: ""
    }
  )

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
              defaultValue={language}
              className="input input-xl w-full block"
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
              defaultValue={slug}
              className="input input-xl w-full block"
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
              defaultValue={category}
              className="input input-xl w-full block"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="code" className="label block mb-4">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            required
            className="textarea w-full min-h-[250px]"
            defaultValue={code}
          ></textarea>
        </div>
        <SubmitButton label="Update" loading="Update..." pending={isPending} />
      </form>
    </>
  )
}

export default UpdateForm
