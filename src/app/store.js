import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

//logger middleware
// const reduxLogger = require("redux-logger");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
