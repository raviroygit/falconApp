import { PresignedPost } from 'aws-sdk/clients/s3';
import React, { useState, FC, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Analytics } from 'aws-amplify';

const Alert: FC<any> = (props) => {

  const [code, setCode] = useState('');
  const [cognitoUser, setCognitoUser] = useState();

  const onPressClose = async () => {
    props.onPressCloseDialog();
    props.getVerificationCode(code);
  

  }

  useEffect(() => {
    async () => {
      const cognitoUser = await AsyncStorage.getItem("cognitoUser");
   
      if (cognitoUser) {
        setCognitoUser(cognitoUser);
      }
    }
  }, [cognitoUser]);

  return (
    <View style={styles.body}>
      <Modal
        visible={props.alertWarning}
        transparent
        onRequestClose={() =>
          props.onPressCloseDialog()
        }
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Icon name="warning" style={{ color: 'red' }} size={50} />
            </View>

            <View style={styles.warning_body}>
              <Text style={styles.text}>{props.error}</Text>
            </View>
            <Pressable
              onPress={() => onPressClose()}
              style={styles.warning_button}
              android_ripple={{ color: '#fff' }}
            >
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 30
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default Alert;