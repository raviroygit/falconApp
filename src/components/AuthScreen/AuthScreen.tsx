import React, { useEffect, useState, FC } from "react";
import { TouchableOpacity, Dimensions, ScrollView, TextInput, StyleSheet, Text, View, Alert } from "react-native";
import { signUpUser, signUp, signUpConfirm } from '../UserPool/SignUp';
import SignUpConfirm from './SignUpConfirm';
import SignInScreen from './SignIn';
import AlertDialog from '../Alert/Alert';
import styles from './SignUpStyles';
import Dialog from 'react-native-dialog';



const SignUp: FC<any> = (props) => {
    const [alertWarning, setAlertWarning] = useState(false);

    const [state, setState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        vCode: ""
    });
    const [signUpSuccess, setSignUpSuccess] = useState('');
    const [signUpError, setSignUpError] = useState('');
    const [visible, setVisible] = useState(false);

    const resetState = () => {
        setState({ email: "", password: "", firstName: "", lastName: "", phoneNumber: "" });
    };

    const onPressSignUp = () => {
        props.onPressSignUp();
    };

    const onPressBackSignIn = () => {
        props.onPressBackSignIn();
    };

    const onPressCreateAccount = () => {
        signUp(state, setSignUpSuccess, setSignUpError, setAlertWarning)
    };

    const onPressAlertClose = () => {
        setSignUpSuccess("");
    };

    const onPressCloseDialog = () => {
        setAlertWarning(false);
        setSignUpError('');
        setSignUpSuccess('');
        // props.onPressBackSignIn();
    };
    const verifyOtp = () => {
        signUpConfirm(state);
        setVisible(false);
    };

    useEffect(() => {
        if (signUpSuccess) {
            Alert.alert("", "User Account Created Successfully", [
                {
                    text: "Cancel",
                    onPress: () => onPressAlertClose(),
                },
            ],
            );
        }
    }, [signUpSuccess]);

    useEffect(() => {
    }, [signUpError, alertWarning])

    return (
        <View >
            <View style={styles.container}>

                {props.signUp ?
                    <>
                        <Text style={{ marginTop: '1%', marginBottom: 20, fontWeight: "bold", fontSize: 40, letterSpacing: 4, color: "black", }}>Falcon</Text>


                        <TextInput
                            style={styles.input}
                            onChangeText={(input) => setState({ ...state, firstName: input })}
                            value={state.firstName}
                            placeholder="First Name"
                            placeholderTextColor="black"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(input) => setState({ ...state, lastName: input })}
                            value={state.lastName}
                            placeholder="Last Name"
                            placeholderTextColor="black"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(input) => setState({ ...state, phoneNumber: input })}
                            value={state.phoneNumber}
                            placeholder="Phone Number"
                            placeholderTextColor="black"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(input) => setState({ ...state, birthDate: input })}
                            value={state.birthDate}
                            placeholder="Enter your birthDate DD/MM/YYYY"
                            placeholderTextColor="black"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(input) => setState({ ...state, email: input })}
                            value={state.email}
                            placeholder="Enter your Email"
                            placeholderTextColor="black"
                        />

                        <View style={styles.signInButtonContainer}>
                            <>
                                <TouchableOpacity
                                    style={styles.signInButton}
                                    onPress={onPressCreateAccount}
                                >
                                    <Text style={styles.signInBottomTitle}>Create Account</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.signInButton}
                                    onPress={onPressBackSignIn}
                                >
                                    <Text style={styles.signInBottomTitle}>Sign In</Text>
                                </TouchableOpacity>
                            </>
                        </View>
                    </> :
                    <SignInScreen onPressSignUp={onPressSignUp} onPressBackSignIn={onPressBackSignIn} />
                }

                {signUpError && alertWarning ? <AlertDialog onPressCloseDialog={onPressCloseDialog} alertWarning={alertWarning} error={signUpError} /> : null}
            </View>
        </View>

    );
};


export default SignUp;