// Comps
import Heading from "@/components/Heading"
import UpdateForm from "@/components/forms/UpdateForm"
// Db
import { getById } from "@/actions/helloActions"
import { IHelloWorld } from "@/types/HelloWorld"
import NotFound from "@/app/not-found"

interface Props {
  params: {
    id: string
  }
}

const Update = async ({ params }: Props) => {
  const { id } = await params

  if (!parseInt(id)) return <NotFound />
  if (parseInt(id) && parseInt(id) > 10e5) return <NotFound />

  const idInt = parseInt(id)

  const { id: idDb, name, code }: IHelloWorld = await getById(idInt)

  return (
    <section>
      <Heading text="Update" />
      <UpdateForm id={idDb} name={name} code={code} />
    </section>
  )
}

export default Update
