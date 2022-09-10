
import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white", flex: 1, alignItems: "center",
        height: windowHeight, resizeMode: 'contain', width: windowWidth
    },
    lottie: {
        width: 300,
        height: 300,
      },
});

export default styles;