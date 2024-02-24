import { createSlice } from "@reduxjs/toolkit";

export const testsSlice = createSlice({
  name: "test",
  initialState: {
    time: "",
    date: "",
    list: [
      // {
      //   finalPrice: "1000",
      //   price: "1400",
      //   testNum: "3",
      //   title: "Thyroid Profile",
      // },
      // {
      //   finalPrice: "600",
      //   price: "1000",
      //   testNum: "4",
      //   title: "Iron Study Test",
      // },
      // {
      //   finalPrice: "600",
      //   price: "1000",
      //   testNum: "4",
      //   title: "Iron Study Test",
      // },
      // {
      //   finalPrice: "1000",
      //   price: "1400",
      //   testNum: "3",
      //   title: "Thyroid Profile",
      // },
    ],
  },
  reducers: {
    appendTestList: (state, action) => {
      console.log("Append Test List >>> ", action.payload);
      state.list.push(action.payload);
      // state.value -= 1;
    },
    removeItem: (state, action) => {
      console.log("Remove Item >> ", action.payload);
      const index = state.list.findIndex(
        (item) => item.title === action.payload.title
      );

      // Remove the item from the array
      state.list.splice(index, 1);
    },
    setDateTime: (state, action) => {
      console.log("SetDateTime Slice >> ", action.payload);
      console.log("Before State >>> ", state.date || state.time);
      state.date = action.payload.date;
      state.time = action.payload.time;
      console.log("After State >>> ", state.date, " || ", state.time);
      console.log("After ALLl ----", state);
    },
    removeAll: (state)=>{
      state.date="";
      state.time="";
      state.list=[];
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, appendTestList, removeItem, setDateTime, removeAll } =
  testsSlice.actions;

export default testsSlice.reducer;
