import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../server/rootReducer";

export let store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
         serializableCheck: {
           ignoredActions: [],
         },
       }),
   });
   