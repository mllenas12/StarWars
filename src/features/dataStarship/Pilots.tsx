import React, { useState } from "react";
import { TPilotOrUndefined } from "../../types/types";

export const Pilots = ({ currentStarship }: any) => {
  const [arrayPilots, setArrayPilots] = useState<string[]>([]);
  const [pilotInfoArray, setPilotInfoArray] = useState<TPilotOrUndefined[]>([]);

  React.useEffect(() => {
    setArrayPilots(currentStarship?.pilots);
  }, [currentStarship]);

  React.useEffect(() => {
    getInfo();
  }, [arrayPilots]);

  const getInfo = async () => {
    const array = arrayPilots?.map(async (url: string) => {
      let name;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error fetching");
        const data = await res.json();
        name = data.name;
        const portionsUrl = url.split("/");
        const id = portionsUrl[portionsUrl.length - 2];

        return {
          name: name,
          imgUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
          id: id,
        };
      } catch (error) {
        console.log(error);
      }
    });

    if (array) {
      const resolvedArray = await Promise.all(array);
      setPilotInfoArray(resolvedArray);
    }
  };
  let pilotCard;
  if (pilotInfoArray.length > 0) {
    pilotCard = pilotInfoArray?.map((pilot) => {
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
    });
  } else {
    pilotCard = (
      <div className="text-yellow-300 mx-auto py-10">
        No pilots on board! 🚀
      </div>
    );
  }
  return <div className="flex flex-wrap gap-4">{pilotCard}</div>;
};
