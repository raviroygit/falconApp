import {
    REDEEM_POINTS_SUCCESS,
    REDEEM_POINTS_FAILURE,
    RESET_REDEEM_POINTS
} from '../../../constants/constants';


const getRedeemPointsReducer = (state = {}, action) => {
    switch (action.type) {
      case REDEEM_POINTS_SUCCESS:
        return Object.assign({}, action.payload)
      case REDEEM_POINTS_FAILURE:
        return {};
        case RESET_REDEEM_POINTS:
        return {};
      default: return state;
    }
  }
  
  export default getRedeemPointsReducer;