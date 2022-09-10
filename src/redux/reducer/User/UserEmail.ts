import {
    USER_EMAIL
} from '../../../constants/constants';

const userEmail =(state = '', action)=>{
        switch (action.type) {
          case USER_EMAIL:
            return action.payload;
          default:
            return state;
        }
};

export default userEmail;