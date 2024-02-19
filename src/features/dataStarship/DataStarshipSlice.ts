import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IDataState } from "../../types/types";
import { RootState } from "../../app/store";
import { IStarship } from "../../types/types";

const initialState: IDataState = {
    data: [],
    status: "idle",
    error: null,
};

export const fetchData = createAsyncThunk(
    "dataStarship/fetchData",
    async () => {
        let starshipArray: IStarship[] = [];
        let nextPageUrl = "https://swapi.dev/api/starships/";
        while (nextPageUrl !== null) {
            const res = await fetch(nextPageUrl);
            const data = await res.json();
            starshipArray.push(...data.results);
            nextPageUrl = data.next;
        }
        const starshipData = starshipArray.flat();
        return starshipData;
    }
);

export const dataStarshipSlice = createSlice({
    name: "dataStarship",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = state.data.concat(action.payload);
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                state.data = [];
            });
    },
});
export default dataStarshipSlice.reducer;
export const selectAllStarships = (state: RootState) => state.dataStarship.data;
export const selectStatus = (state: RootState) => state.dataStarship.status;