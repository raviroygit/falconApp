import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../../../constants/constants';


export function LoginSuccess(success) {
    return {
        type:LOGIN_SUCCESS,
        payload:success
    }
};