import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
        overflow: "scroll",
        flex: 1,
        alignItems: 'center',
        paddingTop: '20%',
        padding: 1,
        backgroundColor: "white",
        height: windowHeight, 
        resizeMode: 'contain', 
        width: windowWidth
    },
    signInBottomTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "black"
    }
    ,
    input: {
        borderWidth: 2,
        borderColor: "#20232a",
        width: '85%',
        padding: '2%',
        borderRadius: 5,
        color: "#20232a",
        textAlign: "center",
        // fontSize: 10,
        // marginBottom: 10
    },
    signInButtonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: '25%',
        width: windowWidth,

    },
    signInButton: {
        alignItems: "center",
        backgroundColor: "#ffff",
        padding: 10,
        borderWidth: 1,
        borderRadius: 1,
        "&:hover": {
            backgroundColor: "#ea6e6e"
        },
    },
    header:{
        marginBottom: '10%', 
        fontWeight: "bold", 
        fontSize: 50, 
        letterSpacing: 4, 
        color: "black",
    },
});

export default styles;