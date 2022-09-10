import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "white", flex: 1, alignItems: "center",
        height: windowHeight, resizeMode: 'contain', width: windowWidth, padding: 100
    },

    input: {
        borderWidth: 2,
        borderColor: "#20232a",
        width: 250,
        borderRadius: 6,
        color: "#20232a",
        textAlign: "center",
        // fontSize: 10,
        marginBottom: 10,
        marginTop: 20
    },

    signInButton: {
        marginTop: 30
    },
    titleMessage: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "black"
    }
});

export default styles;