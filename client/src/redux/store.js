import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import notifyReducer from './reducers/notifyReducer';
import loadingReducer from './reducers/loadingReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer,
    loading: loadingReducer,
    cart: cartReducer,
    product: productReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
