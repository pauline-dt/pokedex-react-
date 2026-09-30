import { Link } from "react-router-dom";
import type { PokemonType } from "@/store/pokemon";
import { getSpriteUrl } from "@/utils/pokemon.utils";
import TeamIconButton from "./TeamIconButton.component";

type PokemonCardProps = {
  pokemon: PokemonType;
  isInTeam: boolean;
};

const PokemonCard = ({ pokemon, isInTeam }: PokemonCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden border-4 border-slate-900 bg-slate-200 p-2 transition-all hover:-translate-y-1 ${
        isInTeam
          ? "shadow-[5px_5px_0_#dc2626]"
          : "shadow-[5px_5px_0_#111827]"
      }`}
    >
      <div className="absolute right-2 top-2 z-10">
        <TeamIconButton pokemon={pokemon} isInTeam={isInTeam} />
      </div>

      <Link
        to={`/pokemon/${pokemon.name}`}
        className="flex flex-col"
      >
        <div className="border-2 border-slate-900 bg-[#cce6c5] p-2">
          <div
            className="flex min-h-24 items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(30,41,59,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,.08) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          >
            <img
              src={getSpriteUrl(pokemon.id)}
              alt={pokemon.name}
              loading="lazy"
              className="h-20 w-20 object-contain transition-transform duration-200 group-hover:scale-110"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>

        <div className="mt-2 border-2 border-slate-900 bg-white px-2 py-2 text-center">
          <span className="block text-[10px] font-black text-slate-500">
            #{String(pokemon.id).padStart(3, "0")}
          </span>

          <span className="block truncate text-xs font-black uppercase text-slate-900">
            {pokemon.name}
          </span>
        </div>
      </Link>

      <div className="mt-2 flex gap-1">
        <span className="h-2 flex-1 border border-slate-900 bg-red-500" />
        <span className="h-2 flex-1 border border-slate-900 bg-yellow-300" />
        <span className="h-2 flex-1 border border-slate-900 bg-green-400" />
      </div>
    </div>
  );
};

export default PokemonCard;