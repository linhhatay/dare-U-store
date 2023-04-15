import { configureStore } from '@reduxjs/toolkit';
import product from './productSlice';
import notify from './notifySlice';
import auth from './authSlice';
import cart from './cartSlice';

// export default configureStore({
//     reducer: {
//         product,
//         notify,
//         auth,
//         cart,
//     },
// });

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import notifyReducer from './reducers/notifyReducer';
import loadingReducer from './reducers/loadingReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer,
    loading: loadingReducer,
    product,
    cart,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
