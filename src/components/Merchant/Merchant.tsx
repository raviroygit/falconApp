import React ,{FC}from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MerchantTab:FC<any>=()=>{

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:50}}>Manage Merchant</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        overflow: "scroll",
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
})
export default MerchantTab;