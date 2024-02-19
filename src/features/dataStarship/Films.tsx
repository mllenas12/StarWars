import React, { useState } from "react";
import { TFilmOrUndefined } from "../../types/types";
export const Films = ({ currentStarship }: any) => {
  const [arrayFilms, setArrayFilms] = useState<string[]>([]);
  const [filmInfoArray, setFilmInfoArray] = useState<TFilmOrUndefined[]>([]);

  React.useEffect(() => {
    setArrayFilms(currentStarship?.films);
  }, [currentStarship]);

  React.useEffect(() => {
    getInfo();
  }, [arrayFilms]);

  const getInfo = async () => {
    const array = arrayFilms?.map(async (url: string) => {
      let title;
      let episode;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error fetching");
        const data = await res.json();
        title = data.title;
        episode = data.episode_id;
        const portionsUrl = url.split("/");
        const id = portionsUrl[portionsUrl.length - 2];

        return {
          title: title,
          episode: `Episode ${episode}`,
          imgUrl: `https://starwars-visualguide.com/assets/img/films/${id}.jpg`,
          id: id,
        };
      } catch (error) {
        console.log(error);
      }
    });

    if (array) {
      const resolvedArray = await Promise.all(array);
      setFilmInfoArray(resolvedArray);
    }
  };
  let FilmCard;
  if (filmInfoArray.length > 0) {
    FilmCard = filmInfoArray?.map((film) => {
      return (
        <div
          key={film?.id}
          className="rounded-xl text-neutral-400 text-center w-44"
        >
          <img
            src={film?.imgUrl}
            alt={`photo of ${film?.title}`}
            className="rounded-t-xl "
          />
          <div className="bg-neutral-800 border-t-2 border-red-500 text-xs p-2 rounded-b-xl">
            <p className="">{film?.title.toUpperCase()}</p>
            <p className="text-[8px]">{film?.episode.toUpperCase()}</p>
          </div>
        </div>
      );
    });
  } else {
    FilmCard = (
      <div className="text-yellow-300 mx-auto py-10 min-h-64">
        No films on board! 🎬
      </div>
    );
  }
  return <div className="flex flex-wrap gap-4">{FilmCard}</div>;
};
