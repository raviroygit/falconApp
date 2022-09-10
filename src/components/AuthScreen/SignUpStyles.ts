import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        padding: 6,
        width: '75%',
        borderRadius: 5,
        color: "#20232a",
        textAlign: "center",
        marginBottom: 10
    },
    signInButtonContainer: {
         flex: 1,
         width: windowWidth,
         marginTop: '5%',
         marginBottom: 1,
         bottom:5,
    },
    signInButton: {
        alignItems: "center",
        backgroundColor: "#ffff",
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        "&:hover": {
            backgroundColor: "#ea6e6e"
        },
    }
});

export default styles;