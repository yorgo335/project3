import { createSlice } from "@reduxjs/toolkit";
import productsData from "./assets/items.json"

const productSlice = createSlice({
    name: "products",
    initialState:{
        productsList: productsData,
    },
    reducers:{
        //I can't add any reducer since well Its difficult to add new product when images need to exists in assets
    }
})

export default productSlice.reducer;
export const selectProducts = (state) => state.products.productsList;