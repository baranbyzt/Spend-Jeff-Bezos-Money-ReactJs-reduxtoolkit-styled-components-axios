

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const cardSlice = createSlice({
    name: 'cards',
    initialState:{
     items: [
        {
            id:1,
            title: 'sinema bileti',
            img: "https://collegetrio.com/wp-content/uploads/2019/07/movie-tickets.jpg",
            fiyat: 20,
            aded: 5
        },
        {
            id:2,
            title: 'netflix üyelik',
            img: "https://neal.fun/spend/images/year-of-netflix.jpg",
            fiyat: 100,
            aded: 10
        }

     ],
     mainmoney: 1000
    },
    reducers:{
    
        arttirtFunciton: (state) => {
    
        },
        azzaltFunciton: (state) => {
            
        },
        paradandus: (state,action) => {
           const reis = action.payload[0]
           const dd = reis -1
          // console.log(state.items[dd].aded)
          state.items[dd].aded -= 1
        },
        arttiraded: (state,action) => {
         state.mainmoney -= action.payload
        }
    }
})


export const selectData = state => state.cards.items;
export const selectDatapara = state => state.cards.mainmoney;

export const {arttirtFunciton,azzaltFunciton,arttiraded,paradandus} = cardSlice.actions;
export default cardSlice.reducer;
