import React, { useState } from "react";
import { TPilotOrUndefined } from "../../types/types";
import { Loading } from "../../components/Loading";
export const Pilots = ({ currentStarship }: any) => {
  const [pilotInfoArray, setPilotInfoArray] = useState<TPilotOrUndefined[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    const getInfo = async () => {
      try {
        const pilotPromises = currentStarship.pilots.map(
          async (url: string) => {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Error fetching");
            const data = await res.json();
            const portionsUrl = url.split("/");
            const id = portionsUrl[portionsUrl.length - 2];
            return {
              name: data.name,
              imgUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
              id: id,
            };
          }
        );
        const resolvedPilots = await Promise.all(pilotPromises);
        setPilotInfoArray(resolvedPilots);
        setLoading(false);
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
      ) : pilotInfoArray.length > 0 ? (
        pilotInfoArray?.map((pilot) => {
          return (
            <div
              key={pilot?.id}
              className="rounded-xl text-neutral-400 text-center w-44"
            >
              <img
                src={pilot?.imgUrl}
                alt={`photo of ${pilot?.name}`}
                className="rounded-t-xl"
              />
              <p className="bg-neutral-800 border-t-2 border-red-500 text-xs p-2 rounded-b-xl">
                {pilot?.name.toUpperCase()}
              </p>
            </div>
          );
        })
      ) : (
        <div className="text-yellow-300 mx-auto py-10">
          No pilots on board! 🚀
        </div>
      )}
    </div>
  );
};
