"use client"
// Actions
import { deleteHello } from "@/actions/helloActions"
// Next
import { useRouter } from "next/navigation"
// React
import { useActionState, useEffect } from "react"
// Sonner
import { toast } from "sonner"

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter()
  const [state, formAction] = useActionState(deleteHello, {
    success: false,
    message: ""
  })

  useEffect(() => {
    if (state.success) {
      toast.success(state.message)
      router.push("/")
    } else if (state.message && !state.success) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form action={formAction}>
      <input type="hidden" name="id" id="id" value={id} />
      <button type="submit" className="btn btn-error">
        Delete
      </button>
    </form>
  )
}

export default DeleteButton
