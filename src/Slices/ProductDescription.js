import { createSlice} from '@reduxjs/toolkit'

const initialValue = {
 
    productDescriptions:[
        {
            id:"1",
            description1:"Check availability in store",
            description2:"Product Details",
            description3:"Delivery & Returns",
            description4:"Gifting",
        }
    ]
};
export const productDescriptionSlice = createSlice({
    name:"descriptionInfo",
    initialState:initialValue,
    reducers:{

    }
});
export default productDescriptionSlice.reducer;