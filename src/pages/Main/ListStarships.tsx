import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useGetStarshipsQuery } from "../../features/dataStarship/apiSlice";
import { useState } from "react";
import { IStarship } from "../../types/types";
import { Loading } from "../../components/Loading";

const StarshipsExcerpt: React.FC<{ starship: IStarship }> = ({ starship }) => {
  const portionsUrl = starship.url.split("/");
  const id = portionsUrl[portionsUrl.length - 2];
  return (
    <div
      key={id}
      className="w-4/5 md:w-2/3  mx-auto bg-neutral-900  text-neutral-500 hover:text-yellow-500 my-2 p-4 rounded"
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
};

const ListStarships = () => {
  const [page, setPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });
  const {
    data: starships,
    isLoading,
    isSuccess,
    isError,
  } = useGetStarshipsQuery(page);

  const handleViewMore = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  React.useEffect(() => {
    window.scrollTo(scrollPosition.x, scrollPosition.y);
  }, [starships]);

  const viewMoreButton =
    starships?.count > starships?.results.length ? (
      <button
        onClick={() => handleViewMore()}
        className="text-white text-sm w-40 p-2 px-4 mx-auto my-4 border border-yellow-400 rounded-full flex flex-row gap-2 justify-center"
      >
        SHOW MORE
        <img
          src="/src/assets/arrow.svg"
          alt="arrow button"
          className="w-3 my-auto"
        />
      </button>
    ) : (
      <p className="text-lg text-center pb-8 text-neutral-500">
        No more starships to load...
      </p>
    );

  return (
    <section className="bg-black">
      {isLoading && <Loading />}
      {isSuccess && (
        <div className="flex flex-col  my-4">
          {starships.results.map((starship: any) => (
            <StarshipsExcerpt key={nanoid()} starship={starship} />
          ))}
          {viewMoreButton}
        </div>
      )}
      {isError && (
        <div className="text-xl text-center py-8 text-neutral-500">
          Oops! We encountered an error. Please refresh the page an try again.
        </div>
      )}
    </section>
  );
};

export default ListStarships;
