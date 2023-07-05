import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer";
import allUserReducer from "./allUsersReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";
import ordersReducer from "./orderReducer";


const myReducers = combineReducers({
    user: userReducer,
    alert: alertReducer,
    product: productReducer,
    allUsers: allUserReducer,
    cart: cartReducer,
    isCart: displayCartReducer,
    orders: ordersReducer,
});

export default myReducers;