import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Offer = {
  img: string;
  name: string;
};

interface MainBanner {
  mainBanner: Offer[];
  hotDeals: Offer[];
}

const initialState: MainBanner = {
  mainBanner: [
    {
      name: "Juhyna",
      img: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c894ace9-7720-46df-9c06-ce41db181723._CR0%2C0%2C1920%2C1080_SX3000_.jpg",
    },
    {
      name: "bigchips",
      img: "https://creativereview.imgix.net/content/uploads/2021/09/Pringles-PR-launch-03.jpg?auto=compress,format&q=60&w=1920&h=1080",
    },
    {
      name: "test",
      img: "https://i.pinimg.com/originals/74/ea/2c/74ea2c1f3f2a9b7c16826a644ec3025a.jpg",
    },
  ],
  hotDeals: [
    {
      name: "Juhyna",
      img: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c894ace9-7720-46df-9c06-ce41db181723._CR0%2C0%2C1920%2C1080_SX3000_.jpg",
    },
    {
      name: "bigchips",
      img: "https://creativereview.imgix.net/content/uploads/2021/09/Pringles-PR-launch-03.jpg?auto=compress,format&q=60&w=1920&h=1080",
    },
    {
      name: "test",
      img: "https://i.pinimg.com/originals/74/ea/2c/74ea2c1f3f2a9b7c16826a644ec3025a.jpg",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
