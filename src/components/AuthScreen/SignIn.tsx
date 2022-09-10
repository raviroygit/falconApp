import React, { useEffect, useState, FC } from "react";
import { TouchableOpacity, Button, Dimensions, TextInput, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { signInUser, verifyUser, signInAuth, answerCustomChallenge } from '../UserPool/SignIn';
import SignUp from "./AuthScreen";
import Loder from '../Loader/Loder';
import Alert from '../Alert/Alert';
import styles from "./SignInStyles";
import Dialog from 'react-native-dialog';
import { userEmail } from '../../redux/actions/User/UserEmail';
import { useDispatch } from "react-redux";

const signIn: FC = (props) => {

    const [state, setState] = useState({
        email: "",
        phoneNumber: "",
        password: ""
    });

    const [signUp, setSignUp] = useState(false);
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [loder, setLodaer] = useState(false);
    const [signInError, setSignInError] = useState('');
    const [alertWarning, setAlertWarning] = useState(false);
    const [visible, setVisible] = useState(false);
    const [vCode, setVCode] = useState('');
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const [otpLength, setOtpLength] = useState(false);


    const resetState = () => {
        setState({ email: "", phoneNumber: "" });
    };

    // const setCognitoUser = (user) => {
    //     console.log(user)
    // };

    const onPressSignIn = () => {
        // signInUser(state, setSignInSuccess, setLodaer, setSignInError, setVisible, setSession, setUser);
        signInAuth(state.email, setVisible, setSignInError, setSession);
        // setLodaer(true)
        setAlertWarning(true);

    };

    const onPressOTP = () => {
        verifyUser(vCode, user, setSignInSuccess, setLodaer, setSignInError, setVisible, setVCode);
        setLodaer(true)
        setAlertWarning(true);

    };

    const onPressSignUp = () => {
        setSignUp(true);
    };

    const onPressBackSignIn = () => {
        setSignUp(false);
    };

    const signInFalse = () => {
        setSignInSuccess(false);
        setLodaer(false);
    };

    const onPressCloseDialog = () => {
        if (vCode) {
            setAlertWarning(false);
        }
        setSignInError('');
        setSignInSuccess(false);
    };

    useEffect(() => {
        if (state.email) {
            dispatch(userEmail(state.email));
        }

    }, [state.email]);

    const verifyOtp = () => {
        if (vCode && vCode.length === 4) {
            answerCustomChallenge(vCode, setSignInError, setAlertWarning, setVisible, session);
            setVisible(false);
        }
    };
    useEffect(() => {
        if (vCode === "" && vCode.length !== 4) {
            setOtpLength(true)
        } else {
            setOtpLength(false);
        }
        if (vCode.length === 4) {
            setOtpLength(true)
        }
        
    }, [signInError, session, vCode])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {signUp ? <SignUp signUp={signUp} onPressBackSignIn={onPressBackSignIn} /> :
                        !loder ?
                            <>
                                <Text style={styles.header}>Falcon</Text>

                                <TextInput
                                    style={styles.input}
                                    onChangeText={(input) => setState({ ...state, email: input })}
                                    value={state.email}
                                    placeholder="Enter mobile number Or email"
                                    placeholderTextColor="black"
                                />
                                {/* <TextInput
                                            style={styles.input}
                                            onChangeText={(input) => setState({ ...state, password: input })}
                                            value={state.password}
                                            placeholder="Enter your password"
                                            secureTextEntry
                                            placeholderTextColor="black"
                                        /> */}
                                <View style={styles.signInButtonContainer}>
                                    <TouchableOpacity
                                        style={styles.signInButton}

                                        onPress={onPressSignIn}
                                    >
                                        <Text style={styles.signInBottomTitle}>Sign In</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.signInButton}
                                        onPress={onPressSignUp}
                                    >
                                        <Text style={styles.signInBottomTitle}>Create Account </Text>
                                    </TouchableOpacity>

                                </View>
                            </> : <Loder />
                    }
                    <Dialog.Container visible={visible}>
                        <Dialog.Title>Verify Account</Dialog.Title>
                        <Dialog.Description>
                            Provide Verification Code
                        </Dialog.Description>
                        <Dialog.Input onChangeText={text => setVCode(text)} />
                        {vCode === "" && <Text style={{ color: "red" }}>OTP can't be blank</Text>}
                        {!otpLength && <Text style={{ color: "red" }}>OTP should be 4 digit and can't be blank</Text>}

                        <Dialog.Button label="Enter OTP" onPress={() => verifyOtp()} />
                    </Dialog.Container>

                    {signInError ? <Alert onPressCloseDialog={onPressCloseDialog} alertWarning={alertWarning} error={signInError} /> : <Text></Text>}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default signIn;