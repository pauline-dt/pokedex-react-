import { NavLink, Outlet } from "react-router-dom";
import { MAX_TEAM_SIZE, useTeamStore } from "@/store/team";
import { getSpriteUrl } from "@/utils/pokemon.utils";
import PokeballIcon from "@/components/ui/PokeballIcon.component";

const links = [
  { to: "/", label: "Pokédex", end: true },
  { to: "/equipe", label: "Mon équipe", end: false },
];

const slots = Array.from({ length: MAX_TEAM_SIZE }, (_, index) => index);

const Layout = () => {
  const team = useTeamStore((state) => state.team);

  return (
    <div className="flex min-h-screen flex-col bg-slate-200">
      <header className="border-b-4 border-slate-900 bg-red-600 shadow-[0_6px_0_#991b1b]">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full border-4 border-slate-900 bg-white p-1 shadow-[3px_3px_0_#7f1d1d]">
              <PokeballIcon className="h-9 w-9" />
            </div>

            <div>
              <span className="block text-xl font-black uppercase tracking-wide text-white">
                Pokédex
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-100">
                Trainer System
              </span>
            </div>
          </div>

          <nav className="ml-6 flex gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `border-2 border-slate-900 px-4 py-2 text-xs font-black uppercase tracking-wide transition-all ${
                    isActive
                      ? "translate-y-0 bg-yellow-300 text-slate-900 shadow-[3px_3px_0_#111827]"
                      : "bg-red-500 text-white shadow-[3px_3px_0_#7f1d1d] hover:-translate-y-0.5 hover:bg-red-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 rounded-xl border-2 border-slate-900 bg-red-700 px-3 py-2 shadow-inner sm:flex">
            {slots.map((slot) => {
              const member = team[slot];

              if (!member) {
                return (
                  <div
                    key={slot}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-red-400"
                  >
                    <PokeballIcon className="h-7 w-7 opacity-55" />
                  </div>
                );
              }

              return (
                <div
                  key={slot}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-white shadow-[2px_2px_0_#111827]"
                >
                  <img
                    src={getSpriteUrl(member.id)}
                    alt={member.name}
                    title={member.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t-2 border-red-800 bg-red-700 px-5 py-1 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-red-100">
          Pocket Monster Database
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8">
        <Outlet />
      </main>

      <footer className="border-t-4 border-slate-900 bg-slate-800 py-4 text-center text-[10px] font-bold uppercase tracking-widest text-slate-300">
        PokéAPI · React + TypeScript · B2 Ynov
      </footer>
    </div>
  );
};

export default Layout;