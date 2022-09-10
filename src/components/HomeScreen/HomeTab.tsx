import React, { useEffect, useState, FC } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, Button, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import falconScreenShot from '../../Assest/img/logo.jpeg';
import { signOutUser } from '../UserPool/SignOut';
import SignIn from '../AuthScreen/SignIn';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import QR_CodeScanner from '../QR_Scanner/QR_CodeScanner';
import styles from './styles';
import RedeemPointsHistory from './RedeemPointsHistory';

const HomeTab: FC<any> = (props) => {

    const [backToSignIn, setBackToSignIn] = useState(false);
    const [scanner, setScanner] = useState(false);
    const [redeemPoints, setRedeemPoints] = useState(false);


    const onPresLoutOut = () => {
        props.onPressCloseDialog();
        signOutUser(props.email);
        if (props.email) {
            setBackToSignIn(true);
            props.signInFalse();
            props.resetState();
        };
    };

    const handleRedeemPoints = () => {
        setRedeemPoints(true);
    }
    const onPresScanQrCode = () => {
        setScanner(true);
    };

    const backToHomeScreen = () => {
        setScanner(false);
    };

    const backToHomeTab = () => {
        setRedeemPoints(false);
    }

    return (
        <>

            <View style={styles.container}>
                {scanner && !redeemPoints ? <QR_CodeScanner backToHomeScreen={backToHomeScreen} /> :
                    !redeemPoints ?
                        <>
                            {/* <View >
                            <Text style={styles.welconText}>
                                Welcome To Falcon App
                            </Text>
                        </View> */}

                            <View style={styles.row}>
                                <View >
                                    <Text style={styles.UserNameText}>Username - Falcon</Text>
                                </View>
                                <View >
                                    <TouchableOpacity
                                        onPress={onPresScanQrCode}>
                                        <Text><IconFontAwesome name='qrcode' size={25} /></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.ambTierText}>Ambassador Tier</Text>
                                </View>
                                <View>
                                    <Text style={styles.viewProgBlank}>View Progress <Icon name='doubleright' /></Text>
                                </View>
                            </View>


                            <View style={styles.row}>
                                <View style={styles.pointsCont}>
                                    <Text style={styles.totalPointTxt}>Total Points </Text>
                                    <Text style={styles.pointTxt}>4251</Text>

                                </View>
                                <View style={styles.activityCont}>
                                    <Text style={styles.activityTxt}>Account Activity <Icon name='doubleright' size={15} /></Text>
                                </View>
                            </View>

                            <View style={styles.merButtonCont}>
                                <TouchableOpacity
                                    onPress={handleRedeemPoints}
                                >
                                    <Text style={styles.buttonTxt}>Redeem Points </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row3}>
                                <View style={styles.pointsCont}>
                                    <Text style={styles.totalPointTxt2}>Current Order</Text>
                                    <Text style={styles.pointTxt2}>Order # 5151515</Text>
                                    <Text style={styles.pointTxt2}>Shop name</Text>
                                    <Text style={styles.pointTxt2}>Date placed</Text>

                                </View>

                                <View style={styles.merButtonCont2}>
                                    <TouchableOpacity
                                        onPress={handleRedeemPoints}
                                    >
                                        <Text style={styles.buttonTxt}>Details</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.row3}>
                                <View style={styles.pointsCont}>
                                    <Text style={styles.totalPointTxt2}>Earn more points this week!</Text>
                                    <View style={styles.imgCont}>
                                        <ScrollView >

                                            <Image
                                                source={falconScreenShot}
                                                style={styles.img}
                                                resizeMode="contain"
                                            />


                                        </ScrollView>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.row3}>
                                <View style={styles.pointsCont}>
                                    <Text style={styles.totalPointTxt2}>Available for redemption!</Text>
                                    <View style={styles.imgCont}>
                                        <Image
                                            source={falconScreenShot}
                                            style={styles.img}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.row3}>
                                <View style={styles.pointsCont}>
                                    <Text style={styles.totalPointTxt2}>Fresh drip from the source!</Text>
                                    <View style={styles.imgCont}>
                                        <Image
                                            source={falconScreenShot}
                                            style={styles.img}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </View>



                            {/* <View style={styles.imgCont}>
                                <Image
                                    source={falconScreenShot}
                                    style={styles.img}
                                    resizeMode="contain"
                                />
                            </View> */}

                            <View style={styles.prodButtonCont}>

                            </View>
                        </> : <RedeemPointsHistory backToHomeTab={backToHomeTab} />
                }


            </View>
        </>
    );
};

export default HomeTab;