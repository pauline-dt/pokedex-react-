import {
  MAX_SELECTED_TYPES,
  POKEMON_TYPES,
  TYPE_COLORS,
  TYPE_LABELS,
} from "@/utils/pokemon.utils";

type TypeFilterProps = {
  selectedTypes: string[];
  onToggleType: (type: string) => void;
};

const TypeFilter = ({ selectedTypes, onToggleType }: TypeFilterProps) => {
  const isLimitReached = selectedTypes.length >= MAX_SELECTED_TYPES;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {POKEMON_TYPES.map((type) => {
          const isSelected = selectedTypes.includes(type);

          return (
            <button
              key={type}
              type="button"
              onClick={() => onToggleType(type)}
              disabled={!isSelected && isLimitReached}
              className={`cursor-pointer border-2 border-slate-900 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_#111827] transition-all disabled:cursor-not-allowed disabled:opacity-30 ${
                isSelected
                  ? `${TYPE_COLORS[type]} translate-y-[2px] text-white shadow-[1px_1px_0_#111827]`
                  : "bg-white text-slate-700 hover:-translate-y-0.5 hover:bg-slate-100"
              }`}
            >
              {TYPE_LABELS[type]}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {isLimitReached
          ? "Deux types maximum. Désélectionnez-en un pour changer."
          : "Deux types au maximum, cumulables."}
      </p>
    </div>
  );
};

export default TypeFilter;
