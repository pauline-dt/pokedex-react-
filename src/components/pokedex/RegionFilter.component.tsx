import { REGIONS } from "@/utils/pokemon.utils";

type RegionFilterProps = {
  selectedRegion: number | null;
  onSelectRegion: (generation: number | null) => void;
};

const RegionFilter = ({
  selectedRegion,
  onSelectRegion,
}: RegionFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {REGIONS.map((region) => {
        const isSelected = selectedRegion === region.generation;

        return (
          <button
            key={region.generation}
            type="button"
            onClick={() =>
              onSelectRegion(isSelected ? null : region.generation)
            }
            className={`cursor-pointer border-2 border-slate-900 px-3 py-2 text-xs font-black uppercase transition-all ${
              isSelected
                ? "translate-y-[2px] bg-yellow-300 text-slate-900 shadow-[1px_1px_0_#111827]"
                : "bg-white text-slate-700 shadow-[3px_3px_0_#111827] hover:-translate-y-0.5 hover:bg-slate-100"
            }`}
          >
            {region.label}
          </button>
        );
      })}
    </div>
  );
};

export default RegionFilter;
