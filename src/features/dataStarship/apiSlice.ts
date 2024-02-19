import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
    endpoints: builder => ({
        getStarships: builder.query({
            query: (page) => `/starships/?page=${page}`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                currentCache.results.push(...newItems.results)
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            }
        })
    })
})

export const { useGetStarshipsQuery } = apiSlice

