import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = { key: '@Iconsultas-paciente/', storage };

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composer = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, composer);
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
