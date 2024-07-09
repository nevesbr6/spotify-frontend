import { HomeIcon, LibraryIcon, SearchIcon } from "lucide-react";

export default function Aside () {
    return (
        <aside className="w-72 bg-zinc-950 p-6">

            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <nav className="space-y-5 mt-10">
                <a href="#" className="flex gap-4 items-center text-base font-semibold text-zinc-200">
                    <HomeIcon />
                    Início
                </a>
                <a href="#" className="flex gap-4 items-center text-base font-semibold text-zinc-200">
                    <SearchIcon />
                    Busca
                </a>
                <a href="#" className="flex gap-4 items-center text-base font-semibold text-zinc-200">
                    <LibraryIcon />
                    Sua Biblioteca
                </a>
            </nav>

            <nav className="mt-10 pt-8 border-t border-zinc-800 flex flex-col gap-3">
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">🔓2024</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Funk Hits</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Gospel</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Mais Tocadas 2001</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist #54</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Nada mais</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Porque ?</a>
            </nav>
        </aside>
    )
}