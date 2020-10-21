import { createStore } from 'redux'
// import postReducer from './reducers/postReducer'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: ['authType'],
// }

// const persistedReducer = persistReducer(persistConfig, postReducer)

export const store = createStore(persistedReducer)
// export const persistor = persistStore(store)
