import usePokemonList from "@/hooks/usePokemonList.hook";
import usePokedexFilters from "@/hooks/usePokedexFilters.hook";
import Loader from "@/components/ui/Loader.component";
import ErrorMessage from "@/components/ui/ErrorMessage.component";
import PokedexFilters from "@/components/pokedex/PokedexFilters.component";
import PokemonGrid from "@/components/pokedex/PokemonGrid.component";

const PokedexPage = () => {
  const { pokemons, loading, error } = usePokemonList();

  const {
    search,
    setSearch,
    selectedTypes,
    toggleType,
    selectedRegion,
    setSelectedRegion,
    filterPokemons,
  } = usePokedexFilters();

  if (loading) return <Loader message="Chargement du Pokédex…" />;
  if (error) return <ErrorMessage message={error} />;

  const filteredPokemons = filterPokemons(pokemons);

  return (
    <section className="space-y-6">
      <div className="pokedex-panel overflow-hidden">
        <div className="border-b-4 border-slate-900 bg-red-600 px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-100">
                National Database
              </p>

              <h1 className="mt-1 text-3xl font-black uppercase tracking-tight text-white">
                Pokédex
              </h1>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-3 w-3 rounded-full border-2 border-slate-900 bg-yellow-300" />
              <span className="h-3 w-3 rounded-full border-2 border-slate-900 bg-green-400" />
              <span className="h-3 w-3 rounded-full border-2 border-slate-900 bg-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-slate-300 p-4 sm:p-6">
          <div className="pokedex-screen p-4 sm:p-6">
            <p className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-700">
              Cherchez, filtrez par région et par types, puis ouvrez une fiche.
            </p>

            <PokedexFilters
              search={search}
              onSearchChange={setSearch}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              selectedTypes={selectedTypes}
              onToggleType={toggleType}
            />

            <div className="mt-5 flex items-center justify-between border-t-2 border-dashed border-slate-500 pt-4">
              <p className="text-xs font-black uppercase tracking-widest text-slate-700">
                Résultats
              </p>

              <p className="border-2 border-slate-900 bg-yellow-300 px-3 py-1 text-xs font-black text-slate-900 shadow-[2px_2px_0_#111827]">
                {filteredPokemons.length} Pokémon
              </p>
            </div>
          </div>
        </div>
      </div>

      <PokemonGrid pokemons={filteredPokemons} />
    </section>
  );
};

export default PokedexPage;
