import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug;
  
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormat}</span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2',{
         'bg-green-500 cursor-auto': isActiveLesson,
         'group-hover:border-green-500': !isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-s font-medium flex items-center gap-2', {
              'text-white' : isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} /> Conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded px-2 py-[2px] text-green-300 border border-green-300 ml-2', {
            'text-white': isActiveLesson,
            'border-white': isActiveLesson
          })}>
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className={classNames("font-light mt-5 block", {
          'text-white': isActiveLesson,
          'text-gray-300': !isActiveLesson
        })}>{props.title}</strong>
      </div>
    </Link>
  );
}
