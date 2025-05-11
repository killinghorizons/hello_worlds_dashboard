"use client"
import { IHelloWorld } from "@/types/HelloWorld"
import SubmitButton from "./SubmitButton"

const UpdateForm = ({ language, code, slug, category, id }: IHelloWorld) => {
  // Comps
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const l = formData.get("language") as string
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <SubmitButton label="Update" loading="Update..." />
    </form>
  )
}

export default UpdateForm
