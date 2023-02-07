import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from '../features/counter/counterSlice';
import postReducer from "../features/posts/postSlice";
export  const store = configureStore({

    reducer:{

        // these are reducers or its object of many reducers used in Selector hook
       // Counter : counterReducer,  // we can have another reducers here coz this object
        // Counter is used in selector

        posts:postReducer


    }
});