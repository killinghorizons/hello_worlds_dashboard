"use client"
// Next
import { redirect } from "next/navigation"
// Action
import { createHello } from "@/actions/helloActions"
// React
import { useActionState, useEffect } from "react"
// Comps
import SubmitButton from "./SubmitButton"
import { toast } from "sonner"

const CreateForm = () => {
  const [state, formAction, isPending] = useActionState(createHello, {
    success: false,
    message: ""
  })

  useEffect(() => {
    if (state.success) {
      toast(state.message)
      redirect("/")
    }
    toast(state.message)
  }, [state.success])

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="name" className="label block mb-4">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="input w-full block"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="code" className="label block mb-4">
          Code:
        </label>
        <textarea
          name="code"
          id="code"
          required
          className="textarea w-full min-h-[250px]"
        ></textarea>
      </div>
      <SubmitButton label="Create" loading="Creating..." pending={isPending} />
    </form>
  )
}

export default CreateForm
