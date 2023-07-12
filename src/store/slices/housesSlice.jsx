import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const housesSlice = createSlice({
  name: "house",
  initialState: [],
  reducers: {
    addHouse(state, action) {
      state.push(action.payload);
    },
    removeHouse(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addHouse, removeHouse } = housesSlice.actions;
export const housesReducer = housesSlice.reducer;
