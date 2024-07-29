import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import * as thunkMiddleware  from 'redux-thunk';
import petReducer from './petSlice';

const rootReducer = combineReducers({ 
    pets:petReducer,
})

const persistConfig = {
    key: 'root',
    storage: storageSession,
    // storage,
    whitelist: ['pets'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false}).concat(),
},
applyMiddleware(thunkMiddleware)
)

export const persistor = persistStore(store)