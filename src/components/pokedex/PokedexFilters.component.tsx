import SearchInput from "./SearchInput.component";
import RegionFilter from "./RegionFilter.component";
import TypeFilter from "./TypeFilter.component";

type PokedexFiltersProps = {
  search: string;
  onSearchChange: (search: string) => void;
  selectedRegion: number | null;
  onSelectRegion: (generation: number | null) => void;
  selectedTypes: string[];
  onToggleType: (type: string) => void;
};

const PokedexFilters = ({
  search,
  onSearchChange,
  selectedRegion,
  onSelectRegion,
  selectedTypes,
  onToggleType,
}: PokedexFiltersProps) => {
  return (
    <div className="space-y-5">
      <SearchInput
        search={search}
        onSearchChange={onSearchChange}
      />

      <div>
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-slate-700">
          Région
        </p>

        <RegionFilter
          selectedRegion={selectedRegion}
          onSelectRegion={onSelectRegion}
        />
      </div>

      <div>
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-slate-700">
          Types
        </p>

        <TypeFilter
          selectedTypes={selectedTypes}
          onToggleType={onToggleType}
        />

        <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Deux types au maximum, cumulables.
        </p>
      </div>
    </div>
  );
};

export default PokedexFilters;