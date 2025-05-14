"use client"
import { useActionState } from "react"
// Comps
import { IHelloWorld } from "@/types/HelloWorld"
import SubmitButton from "./SubmitButton"
import { updateHello } from "@/actions/helloActions"

const UpdateForm = ({ id, name, code }: IHelloWorld) => {
  const [formState, formAction, isPending] = useActionState(
    updateHello.bind(null, id),
    {
      message: ""
    }
  )

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
