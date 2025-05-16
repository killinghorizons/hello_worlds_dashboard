import { useMemo } from "react"
import BtnLink from "./BtnLink"
import DeleteButton from "./DeleteButton"

const columnsValues = [
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <BtnLink
          href={`/read/${row.original.id}`}
          label="Read"
          type="success"
        />
        <BtnLink
          href={`/update/${row.original.id}`}
          label="Update"
          type="warning"
        />
        <DeleteButton id={row.original.id} />
      </div>
    )
  }
]

export default columnsValues
