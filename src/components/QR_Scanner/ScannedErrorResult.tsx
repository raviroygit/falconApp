import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './ScannedErrorStyles';


const ScannedErrorResult: FC<any> = (props) => {

    return (
        <>
            <View style={styles.container}>
                <Icon name="closecircle" size={50} style={styles.icon} />
                <Text style={styles.textSorry}>{props.title ? props.title : ""}</Text>
                <Text style={styles.text}>{props.des ? props.des : ""}</Text>
                <View style={styles.scanButonCont}>
                    <TouchableOpacity
                        onPress={() => props.startScan()}
                    >
                        <Text style={styles.scanButon}>
                            Scan more items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};


export default ScannedErrorResult;