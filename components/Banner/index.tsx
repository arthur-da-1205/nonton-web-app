import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/movie";
import { Movie } from "../../helpers/types";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";

interface BannerProps {
  netflixOriginals: Movie[];
}

export const Banner = ({ netflixOriginals }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-3 py-16 md:space-y-4 lg:h-[65vh] justify-end lg:pb-14">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-3xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-1 md:space-x-2 lg:space-x-3">
        <button className="bg-white text-black flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bg-[gray]/70 flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl">
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};
