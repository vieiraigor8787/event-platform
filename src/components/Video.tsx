import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        {/* bloco sobre aula */}
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl">Aula 01 - abertura ignite lab</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              nisi natus, dolore eligendi veritatis soluta magni nemo
              consequuntur quaerat. Dicta dolores fuga provident inventore et
              ipsam rerum reprehenderit doloribus excepturi!
            </p>

            {/* dados do professor */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://github.com/vieiraigor8787.png"
                alt=""
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />
              <div className="leading-relaxed">
                <strong className="text-2xl block font-light">
                  Igor Vieira
                </strong>
                <span className="text-sm text-gray-200 block">
                  Dev Front-End
                </span>
              </div>
            </div>
          </div>

          {/* botões*/}
          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text0-sm bg-green-500 flex items-center rounded uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>

            <a
              href=""
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        {/* Área de download */}
        <div className="gap-8 mt-20 grid grid-cols-2">
          {/* bloco 1 */}
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="h-full p-6 flex items-center border-l border-gray-500">
              <CaretRight size={24} />
            </div>
          </a>
          {/* bloco 2 */}
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">wallpappers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="h-full p-6 flex items-center border-l border-gray-500">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
