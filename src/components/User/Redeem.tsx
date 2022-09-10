import React, { useState, FC, Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ListView,
} from "react-native";
import { signOutUser } from "../UserPool/SignOut";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import QR_CodeScanner from "../QR_Scanner/QR_CodeScanner";
import styles from "./redeem";
import Icon from "react-native-vector-icons/FontAwesome";

const RedeemTab: FC<any> = (props) => {
  const [backToSignIn, setBackToSignIn] = useState(false);
  const [scanner, setScanner] = useState(false);

  const onPresLoutOut = () => {
    props.onPressCloseDialog();
    signOutUser(props.email);
    if (props.email) {
      setBackToSignIn(true);
      props.signInFalse();
      props.resetState();
    }
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
        {scanner ? (
          <QR_CodeScanner backToHomeScreen={backToHomeScreen} />
        ) : (
          <>
            <View style={styles.row}>
              <View>
                <Text style={styles.UserNameText}>Username - Falcon</Text>
              </View>
              <View>
                <TouchableOpacity onPress={onPresScanQrCode}>
                  <Text>
                    <IconFontAwesome name="qrcode" size={25} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row4}>
              <View style={styles.pointTxttp}>
                <Text style={styles.pointTxttp}>Flowers</Text>
              </View>
            </View>

            <View style={styles.container1}>
              <View style={styles.powderblue}>
                <Icon style={styles.imagesize} name="img1" size={150} />
                <View >
                  <Text style={styles.textsize}>CRU 3.5G Flower</Text>
                  <Text style={styles.textsize}>Lavender Kush</Text>
                  <Text style={styles.textsize}>Indica Dominant</Text>
                </View>
              </View>
              <View style={styles.skyblue}>
                <Icon style={styles.imagesize} name="doubleright" size={150} />
                <View>

                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default RedeemTab;