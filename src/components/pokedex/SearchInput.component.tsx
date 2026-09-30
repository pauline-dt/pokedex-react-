type SearchInputProps = {
  search: string;
  onSearchChange: (search: string) => void;
};

const SearchInput = ({ search, onSearchChange }: SearchInputProps) => {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-slate-700">
        Recherche
      </label>

      <div className="relative">
        <input
          type="text"
          value={search}
          placeholder="Rechercher un Pokémon..."
          onChange={(event) => onSearchChange(event.target.value)}
          className="w-full border-4 border-slate-900 bg-slate-950 px-4 py-3 pr-12 text-sm font-bold text-green-300 outline-none placeholder:text-slate-500 focus:bg-slate-900"
        />

        <div className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-slate-900 bg-green-400 shadow-[0_0_8px_#4ade80]" />
      </div>
    </div>
  );
};

export default SearchInput;