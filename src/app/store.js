import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import iceCreamSlice from "../features/icecream/iceCreamSlice";
import userSlice from "../features/user/userSlice";
// import cakeReducer from "../features/cake/cakeSlice";
// import iceCreamReducer from "../features/icecream/iceCreamSlice";
// import userReducer from "../features/user/userSlice";

//logger middleware
// const reduxLogger = require("redux-logger");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeSlice,
        iceCream: iceCreamSlice,
        user: userSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
