import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const carsSlice = createSlice({
  name: "car",
  initialState: [],
  reducers: {
    addCar(state, action) {
      console.log(`state before update ${state}`)
      state.push(action.payload);
      console.log(`state after update ${state}`)
    },
    removeCar(state, action) {
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

export const { addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
