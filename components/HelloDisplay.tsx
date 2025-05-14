import BtnLink from "./BtnLink"
import DeleteButton from "./DeleteButton"

interface Props {
  id: string
  name: string
  code: string
}

const HelloDisplay = ({ id, name, code }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-10">
        <h1 className="text-3xl font-bold text-primary">{name}</h1>
        <div className="flex items-center gap-4">
          <BtnLink type="warning" href={`/update/${id}`} label="Update" />
          <DeleteButton id={id} />
        </div>
      </div>
      <pre className="overflow-x-auto bg-neutral-800">
        <code>{code}</code>
      </pre>
    </div>
  )
}
export default HelloDisplay
