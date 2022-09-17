import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "cards",
  initialState: {
    // our items
    items: [
      {
        id: 1,
        title: "movie ticket",
        img: "https://images.squarespace-cdn.com/content/v1/5ea326bd59c52d46dc2bb35e/1593446964682-YPURHWC3MNR6G2ET32HB/Movie+Ticket+Image.png?format=1000w",
        fiyat: 20,
        aded: 0,
        listofreceipt: false,
      },
      {
        id: 2,
        title: "netflix membership",
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        fiyat: 100,
        aded: 0,
      },
      {
        id: 3,
        title: "iPhone 13 Pro",
        img: "https://web-eshop.cdn.hinet.net/eShop%20Images/Product/phones/000100003317/152684-C50320383002.jpg",
        fiyat: 2500,
        aded: 0,
      },
      {
        id: 4,
        title: "Cargo Ship",
        img: "https://cdnntr1.img.sputniknews.com/img/101515/08/1015150859_0:12:1200:767_1920x0_80_0_0_b3721b7b7d5c50acdcd192bde51d18d3.jpg",
        fiyat: 35000000,
        aded: 0,
      },
      {
        id: 5,
        title: "House",
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        fiyat: 260000,
        aded: 0,
      },
      {
        id: 6,
        title: "Factory",
        img: "https://www.freepngimg.com/thumb/machine/55396-5-factory-free-download-image.png",
        fiyat: 11000000,
        aded: 0,
      },
      {
        id: 7,
        title: "Boeing 747",
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        fiyat: 150000000,
        aded: 0,
      },
      {
        id: 8,
        title: "intercity road",
        img: "https://group.skanska.com/globalassets/externalcontent2/project/intercity-road/63b55848-58df-4d32-9179-08c344f42dea.1.jpg?height=469&width=882&scale=both&mode=crop&bgcolor=f3f3f3",
        fiyat: 11000000000,
        aded: 0,
      },
      {
        id: 9,
        title: "Cruise Ship",
        img: "https://www.gannett-cdn.com/-mm-/96922c8c08f83b50f4415f7c3059f64720e78063/c=0-150-2880-1770/local/-/media/2020/04/09/USATODAY/usatsports/MotleyFool-TMOT-c0585415-royal-caribbean.jpg?width=2880&height=1620&fit=crop&format=pjpg&auto=webp",
        fiyat: 950000000,
        aded: 0,
      },
      {
        id: 10,
        title: "Newyork Yankees",
        img: "https://media.gettyimages.com/photos/brett-gardner-celebrates-with-gary-sanchez-of-the-new-york-yankees-picture-id1273226434?s=612x612",
        fiyat: 5000000000,
        aded: 0,
      },
      {
        id: 11,
        title: "Burj Khalifa",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7Nqkq-Eraojde4wtFUmxyV5uaMyd_sSOm3iqsxCObsTXa0CHMiMCOhvvOgayCf9m5xA&usqp=CAU",
        fiyat: 1500000000,
        aded: 0,
      },
      {
        id: 12,
        title: "Neymar Jr.",
        img: "https://cdn.ntvspor.net/2ae3043c115741a099bd276897d94acc.jpg?crop=0,5,1024,581&w=1200&mode=crop",
        fiyat: 263000000,
        aded: 0,
      },
      {
        id: 13,
        title: "Twitter   .",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWe5GXWS0BTh23U1SlIvmLMPdtYaPHC1uD7xvJ_kbXTv_bvsEoe5mr8JBUjlCpGtN1bU&usqp=CAU",
        fiyat: 41000000000,
        aded: 0,
      },
      {
        id: 14,
        title: "Falcon 9 ",
        img: "https://www.log.com.tr/wp-content/uploads/2022/02/spacex-son-falcon-9-gorevinden-etkileyici-bir-video-paylasti-660x371.jpg",
        fiyat: 90000000,
        aded: 0,
      },
      {
        id: 15,
        title: "Instagram",
        img: "https://cdn.webrazzi.com/uploads/2022/01/facebook-instagram-803.png",
        fiyat: 100000000000,
        aded: 0,
      },
    ],
    // our total money
    mainmoney: 187000000000,
  },
  reducers: {
    changePiecePozitif: (state, action) => {
      const myİtem = action.payload[0];
      const dd = myİtem - 1;
      state.items[dd].aded += 1;
    },
    changePieceNegative: (state, action) => {
      const myİtem = action.payload[0];
      const dd = myİtem - 1;
      state.items[dd].aded -= 1;
    },
    changeMainMoneyNegative: (state, action) => {
      state.mainmoney -= action.payload;
    },
    changeMainMoneyPozitif: (state, action) => {
      state.mainmoney += action.payload;
    },
  },
});

// our items
export const selectİtems = (state) => state.cards.items;
// our money
export const selectMoney = (state) => state.cards.mainmoney;
// our actions
export const {
  changeMainMoneyPozitif,
  changeMainMoneyNegative,
  changePiecePozitif,
  changePieceNegative,
} = CardSlice.actions;

export default CardSlice.reducer;
