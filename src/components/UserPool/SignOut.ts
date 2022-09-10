import {
    CognitoUserPool,
    CognitoUser,
} from 'amazon-cognito-identity-js';

import { LoginSuccess } from '../../redux/actions/Login/Login';
import store from '../../store/store';
import { Auth } from 'aws-amplify';

export const signOutUser = (email) => {
   

    Auth.signOut().then(success=>{
        store.dispatch(LoginSuccess(false));
        console.log("success signout",JSON.stringify(success))
    }).catch(err=>{
        console.log("Error signout",JSON.stringify(err))

    });
};