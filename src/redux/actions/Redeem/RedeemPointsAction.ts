import {
    REDEEM_POINTS_SUCCESS,
    REDEEM_POINTS_FAILURE,
    RESET_REDEEM_POINTS
} from '../../../constants/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {COGNITO_URL} from '@env';

export const redeemPoints=(result)=>{
    return async(dispatch) =>{
        const config = {
            headers: { Authorization: `Bearer ${await AsyncStorage.getItem('token')}` }
          };
        axios.post(`https://ck3ppye3ri.execute-api.us-east-1.amazonaws.com/dev/redeem-points`,result,config)
        .then(response=>{
            dispatch(redeemPointsSuccess(response.data));
        }).catch(err=>{
            dispatch(redeemPointsFailure(err));
            console.log(err);
        })
    };
    
};


const redeemPointsSuccess =success=>{
    return {
        type:REDEEM_POINTS_SUCCESS,
        payload: success
    }
};

const redeemPointsFailure =err=>{
    return {
        type:REDEEM_POINTS_FAILURE,
        payload: err
    }
};

export const resetRedeemPoint =()=>{
    return {
        type:RESET_REDEEM_POINTS,
        payload: ""
    }
};