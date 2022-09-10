import { combineReducers } from "redux";
import getRedeemPointsReducer from './Redeem/RedeemPoints';
import loginReducer from './Login/Login';
import userEmail from './User/UserEmail';

export default combineReducers({
    redeemPoint:getRedeemPointsReducer,
    login:loginReducer,
    userEmail:userEmail
});