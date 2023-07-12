import { configureStore } from "@reduxjs/toolkit";
// import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
// import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { housesReducer, addHouse, removeHouse } from "./slices/housesSlice";
import { carsReducer, addCar, removeCar } from "./slices/carsSlice";

import { reset } from "./actions";

const store = configureStore({
  reducer: {
    houses: housesReducer,
    cars: carsReducer
  }
});

export { store, reset, addCar, removeCar, addHouse, removeHouse };
