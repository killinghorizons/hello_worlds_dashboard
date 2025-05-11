"use client"
import { redirect } from "next/navigation"
import { deleteHello } from "@/actions/helloActions"

const DeleteButton = ({ id }: { id: number }) => {
  const handleClick = async () => {
    try {
      await deleteHello(id)
    } catch (error) {
      console.log(error)
    } finally {
      redirect("/")
    }
  }

  return (
    <button className="btn btn-error" onClick={handleClick}>
      Delete
    </button>
  )
}

export default DeleteButton
