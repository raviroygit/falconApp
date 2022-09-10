import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        overflow: "scroll",
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%'
    },
    UserNameText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        marginRight: '55%'
    },
    signInButtonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: '25%',
        width: windowWidth,

    },
    row4: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        width: windowWidth,
        alignItems: 'center',
        flex: 0,
        justifyContent: 'center'
    },
    pointTxttp: {
        width: windowWidth,
        fontWeight: "bold",
        marginLeft: '5%',
        fontSize: 25,
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        margin: '2%',
        paddingTop: '5%'
    },
    powderblue: {
        width: '50%',
        height: '40%',
        backgroundColor: 'powderblue',
    },
    skyblue: {
        width: '50%',
        height: '40%',
        backgroundColor: 'skyblue',
    },
    steelblue: {
        width: 60,
        height: 60,
        backgroundColor: 'steelblue',
    },
    imagesize: {
        alignSelf: 'stretch'
    },
    textsize:{
        fontSize:10,
    },
   column1: {

    },
});

export default styles;