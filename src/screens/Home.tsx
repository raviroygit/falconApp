import React ,{FC}from 'react'
import { StyleSheet, View } from 'react-native';
import AnimTab1 from '../bottomTab/AnimTab1';

const Home:FC<any> = ({ navigation }) => {

  return (
    <View styles={{ flex: 1 }}>
     <AnimTab1/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
