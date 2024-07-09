import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Main () {
    return (
        <main className="flex-1 p-5 overflow-y-auto">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/55 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/55 p-2">
              <ChevronRight />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-3">
            <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-5 hover:bg-white/10 transition-colors group">
              <Image
                src="/racionais.png"
                alt="Album RacionaisMC"
                width={55}
                height={55}
              />
              <strong>Racionais</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon className="w-4 h-4" />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-5 hover:bg-white/10 transition-colors group">
              <Image
                src="/luz-do-mundo.png"
                alt="Album Luz do Mundo (Ao Vivo)"
                width={55}
                height={55}
              />
              <strong>Luz do Mundo (Ao Vivo)</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon className="w-4 h-4" />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-5 hover:bg-white/10 transition-colors group">
              <Image
                src="/rap.png"
                alt="Rap"
                width={55}
                height={55}
              />
              <strong>Rap</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon className="w-4 h-4" />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-5 hover:bg-white/10 transition-colors group">
              <Image
                src="/dailymix2.png"
                alt="Album Daily Mix 2"
                width={55}
                height={55}
              />
              <strong>Daily Mix 2</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon className="w-4 h-4" />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-5 hover:bg-white/10 transition-colors group">
              <Image
                src="/o-outro-ego.png"
                alt="Album RacionaisMC"
                width={55}
                height={55}
              />
              <strong>O Outro Ego</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon className="w-4 h-4" />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-5 hover:bg-white/10 transition-colors group">
              <Image
                src="/o-caminho.png"
                alt="Album O Caminho"
                width={55}
                height={55}
              />
              <strong>O caminho</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon className="w-4 h-4" />
              </button>
            </a>
          </div>

          <h2 className="font-bold text-2xl mt-5">Feito para José</h2>

          <div className="grid grid-cols-5 gap-4 mt-3">
            <a href="#" className="bg-white/0 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/descobertasdasemana.png"
                alt="Descobertas da Semana"
                width={140}
                height={140}
                className="w-full rounded"
              />
              <strong className="font-semibold">Descobertas da Semana</strong>
              <span className="text-base text-zinc-500">Sua mixtape semanal de novas músicas</span>
            </a>
            <a href="#" className="bg-white/0 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/dailymix1.png"
                alt="Album RacionaisMC"
                width={140}
                height={140}
                className="w-full rounded"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-base text-zinc-500">KayBlack, Mc IG, Mc Kevin, Racionais MCs e mais</span>
            </a>
            <a href="#" className="bg-white/0 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/dailymix3.png"
                alt="Album RacionaisMC"
                width={140}
                height={140}
                className="w-full rounded"
              />
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-base text-zinc-500">Djonga, Racionais MCs, Yago Oproprio e mais</span>
            </a>
            <a href="#" className="bg-white/0 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/dailymix4.png"
                alt="Album RacionaisMC"
                width={140}
                height={140}
                className="w-full rounded"
              />
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-base text-zinc-500">fhop music, Pedras Vivas, Lenha Music e mais</span>
            </a>
            <a href="#" className="bg-white/0 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/dailymix5.png"
                alt="Album RacionaisMC"
                width={140}
                height={140}
                className="w-full rounded"
              />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-base text-zinc-500">Anderson Freire, Songs Five Music e mais</span>
            </a>
          </div>
        </main>
    )
}