import { createSlice } from "@reduxjs/toolkit";
import { ordered as CakeOrdered } from "../cake/cakeSlice";

const initialState = {
    numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        reStocked: (state, action) => {
            state.numOfIceCreams += action.payload;
        },
    },
    // extraReducers: {
    //     ["cake/ordered"]: (state) => {
    //         state.numOfIceCreams--;
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(CakeOrdered, (state) => {
            state.numOfIceCreams--;
        });
    },
});

export default iceCreamSlice.reducer;
export const { ordered, reStocked } = iceCreamSlice.actions;
