import React, { useState } from "react";
import { TFilmOrUndefined } from "../../types/types";
import { Loading } from "../../components/Loading";

export const Films = ({ currentStarship }: any) => {
  const [filmInfoArray, setFilmInfoArray] = useState<TFilmOrUndefined[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    console.log(currentStarship);
    const getInfo = async () => {
      try {
        const filmsPromises = currentStarship.films.map(async (url: string) => {
          const res = await fetch(url);
          if (!res.ok) throw new Error("Error fetching");
          const data = await res.json();
          const portionsUrl = url.split("/");
          const id = portionsUrl[portionsUrl.length - 2];
          return {
            title: data.title,
            episode: data.episode_id,
            imgUrl: `https://starwars-visualguide.com/assets/img/films/${id}.jpg`,
            id: id,
          };
        });
        const resolvedFilms = await Promise.all(filmsPromises);
        setFilmInfoArray(resolvedFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, [currentStarship]);

  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        <Loading />
      ) : filmInfoArray.length > 0 ? (
        filmInfoArray?.map((film) => {
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
                <p className="text-[10px]">Episode {film?.episode}</p>
              </div>
            </div>
          );
        })
      ) : (
        !loading && (
          <div className="text-yellow-300 mx-auto py-10 min-h-64">
            No films on board! 🎬
          </div>
        )
      )}
    </div>
  );
};
