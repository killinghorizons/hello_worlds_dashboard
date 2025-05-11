// Comps
import Heading from "@/components/Heading"
// Db
import { getById } from "@/actions/helloActions"
import DeleteButton from "@/components/DeleteButton"

interface Props {
  params: {
    id: string
  }
}

const Delete = async ({ params }: Props) => {
  const { id } = await params
  const helloWorld = await getById(parseInt(id))

  return (
    <div>
      <Heading text="Delete" />
      <DeleteButton id={parseInt(id)} />
      <div className="mt-4">
        <h1 className="text-3xl font-bold mb-4 text-primary">
          Language: {helloWorld.language}
        </h1>
        <h2 className="text-xl font-bold mb-4">Slug : {helloWorld.slug}</h2>
        <pre className="overflow-x-auto">
          <code>{helloWorld.code}</code>
        </pre>
      </div>
    </div>
  )
}

export default Delete
