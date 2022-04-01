
import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './CardSlice'

export const store = configureStore({
reducer: {
    cards: cardSlice
}
});