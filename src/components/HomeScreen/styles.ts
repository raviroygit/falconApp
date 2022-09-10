import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: "white",
        height: windowHeight,
        width: windowWidth
    },

    signInButtonContainer: {
        flex: 1,
        // justifyContent: 'flex-end',
        marginBottom: 0,
        width: 100,
        backgroundColor: "blue",
        borderRadius: 20,
        height: 50,
        marginTop: 60
    },
    logoutButtonText: {
        marginLeft: 250,
        marginTop: 10,
        textAlign: "center",
        color: "blue",
        fontSize: 20,
        cursor: "pointer",
        alignItems: "center"
    },
    welconText: {
        marginBottom: 10,
        fontWeight: "bold",
        color: "black",
        fontSize: 25
    },
    divider: {
        borderWidth: 1,
        borderColor: 'black',
        width: '92%',
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%'
    },
    row3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    ambTierText: {
        justifyContent: 'space-evenly',
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        marginRight: '30%'
    },
    UserNameText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        marginRight: '55%'
    },
    viewProg: {
        height: 30,
        size: 30,
        // flexDirection: "column",
    },
    viewProgBlank: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    row2: {
        flexDirection: "row",
        flex: 1,
        marginTop: 50
    },
    divider2: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        width: 400,
        marginTop: 30
    },
    pointsCont: {
        flexDirection: "column",
    },
    totalPointTxt: {
        marginTop: '-25%',
        fontWeight: "bold",
        fontSize: 20,
        color: "black"
    },
    totalPointTxt2: {
        marginTop: '1%',
        fontWeight: "normal",
        fontSize: 15,
        color: "black"
    },
    pointTxt: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    pointTxt2: {
        fontWeight: "normal",
        fontSize: 15,
        color: "black",
    },
    pointTxt1: {
        marginLeft: 30,
        marginTop: -15,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 40,
        color: "black"
    },
    activityCont: {
        flexDirection: "column",
    },
    activityTxt: {
        marginLeft: '36%',
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    activityTxt2: {
        marginLeft: '32%',
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    activityTxtBlank: {
        marginTop: -15,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
    },
    merButtonCont: {
        alignSelf: 'center',
        width: '90%',
        borderWidth: 2,
        borderRadius: 5,
        fontWeight: "bold",
    },
    merButtonCont2: {
        alignSelf: 'flex-start',
        width: '50%',
        borderWidth: 2,
        borderRadius: 5,
        fontWeight: "bold",
        marginLeft: '13%',
        height: 70,
        padding: '5%'
    },
    buttonTxt: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        cursor: "pointer",
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
        fontWeight: "bold",
    },

    prodButtonCont: {
        height: '10%',
    },

    imgCont: {
        height: '100%',
        alignContent: 'flex-start',

    },
    img: {
        width: 200,
        height: 80,
        margin: '1%',
        marginTop: 8,
        alignSelf: 'center',

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
        marginLeft: '20%',
        fontSize: 17,
    },
    pointTxttp2: {
        width: windowWidth,
        fontWeight: "bold",
        fontSize: 40,
        marginLeft: '20%',
    },
    pointTxttp3: {
        width: windowWidth,
        fontWeight: "normal",
        padding: '5%',
        justifyContent: 'space-between',
    },
    pointTxttp4: {
        fontSize: 12,
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: "#20232a",
        padding: '2%',
        borderRadius: 7,
        color: "#20232a",
        textAlign: "center",
        marginRight: '5%',
        marginLeft: '5%',
    },
    inputbox: {
        width: windowWidth,
    },

    //list
    screen: {
        width: windowWidth,
        // marginTop: '5%',
        // marginLeft: '4%',
        //marginRight: '5%',
        padding:18,

    },

    listrow: {

        backgroundColor: '#ffffff',
        width: windowWidth,
        padding: '2%',
        borderRadius: 1,
        marginTop: 5
    },
    scroll: {
        backgroundColor: '#FFFFFF',
    },
    divider3: {
        borderWidth: 0.5,
        borderColor: 'black',
        width: '100%',
        alignSelf: 'center',
    },
    scrolltext1: {
        fontSize:20,
        paddingBottom:2,
    },
    scrolltext2: {
        fontSize:18,
        paddingTop:2,
    },
    scrollfelxdir:{
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width: windowWidth,
        padding: '2%',
        borderRadius: 1,
        marginTop: 5
    },

    //design



});

export default styles;