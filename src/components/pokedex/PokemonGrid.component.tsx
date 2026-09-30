import type { PokemonType } from "@/store/pokemon";
import { useTeamStore } from "@/store/team";
import PokemonCard from "./PokemonCard.component";

type PokemonGridProps = {
  pokemons: PokemonType[];
};

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  const team = useTeamStore((state) => state.team);

  if (pokemons.length === 0) {
    return (
      <div className="pokedex-panel p-8 text-center">
        <p className="text-sm font-black uppercase tracking-widest text-slate-700">
          Aucun Pokémon détecté
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Modifiez vos filtres pour relancer le scan.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isInTeam={team.some((member) => member.id === pokemon.id)}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
