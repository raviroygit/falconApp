import Constant from '../../../constants/constants';


export function backToLogin(success) {
    return {
        type:Constant.BACK_TO_LOGIN,
        payload:success
    }
};