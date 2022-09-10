import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center",
        backgroundColor: "white", height: windowHeight,
        resizeMode: 'contain', width: windowWidth
    },
    text: {
        color: "black"
    },
    textSorry: {
        color: "black",
        fontSize: 40,
    },
    icon: {
        color: "black",
        marginTop: 70,
        marginBottom: 20

    },
    scanButon: {
        color: "black", marginRight: 70, textAlign: "center",
        fontSize: 20,
        shadowOffset: { width: 56, height: 13 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        marginLeft: 70,
        marginTop: 10,

    },
    scanButonCont:{
        marginBottom: 6,
        width: 300,
        borderWidth: 2, borderRadius: 5,
        height: 50,
        marginTop: 200
    }
});

export default styles;