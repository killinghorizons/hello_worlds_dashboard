interface Props {
  globalFilter: string
  setGlobalFilter: (search: string) => void
}

const SearchInput = ({ globalFilter, setGlobalFilter }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value)
    console.log(globalFilter)
  }

  return (
    <div className="w-full mb-6">
      <label htmlFor="search" className="label block mb-4">
        Search:
      </label>
      <input
        type="search"
        name="search"
        id="search"
        required
        value={globalFilter}
        onChange={handleChange}
        aria-selected
        className="input w-full block"
        placeholder="Search by id & name"
      />
    </div>
  )
}

export default SearchInput
