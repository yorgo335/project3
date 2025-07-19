import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState:{
        productsList: [],
    },
    reducers:{
        setProducts(state, action){
            state.productsList = action.payload;
        },
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
export const selectProducts = (state) => state.products.productsList;