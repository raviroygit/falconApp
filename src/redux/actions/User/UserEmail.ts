import {
    USER_EMAIL
} from '../../../constants/constants';


export function userEmail(email) {
    return {
        type:USER_EMAIL,
        payload:email
    }
};