// Comps
import Heading from "@/components/Heading"
// Db
import { getHelloById } from "@/actions/helloActions"
import { notFound } from "next/navigation"
import HelloDisplay from "@/components/HelloDisplay"

interface Props {
  params: Promise<{ id: string }>
}

const Read = async ({ params }: Props) => {
  const { id } = await params
  const helloWorld = await getHelloById(id)
  if (!helloWorld) notFound()

  return (
    <div>
      <Heading text="Read" />
      <HelloDisplay id={id} name={helloWorld.name} code={helloWorld.code} />
    </div>
  )
}

export default Read
