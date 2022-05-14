import { createSlice } from "@reduxjs/toolkit";

const themeColorSlice = createSlice({
    name:'themeColors',
    initialState: {
        inputTextColor: '#0000ff',
        headingTextColor:'#0000ff',
        gradientBackgroundBoxColor: 'rgb(255, 0, 255)'
    },
    reducers:{

    }
})


export default themeColorSlice