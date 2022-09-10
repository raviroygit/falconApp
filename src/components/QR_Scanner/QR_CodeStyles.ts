import { StyleSheet,Dimensions } from "react-native";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    constainer: {
      alignItems: 'center',
      backgroundColor: "white", flex: 1, alignItems: "center",
      height: windowHeight, resizeMode: 'contain', width: windowWidth
    },
  
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: -25,
    },
    scanButton: {
      marginTop: 50,
      backgroundColor: "#55d6ed",
      height: 50,
      width: 200,
      alignItems: "center",
      marginLeft: 0,
      borderWidth: 1,
      borderRadius: 5
    },
    homeButton: {
      marginTop: 10,
      backgroundColor: "#58e898",
      height: 50,
      width: 200,
      alignItems: "center",
      marginLeft: 0,
      borderWidth: 1,
      borderRadius: 5
    },
    scanButtonText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      marginTop: 0
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
      marginBottom: 20,
      marginRight: 20
    },
    headers: {
      fontSize: 30,
      fontWeight: "bold",
      color: "black",
      textAlign: "center"
    },
    infoTxt: {
      fontSize: 17,
      fontWeight: "bold",
      color: "black",
      marginTop: 5,
      marginBottom: 20
    }
  });
  
  export default styles;