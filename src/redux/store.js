import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contact-reducer';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
    logger,
];

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactReducer),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware,
});

const persistor = persistStore(store);
const exportModule = { store, persistor };
export default exportModule;
