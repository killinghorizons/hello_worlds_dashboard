interface Props {
  globalFilter: string;
  setGlobalFilter: (search: string) => void;
}

const SearchInput = ({ globalFilter, setGlobalFilter }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
    console.log(globalFilter);
  };

  return (
    <div className="w-full mb-6">
      <label htmlFor="language" className="label block mb-4">
        Search:
      </label>
      <input
        type="text"
        name="language"
        id="language"
        required
        value={globalFilter}
        onChange={handleChange}
        aria-selected
        className="input w-full block"
        placeholder="Search by id, language, slug"
      />
    </div>
  );
};

export default SearchInput;
