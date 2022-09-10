import {
    CognitoUser,
} from 'amazon-cognito-identity-js';
import { LoginSuccess } from '../../redux/actions/Login/Login';
import store from '../../store/store';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';


let cognitoUser: CognitoUser; // Track authentication flow state in this object

export async function signInAuth(email, setVisible, setSignInError, setSession) {
    cognitoUser = await Auth.signIn(email).then(async (success, onrejected) => {
        setSession(success);
        setVisible(true);
        console.log(success)
    }).catch(async (err) => {
        await store.dispatch(LoginSuccess(false));
        if (JSON.stringify(err.log)) {
            await setSignInError(JSON.stringify(err.log) + " Please enter email or phone number");
        } else {
            await setSignInError("You enter wrong details or missing parameter!");
        }

    });;
};

export async function answerCustomChallenge(answer: string, setSignInError, setAlertWarning, setVisible, session) {

    cognitoUser = await Auth.sendCustomChallengeAnswer(session, answer).then(async (onfulfilled, onrejected) => {
        if (onfulfilled.signInUserSession === null) {
            await setSignInError("Enter incorrect OTP!");
            await setAlertWarning(true);
        } else {
            await store.dispatch(LoginSuccess(true));
        };

    }).catch(async (err) => {
        await store.dispatch(LoginSuccess(false));
        await setSignInError(JSON.stringify(err));
        setAlertWarning(true);
        console.log("error verify", JSON.stringify(err))
    })

    try {
        await Auth.currentSession().then(async (data) => {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.setItem("token", data.getIdToken().getJwtToken());
        }
        );
        await Auth.currentSession();
    } catch {
        await store.dispatch(LoginSuccess(false));
        setAlertWarning(true);
        setSignInError("user did not enter the right code");

    }

};