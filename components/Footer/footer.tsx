import { Laptop2, LayoutList, Maximize2, Mic2, Repeat, ShuffleIcon, SkipBackIcon, SkipForward, Volume } from "lucide-react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Footer () {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/music-playing.png"
            alt="Album RacionaisMC"
            width={64}
            height={64}
            className="rounded"
          />
          <div className="flex flex-col">
            <strong className="font-normal">CONFISSÕES PT2</strong>
            <span className="text-xs text-zinc-500">Nagalli, KayBlack, Veigh, Supernova Ent</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <ShuffleIcon size={20} />
            <SkipBackIcon size={20} />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon className="w-7 h-7" />
            </button>
            <SkipForward size={20} />
            <Repeat size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">2:05</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-80 bg-zinc-200"></div>
            </div>
            <span className="text-xs text-zinc-400">-0:20</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div>
            <Volume size={20} className="flex items-center gap-2"/>
            </div>
            <Maximize2 size={18}/>
        </div>

      </footer>
    )
}