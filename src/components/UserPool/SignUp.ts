import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';

// export const signUpUser = (state, setSignUpSuccess, setSignUpError) => {
//     const poolData = {
//         UserPoolId: 'us-east-1_rMWEjJxCj',
//         ClientId: '44j08och78e5di0nub5ujmgvkg',
//     };
//     const userPool = new CognitoUserPool(poolData);

//     const attributeList = [];

//     const dataEmail = {
//         Name: 'email',
//         Value: state.email,
//     };

//     const dataPhoneNumber = {
//         Name: 'phone_number',
//         Value: state.phoneNumber,
//     };

//     const firstName = {
//         Name: 'given_name',
//         Value: state.firstName,
//     };
//     const lastName = {
//         Name: 'family_name',
//         Value: state.lastName,
//     };
//     const DOB = {
//         Name: 'birthdate',
//         Value: state.birthDate,
//     };

//     const attributeEmail = new CognitoUserAttribute(dataEmail);
//     const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
//     const attributeFirstName = new CognitoUserAttribute(firstName);
//     const attributeLastName = new CognitoUserAttribute(lastName);
//     const attributeDOB = new CognitoUserAttribute(DOB);

//     attributeList.push(attributeEmail);
//     attributeList.push(attributePhoneNumber);
//     attributeList.push(attributeFirstName);
//     attributeList.push(attributeLastName);
//     attributeList.push(attributeDOB);

//     const createdUser = userPool.signUp(state.email, "Qwerty1234@", attributeList, null, function (
//         err,
//         result
//     ) {
//         if (err) {
//             setSignUpError(err.message || JSON.stringify(err));
//             // alert(err.message || JSON.stringify(err));
//             return;
//         }

//         setSignUpSuccess('confirmSignUp');
//     });
// };


export const signUp = async (state: any, setSignUpSuccess, setSignUpError, setAlertWarning) => {
    let defaultPassword = "Qwerty1234@";
    try {
        const result = await Auth.signUp({
            username: state.email,
            password: defaultPassword,
            attributes: {
                phone_number: state.phoneNumber,
                email: state.email,
                given_name: state.firstName,
                family_name: state.lastName,
                birthdate: state.birthDate
            },
        }).then(async (success) => {
            await setAlertWarning(false);
            await setSignUpSuccess(success);


        }).catch(async (err) => {
            await setAlertWarning(true);
            if (JSON.stringify(err.log)) {
                await setSignUpError(JSON.stringify(err.log));
            } else {
                await setSignUpError("You enter wrong details or missing parameter!");
            }

        });

    } catch (err) {
        console.log("Error input", JSON.stringify(err))
    }

};

export const signUpConfirm = async (state: any) => {
    try {
        await Auth.confirmSignUp(state.email, state.vCode);
        /* Once the user successfully confirms their account, update form state to show the sign in form*/
    } catch (err) { console.log({ err }); }
}