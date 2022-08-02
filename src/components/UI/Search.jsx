function Search({ value }) {
  return (
    <div>
      <input
        onChange={(e) => {
          value(e.target.value);
        }}
        className="outline-none bg-white text-alt-dark dark:bg-alt-dark dark:text-white px-6 py-2 rounded-full w-full"
        type="text"
        placeholder="SEARCH"
      />
    </div>
  );
}

export default Search;
