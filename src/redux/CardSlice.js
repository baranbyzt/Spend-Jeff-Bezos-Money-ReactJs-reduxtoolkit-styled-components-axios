import { createSlice } from "@reduxjs/toolkit";
import { itemsData } from "./data/Items";

let Money = 187000000000;

export const CardSlice = createSlice({
  name: "cards",
  initialState: {
    items: itemsData,
    mainmoney: Money,
  },
  reducers: {
    changePiecePozitif: (state, action) => {
      const myİtem = action.payload;
      const dd = myİtem - 1;
      state.items[dd].piece += 1;
    },
    changePieceNegative: (state, action) => {
      const myİtem = action.payload;
      const dd = myİtem - 1;
      state.items[dd].piece -= 1;
    },
    changeMainMoneyNegative: (state, action) => {
      state.mainmoney -= action.payload;
    },
    changeMainMoneyPozitif: (state, action) => {
      state.mainmoney += action.payload;
    },
  },
});

export const selectİtems = (state) => state.cards.items;
export const selectMoney = (state) => state.cards.mainmoney;
export const {
  changeMainMoneyPozitif,
  changeMainMoneyNegative,
  changePiecePozitif,
  changePieceNegative,
} = CardSlice.actions;

export default CardSlice.reducer;
