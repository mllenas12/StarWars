import React from "react";
import { useAppSelector } from "../../hooks/storeHooks";
import { selectAllStarships } from "../../features/dataStarship/DataStarshipSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/storeHooks";
import { selectStatus } from "../../features/dataStarship/DataStarshipSlice";
import { fetchData } from "../../features/dataStarship/DataStarshipSlice";

export const StarshipDetails = () => {
  const dataStarships = useAppSelector(selectAllStarships);
  const dispatch = useAppDispatch();
  const dataStatus = useAppSelector(selectStatus);

  const [imgUrl, setImgUrl] = React.useState<string>("");
  const params = useParams();
  const [id] = React.useState(params.id);

  React.useEffect(() => {
    if (dataStatus == "idle") {
      dispatch(fetchData());
    }
  }, [dataStatus, dispatch]);

  React.useEffect(() => {
    getImgUrl();
  }, []);

  const getImgUrl = async () => {
    const url = `https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setImgUrl("/src/assets/not-found.png");
      } else {
        setImgUrl(url);
      }
    } catch (error) {
      console.error(`Imagen no disponible, error: ${error}`);
      setImgUrl("/src/assets/not-found.png");
    }
  };

  const starshipDetailData = dataStarships.find(
    (starship) => starship.url == `https://swapi.dev/api/starships/${id}/`
  );

  return (
    <div className="px-8 my-4 bg-[url('src/assets/bg-body.jpeg')]">
      <div className="">
        <div className="border-t border-gray-700"></div>
        <div className="text-neutral-400 pl-4">STARSHIP</div>
        <div className="border-t border-gray-700 "></div>
      </div>

      <div className="flex flex-col md:flex-row text-neutral-400 mt-4">
        <img src={imgUrl} alt="" className="md:w-1/2 mx-auto" />
        <div className="bg-neutral-900 md:w-1/2 mx-auto border-red-400  border-l  px-2 md:px-3 text-sm md:text-base lg:text-lg">
          <h3 className="text-slate-300 my-3">
            {starshipDetailData?.name.toUpperCase()}
          </h3>
          <p className="py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, quo
            expedita iste, esse praesentium provident animi, quas sunt ex omnis
            molestiae?
          </p>
          <ul className="py-2 lg:flex gap-16">
            <div className="lg:w-1/2">
              <li className="py-1">
                <strong className="font-semibold">Model: </strong>
                {starshipDetailData?.model}
              </li>
              <li className="py-1">
                <strong className="font-semibold">Cost in credits: </strong>
                {starshipDetailData?.cost_in_credits}
              </li>
              <li className="py-1">
                <strong className="font-semibold">Atmospheric Speed: </strong>
                {starshipDetailData?.max_atmosphering_speed}
              </li>
            </div>
            <div>
              <li className="py-1">
                <strong className="font-semibold">Manufacturer: </strong>
                {starshipDetailData?.manufacturer}
              </li>
              <li className="py-1">
                <strong className="font-semibold">Length: </strong>
                {starshipDetailData?.length}
              </li>
              <li className="py-1">
                <strong className="font-semibold">Crew: </strong>
                {starshipDetailData?.crew}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
