import Constant from '../../../constants/constants';

const backToLogin =(state = true, action)=>{
    switch (action.type) {
      case Constant.BACK_TO_LOGIN:
        return action.payload;
      default:
        return state;
    }
};

export default backToLogin;