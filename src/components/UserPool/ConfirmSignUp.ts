import {
    CognitoUserPool,
    CognitoUser,
} from 'amazon-cognito-identity-js';



export const signUpConfirm = (email, code, setSuccess,setLodaer) => {

    const poolData = {
        UserPoolId: 'us-east-1_rMWEjJxCj',
        ClientId: '44j08och78e5di0nub5ujmgvkg',
    };
    const userPool = new CognitoUserPool(poolData);

    var userData = {
        Username: email,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function (err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        setSuccess(cognitoUser);
    });

};

export const ResendConfirmationCode = (email,setLodaer) => {
    const poolData = {
        UserPoolId: 'us-east-1_rMWEjJxCj',
        ClientId: '44j08och78e5di0nub5ujmgvkg',
    };
    const userPool = new CognitoUserPool(poolData);

    var userData = {
        Username: email,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.resendConfirmationCode(function (err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        
        // setLodaer(false);
    });
};