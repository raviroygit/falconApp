import React, { useEffect, useState,FC } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, Button, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import falconScreenShot from '../../Assest/img/FalconScreenShot.png';
import { signOutUser } from '../UserPool/SignOut';
import SignIn from '../AuthScreen/SignIn';
import Icon from 'react-native-vector-icons/AntDesign';
import QR_CodeScanner from '../QR_Scanner/QR_CodeScanner';
import styles from './styles';

const HomeScreen:FC<any> = (props) => {

    const [backToSignIn, setBackToSignIn] = useState(false);
    const [scanner, setScanner] = useState(false);

    const onPresLoutOut = () => {
        props.onPressCloseDialog();
        signOutUser(props.email);
        if (props.email) {
            setBackToSignIn(true);
            props.signInFalse();
            props.resetState();
        };
    };

    const onPresScanQrCode = () => {
        setScanner(true);
    };

    const backToHomeScreen = () => {
        setScanner(false);
    };


    return (
        <>

            <View style={styles.container}>
                {scanner ? <QR_CodeScanner backToHomeScreen={backToHomeScreen} /> :
                    <>
                        {backToSignIn ? <SignIn setBackToSignIn={setBackToSignIn} /> :
                            <>
                                <View style={{ marginTop: -70 }}>
                                    <TouchableOpacity
                                        onPress={onPresLoutOut}
                                    >
                                        <Text style={styles.logoutButtonText}>LogOut</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.welconText}>
                                        Welcome To Falcon App

                                    </Text>

                                </View>
                                <View style={styles.divider} />
                                <View style={styles.row}>
                                    <View style={styles.ambTierCon}>
                                        <Text style={styles.ambTierText}>Ambassador Tier</Text>
                                    </View>
                                    <View style={styles.viewProg}>
                                        <Text style={styles.viewProgBlank}>View Progress <Icon name='doubleright' size={15} style={{ marginTop: 50 }} /></Text>
                                    </View>

                                </View>
                                <View style={styles.divider2} />

                                <View style={styles.row2}>
                                    <View style={styles.pointsCont}>
                                        <Text style={styles.totalPointTxt}>Total Points </Text>
                                        <Text style={styles.pointTxt}>4251 </Text>

                                    </View>
                                    <View style={styles.activityCont}>
                                        <Text style={styles.activityTxt}>Account Activity <Icon name='doubleright' size={15} style={{ marginTop: 50 }} /></Text>
                                        <Text style={styles.activityTxtBlank}> </Text>

                                        <View onPress={onPresScanQrCode} style={styles.merButtonCont}>
                                            <TouchableOpacity
                                                onPress={onPresScanQrCode}
                                            >
                                                <Text style={styles.buttonTxt}>Redeem for Merchandise </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.prodButtonCont}>
                                    <TouchableOpacity

                                    >

                                        <Text style={styles.buttonTxt}>Redeem for Product</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.imgCont}>
                                    <Image
                                        source={falconScreenShot}
                                        style={styles.img}
                                        resizeMode="contain"
                                    />
                                </View>

                            </>
                        }
                    </>
                }

            </View>
        </>
    );
};


export default HomeScreen;