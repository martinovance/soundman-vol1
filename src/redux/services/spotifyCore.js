import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", import.meta.env.VITE_RAPIDAPI_HOST);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getReconmmendedTracks: builder.query({
      query: () => ({
        url: "/recommendations",
        params: {
          limit: "20",
          seed_tracks: "0c6xIDDpzE81m2q797ordA",
          seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
          seed_genres: "classical,country", // no space between genres
        },
      }),
    }),
  }),
});

export const { useGetReconmmendedTracksQuery } = spotifyCoreApi;
