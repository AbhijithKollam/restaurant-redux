import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// For calling API in redux/slice we use Thunk
// Thunk is a method provided by redux to make API calls
// API calls are asynchronoous function, so Thunk use of concept of promise

//function to call API
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data);
    console.log("result in slice");
    console.log(result);
    return result

})



const restaurantSlice = createSlice({
    name :"restaurantList",
    initialState:{
        loading:false, //pending
        allRestaurant:[], //resolve
        error:"",  //reject
        searchRestaurant :[],
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false;
            state.allRestaurant = action.payload;
            state.searchRestaurant= action.payload
            state.error=""


        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false;
            state.allRestaurant = [];
            state.error=action.error.message
        })
    },
    reducers:{
        search:(state,action)=>{
            state.allRestaurant.restaurants = 
            state.searchRestaurant.restaurants.filter((item)=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export default restaurantSlice.reducer;
export const {search} = restaurantSlice.actions