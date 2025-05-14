// Comps
import Heading from "@/components/Heading"
import UpdateForm from "@/components/forms/UpdateForm"
// Db
import { getById } from "@/actions/helloActions"
import { IHelloWorld } from "@/types/HelloWorld"

interface Props {
  params: {
    id: string
  }
}

const Update = async ({ params }: Props) => {
  const { id } = await params
  const { id: idDb, name, code }: IHelloWorld = await getById(parseInt(id))

  return (
    <section>
      <Heading text="Update" />
      <UpdateForm id={idDb} name={name} code={code} />
    </section>
  )
}

export default Update
