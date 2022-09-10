import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center",
        backgroundColor: "white", height: windowHeight,
        resizeMode: 'contain', width: windowWidth
    },
    congTxt: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold"
    },
    hvEarnTxt: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 50
    },
    pt: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 80
    },
    ptTxt: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 70
    },
    imgCont: {
        width: 250, boder: 2, color: "black",
        marginLeft: 50, height: 250
    },
    imgDownTxt: {
        color: "black",
        textAlign: "center",
        marginBottom: 10,
        marginRight: 70
    },
    btnCont: {
        marginBottom: 6,
        width: 300,
        borderWidth: 2, borderRadius: 5,
        height: 50
    },
    btnTxt1: {
        color: "black", marginRight: 70, textAlign: "center",
        fontSize: 20,
        shadowOffset: { width: 56, height: 13 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        marginLeft: 70,
        marginTop: 10
    },
    btnCont2: {
        marginBottom: 36,
        width: 300,
        borderWidth: 2, borderRadius: 5,
        height: 50
    },
    btnTxt2: {
        color: "black", marginRight: 70, textAlign: "center",
        fontSize: 20,
        shadowOffset: { width: 56, height: 13 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        marginLeft: 70,
        marginTop: 10
    }
});

export default styles;