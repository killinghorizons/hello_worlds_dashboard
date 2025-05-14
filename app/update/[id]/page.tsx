// Comps
import Heading from "@/components/Heading"
import UpdateForm from "@/components/forms/UpdateForm"
// Db
import { getHelloById } from "@/actions/helloActions"
import { IHelloWorld } from "@/types/HelloWorld"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

const Update = async ({ params }: Props) => {
  const { id } = await params

  const helloWorld = await getHelloById(id)
  if (!helloWorld) notFound()
  const { id: idHello, name, code } = helloWorld

  return (
    <section>
      <Heading text="Update" />
      <UpdateForm id={idHello} name={name} code={code} />
    </section>
  )
}

export default Update
