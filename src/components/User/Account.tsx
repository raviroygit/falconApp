
import React ,{FC, useEffect}from 'react';
import {Button, StyleSheet,Text, View} from 'react-native';
import { signOutUser } from '../UserPool/SignOut';
import { useSelector } from 'react-redux';

const AccountTab:FC<any>=()=>{

    const userEmail= useSelector(state=>state.userEmail);

    const onPresLoutOut = () => {
        signOutUser(userEmail);
  
    };

  

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:50}}>Manage Account</Text>
            <Button title='Logout' color="red" onPress={onPresLoutOut}/>
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
export default AccountTab;