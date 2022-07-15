import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Movie } from "../../helpers/types";
import { Thumbnail } from "../Thumbnail";

interface RowProps {
  title: string;
  movies: Movie[];
}

export const Row = ({ title, movies }: RowProps) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
        <ChevronLeftIcon className="absolute top-0 bottom-0 z-40 m-auto transition opacity-0 cursor-pointer left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
        <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 z-40 m-auto transition opacity-0 cursor-pointer left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};
