import React, { useState, FC, Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ListView } from 'react-native';
import { signOutUser } from '../UserPool/SignOut';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import QR_CodeScanner from '../QR_Scanner/QR_CodeScanner';
import styles from './styles';

const RedeemPoints: FC<any> = (props) => {
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


                        <View style={styles.row4}>
                            <View style={styles.pointTxttp}>
                                <Text style={styles.pointTxttp}>Total Points</Text>
                                <Text style={styles.pointTxttp2}>4251 </Text>
                            </View>

                        </View>



                        <View style={styles.pointTxttp3}>
                            <Text style={styles.pointTxttp4}>
                                Choose a shop near you to have your products delivered to.
                                Your pick up date will di!er depending on the chosen shop.
                            </Text>
                        </View>

                        <View style={styles.inputbox}>
                            <TextInput style={styles.input}
                                placeholder="Search zip code"
                                placeholderTextColor="black"
                            />
                        </View>


                        <View style={styles.screen}>
                            <ScrollView style={styles.scroll}
                                onScroll={({ nativeEvent }) => { }}
                                scrollEventThrottle={400} >
                                <View style={styles.divider3} />
                                <View style={styles.scrollfelxdir }>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>

                                <View style={styles.divider3} />
                                <View style={styles.listrow}>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>
                                <View style={styles.divider3} />

                                <View style={styles.divider3} />
                                <View style={styles.listrow}>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>
                                <View style={styles.divider3} />

                                <View style={styles.divider3} />
                                <View style={styles.listrow}>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>
                                <View style={styles.divider3} />

                                <View style={styles.divider3} />
                                <View style={styles.listrow}>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>
                                <View style={styles.divider3} />
                                <View style={styles.listrow}>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>
                                <View style={styles.divider3} /> 
                            </ScrollView>

                            {/* <ScrollView style={styles.scroll}>
                            <View style={styles.divider3} />
                                <View style={styles.listrow}>
                                    <Text style={styles.scrolltext1}>Kannabis Works</Text>
                                    <Text style={styles.scrolltext2}>151515251 Santa Ana, CA</Text>
                                </View>
                                <View style={styles.divider3} />
                            </ScrollView> */}
                        </View>

                    </>
                }

            </View>
        </>
    );
};

export default RedeemPoints;

function enableSomeButton() {
    throw new Error('Function not implemented.');
}