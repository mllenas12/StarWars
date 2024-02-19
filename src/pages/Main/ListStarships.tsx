import React from "react";
import {
  selectAllStarships,
  fetchData,
  selectStatus,
} from "../../features/dataStarship/DataStarshipSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { Link } from "react-router-dom";

const ListStarships = () => {
  const dispatch = useAppDispatch();
  const dataStarships = useAppSelector(selectAllStarships);
  const dataStatus = useAppSelector(selectStatus);

  React.useEffect(() => {
    if (dataStatus == "idle") {
      dispatch(fetchData());
    }
  }, [dataStatus, dispatch]);

  const starshipElement = dataStarships.map((starship) => {
    const portionsUrl = starship.url.split("/");

    const id = portionsUrl[portionsUrl.length - 2];

    return (
      <div
        key={id}
        className="w-2/3 mx-auto bg-neutral-900 text-neutral-500 my-5 p-4 rounded"
      >
        <Link
          to={`/starships/${id}`}
          aria-label={`View details for ${starship.name} starhip`}
        >
          <p>{starship.name.toUpperCase()}</p>
          <p className="text-sm">{starship.model}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="bg-black">
      {dataStatus == "loading" && (
        <h1 className="text-xl text-center py-8 text-neutral-500">
          Loading...
        </h1>
      )}
      {dataStatus == "succeeded" && starshipElement}
    </div>
  );
};

export default ListStarships;
