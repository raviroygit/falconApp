import React,{FC} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import NoImage from '../../Assest/img/noimage.png';
import styles from './congratsStyles';

const Congratulations:FC<any> = (props) => {

    const handleSearchAgain = () => {
          props.handleSearchAgain();
    };
    return (
        <View
            style={styles.container}
        >
            <View>
                <Text style={styles.congTxt}>Congratulations!</Text>
                <Text style={styles.hvEarnTxt}> You've earned</Text>
                <Text style={styles.pt}>{props.redeemPoint}</Text>
                <Text style={styles.ptTxt}>Points</Text>
            </View>
            <View style={styles.imgCont}>
                <Image
                    source={NoImage}
                />
                <Text style={styles.imgDownTxt}>
                    Thank you for your purchase of {props.productDescription}
                </Text>
            </View>
            <View style={styles.btnCont}>
                <TouchableOpacity
                    onPress={handleSearchAgain}
                >
                    <Text style={styles.btnTxt1}>
                        Scan more items
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnCont2}>
                <TouchableOpacity
                    onPress={props.backToHomeScreen}
                >
                    <Text style={styles.btnTxt2}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Congratulations;