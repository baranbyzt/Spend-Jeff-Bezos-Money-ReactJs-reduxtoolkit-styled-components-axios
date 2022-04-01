

import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name: 'cards',
    initialState:{
        // our items
     items: [
        {
            id:1,
            title: 'movie ticket',
            img: "https://collegetrio.com/wp-content/uploads/2019/07/movie-tickets.jpg",
            fiyat: 20,
            aded: 0,
            listofreceipt: false
        },
        {
            id:2,
            title: 'netflix membership',
            img: "https://neal.fun/spend/images/year-of-netflix.jpg",
            fiyat: 100,
            aded: 0
        },
        {
            id:3,
            title: 'iPhone 12 Pro',
            img: "https://128milyardolar.net/_assets/img/urun/iphone12.jpg",
            fiyat: 2500,
            aded: 0
        },
        {
            id:4,
            title: 'Cargo Ship',
            img: "https://128milyardolar.net/_assets/img/urun/gemicik.jpg",
            fiyat: 35000000,
            aded: 0
        },
        {
            id:5,
            title: 'House',
            img: "https://neal.fun/spend/images/single-family-home.jpg",
            fiyat: 260000,
            aded: 0
        },
        {
            id:6,
            title: 'Factory',
            img: "https://www.freepngimg.com/thumb/machine/55396-5-factory-free-download-image.png",
            fiyat: 11000000,
            aded: 0
        },
        {
            id:7,
            title: 'Boeing 747',
            img: "https://neal.fun/spend/images/boeing-747.jpg",
            fiyat: 150000000,
            aded: 0
        },
        {
            id:8,
            title: 'intercity road',
            img: "https://128milyardolar.net/_assets/img/urun/duble.jpg",
            fiyat: 11000000000,
            aded: 0
        },
        {
            id:9,
            title: 'Cruise Ship',
            img: "https://neal.fun/spend/images/cruise-ship.jpg",
            fiyat: 950000000,
            aded: 0
        },
        {
            id:10,
            title: 'Newyork Yankees',
            img: "https://128milyardolar.net/_assets/img/urun/yankees.jpg",
            fiyat: 5000000000,
            aded: 0
        },
        {
            id:11,
            title: 'Burj Khalifa',
            img: "https://128milyardolar.net/_assets/img/urun/burjkhalifa.jpg",
            fiyat: 1500000000,
            aded: 0
        },
        {
            id:12,
            title: 'Neymar Jr.',
            img: "https://128milyardolar.net/_assets/img/urun/neymarjr.jpg",
            fiyat: 263000000,
            aded: 0
        },
        {
            id:13,
            title: 'Twitter   .',
            img: "https://128milyardolar.net/_assets/img/urun/twitter.jpg",
            fiyat: 41000000000,
            aded: 0
        },
        {
            id:14,
            title: 'Falcon 9 ',
            img: "https://128milyardolar.net/_assets/img/urun/falcon9.jpg",
            fiyat: 90000000,
            aded: 0
        },
        {
            id:15,
            title: 'Instagram',
            img: "https://128milyardolar.net/_assets/img/urun/ig.jpg",
            fiyat: 100000000000,
            aded: 0
        },


     ],
     // our total money
     mainmoney: 187000000000
    },
    reducers:{
        
        changePiecePozitif: (state,action) => {
            const myİtem = action.payload[0]
            const dd = myİtem -1
           state.items[dd].aded += 1  
        },
        changePieceNegative: (state,action) => {
           const myİtem = action.payload[0]
           const dd = myİtem -1
          state.items[dd].aded -= 1 
        },
        changeMainMoneyNegative: (state,action) => {
            state.mainmoney -= action.payload
           },
           changeMainMoneyPozitif: (state,action) => {
            state.mainmoney += action.payload
           }
    }
})

// our items
export const selectİtems = state => state.cards.items;
// our money
export const selectMoney = state => state.cards.mainmoney;
// our actions
export const {
    changeMainMoneyPozitif,changeMainMoneyNegative,
    changePiecePozitif,changePieceNegative
} = CardSlice.actions;

export default CardSlice.reducer;

