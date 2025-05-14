"use client"
import { IHelloWorld } from "@/types/HelloWorld"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table"
import { useMemo, useState } from "react"
// Comps
import SearchInput from "./SearchInput"
import BtnLink from "./BtnLink"

const Table = ({ data }: { data: IHelloWorld[] }) => {
  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState("")

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id"
      },
      {
        accessorKey: "name",
        header: "Name"
      },
      {
        accessorKey: "code",
        header: "Code"
      },
      {
        id: "read",
        header: "Read",
        cell: info => (
          <BtnLink
            href={`/read/${info.row.original.id}`}
            label="Read"
            type="success"
          />
        )
      },
      {
        header: "Update",
        cell: info => (
          <BtnLink
            href={`/update/${info.row.original.id}`}
            label="Update"
            type="warning"
          />
        )
      },
      {
        header: "Delete",
        cell: info => (
          <BtnLink
            href={`/delete/${info.row.original.id}`}
            label="Delete"
            type="error"
          />
        )
      }
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString"
  })

  return (
    <div>
      <SearchInput
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      {/* Form */}
      <div className="overflow-x-auto">
        <table className="table table-zebra mb-5">
          <thead className="font-bold text-xl text-neutral-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: "🔼",
                        desc: "🔽"
                      }[header.column.getIsSorted()] ?? ""}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center">
          <div>
            <select
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
              className="select"
            >
              {[10, 20, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="btn"
            >
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
