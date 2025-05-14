"use client"
// Next
import { useRouter } from "next/navigation"
// React
import { useActionState, useEffect } from "react"
// Comps
import { IHelloWorld } from "@/types/HelloWorld"
import SubmitButton from "./SubmitButton"
// Action
import { updateHello } from "@/actions/helloActions"
import { toast } from "sonner"

const UpdateForm = ({ id, name, code }: IHelloWorld) => {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(updateHello, {
    message: "",
    success: false
  })

  useEffect(() => {
    if (state.success) {
      toast.success(state.message)
      router.push("/")
    } else if (state.message && !state.success) {
      toast.error(state.message)
    }
  }, [state.success])

  return (
    <form action={formAction}>
      <input type="hidden" name="id" id="id" value={id} />
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
