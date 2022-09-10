import React, { useEffect, useState,FC } from "react";
import { TouchableOpacity, Button,Dimensions, TextInput, StyleSheet, Text, View, Alert } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import SignInScreen from './SignIn';
import { signUpConfirm, ResendConfirmationCode, } from '../UserPool/ConfirmSignUp';
import styles from './SignUpConfirmStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUpConfirm:FC<any> = (props) => {

    const [backToSignIn, setBackToSignIn] = useState(false);
    const [success, setSuccess] = useState('');
    const { email } = props.state;
    const [state, setState] = useState({
        confirmationCCode: ""
    });
    const [loder, setLodaer] = useState(false);


    const onPressAlertClose = () => {
        props.onPressBackSignIn();
        setLodaer(false);
    };
    useEffect(() => {
        if (success) {
            Alert.alert("", "User Account Created Successfully", [
                {
                    text: "Back to SignIn",
                    onPress: () => onPressAlertClose(),
                },
            ],
            );
        }
    }, [success]);

    const verifyCode = () => {
        signUpConfirm(email, state.confirmationCCode, setSuccess,setLodaer);
        setLodaer(true);
    };


    const onPressResendCode = () => {
        ResendConfirmationCode(email);
    };

    return (
        <>
            <View style={styles.container}>
                {backToSignIn ?
                    <SignInScreen /> :
                    <>
                        <Text style={{ marginTop: 50, marginBottom: 50, fontWeight: "bold", fontSize: 30, letterSpacing: 4, color: "black",}}>Falcon</Text>

                        <Text style={styles.titleMessage}>Falcon App Signup email verification code sent to {email}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(input) => setState({ ...state, confirmationCCode: input })}
                            value={state.confirmationCCode}
                            placeholder="Enter Verification Code"
                            placeholderTextColor="black"
                            keyboardType="number-pad"
                        />
                        <View onPress={text => onPressResendCode(text)}>
                            <TouchableOpacity
                                onPress={onPressResendCode}
                            >
                                <Text style={{ color: "blue", fontSize: 20, cursor: "pointer" }}>Resend Code</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.signInButton,{marginBottom:1}]}>

                            <Button
                                title="Verify Code"
                                onPress={verifyCode}
                            />
                        </View>
                        <View style={styles.signInButton}>
                            <Button
                                title="Back to SignIn"
                                onPress={onPressAlertClose}
                            />
                        </View>
                    </>
                }
            </View>
        </>
    );
};


export default SignUpConfirm;