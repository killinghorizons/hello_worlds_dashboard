"use client"
// Next
import { redirect } from "next/navigation"
// React
import { useActionState, useEffect } from "react"
// Comps
import { IHelloWorld } from "@/types/HelloWorld"
import SubmitButton from "./SubmitButton"
// Action
import { updateHello } from "@/actions/helloActions"
import { toast } from "sonner"

const UpdateForm = ({ id, name, code }: IHelloWorld) => {
  const [state, formAction, isPending] = useActionState(
    updateHello.bind(null, id),
    {
      message: "",
      success: false
    }
  )

  useEffect(() => {
    if (state.success) {
      toast.success(state.message)
      redirect("/")
    }
    if (state.success === false && state.message.length > 0)
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
          defaultValue={name}
          className="input input-xl w-full block"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="code" className="label block mb-4">
          Code:
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
  )
}

export default UpdateForm
