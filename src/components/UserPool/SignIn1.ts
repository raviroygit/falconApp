import React,{ useState,FC } from 'react';
import * as AWS from 'aws-sdk/global';
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserPool,
} from 'amazon-cognito-identity-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Alert from '../Alert/Alert';
import { Alert } from "react-native";
import prompt from 'react-native-prompt-android';


export const signInUser = async (state, setSignInSuccess, setLodaer, setSignInError,setVisible,vCode) => {

    var authenticationData = {
        Username: state.email,
        Password: state.password,
    };
    var authenticationDetails = new AuthenticationDetails(
        authenticationData
    );
    const poolData = {
        UserPoolId: 'us-east-1_rMWEjJxCj',
        ClientId: '44j08och78e5di0nub5ujmgvkg',
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
        Username: state.email,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    await AsyncStorage.removeItem("cognitoUser");
    await AsyncStorage.setItem("cognitoUser", `${cognitoUser}`);
    cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');
    
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: async (result) => {
            var accessToken = result.getIdToken().getJwtToken();
            await AsyncStorage.removeItem("token");
            await AsyncStorage.setItem("token", accessToken);
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = 'us-east-1';

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:1f2f4c8a-5094-4935-8a12-c1167d833a63', // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.us-east-1.amazonaws.com/us-east-1_rMWEjJxCj': result
                        .getIdToken()
                        .getJwtToken(),
                },

            });

            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh(async (error) => {
                if (error) {
                    console.error(error);
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    console.log('Successfully logged!');
                    await setSignInSuccess('SignIn Success');
                    setLodaer(true);
                    return true;
                }
            });
        },

        onFailure: async (err) => {
            setSignInSuccess('');
            setSignInError(err.message || JSON.stringify(err))
            AsyncStorage.removeItem("loggedIn");
            AsyncStorage.setItem("signInError", err.message || JSON.stringify(err));
            setLodaer(false);
            // alert(err.message || JSON.stringify(err))
        },
        customChallenge:  (challengeParameters) => {
            // const response = await AsyncStorage.getItem("verificationCode");
            console.log("SignInFunc", vCode);

            // cognitoUser.sendCustomChallengeAnswer("", this);
        },
        
       
    });

};

// handleLogin = (username, password) => {
//     const authDetails = new AuthenticationDetails({
//       Username: username,
//       Password: password,
//     });
//     const userData = {
//       Username: username,
//       Pool: getUserPool(),
//       Storage: getStorage(),
//     };
//     const cognitoUser = new CognitoUser(userData);
//     cognitoUser.authenticateUser(authDetails, {
//       onSuccess: () => {
//         // login
//       }
//       newPasswordRequired: userAttr => {
//         this.setState({
//           isFirstLogin: true,
//           user: cognitoUser,
//           userAttr: userAttr,
//         });
//       },
//     });
//   };
  
//   changePassword = (newPassword) => {
//     const cognitoUser = this.state.user;
//     const userAttr = this.state.userAttr;
//     cognitoUser.completeNewPasswordChallenge(newPassword, userAttr, {
//       onSuccess: result => {
//         // login
//       }
//     });
//   };
  
//   render() {
//     return (
//       <div>
//         {this.state.isFirstLogin ? (
//           <NewPassswordForm changePassword={this.changePassword} />
//         ) : (
//           <LoginForm handleLogin={this.handleLogin} />
//         )}
//       </div>
//     );
//   }


