import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Spinner,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner size={80} />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video mx-auto ">
          <Player key={data.lesson.videoId}>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        {/* bloco sobre aula */}
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {/* dados do professor */}
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                  className="h-16 w-16 rounded-full border-2 border-blue-500 "
                />
                <div className="leading-relaxed">
                  <strong className="block">{data.lesson.teacher.name}</strong>
                  <span className="text-sm text-gray-200 block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
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
              <strong className="text-2xl font-light ">
                Material complementar
              </strong>
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
              <strong className="text-2xl font-light ">
                Wallpappers exclusivos
              </strong>
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
