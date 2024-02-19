import React from "react";
import {
  selectAllStarships,
  fetchData,
  selectStatus,
} from "../../features/dataStarship/DataStarshipSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

const ListStarships = () => {
  const dispatch = useAppDispatch();
  const dataStarships = useAppSelector(selectAllStarships);
  const dataStatus = useAppSelector(selectStatus);

  React.useEffect(() => {
    if (dataStatus == "idle") {
      dispatch(fetchData());
    }
  }, [dataStatus, dispatch]);

  const starshipInfo = dataStarships.map((starship, index) => {
    return (
      <div
        key={index}
        className="w-2/3 mx-auto bg-neutral-900 text-neutral-500 my-5 p-4 rounded"
      >
        <p className="">{starship.name.toUpperCase()}</p>
        <p className="text-sm">{starship.model}</p>
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
      {dataStatus == "succeeded" && starshipInfo}
    </div>
  );
};

export default ListStarships;
