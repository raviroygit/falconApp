import React, { useState,useRef,useEffect,FC } from 'react';
import { View, StyleSheet, Dimensions,Animated, Easing  } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import styles from './styles';

const Loader:FC<any> = (props) => {
    // const [loder,setLoder]=useState(false);

    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    }, [])
  
    return (
        <>
            <View style={styles.container}>
                <AnimatedLoader
                    visible={true}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}
                    source={require("../../Assest/Animation/LootieAnimation.json")} 
                    progress={animationProgress.current}
                    />
            </View>
        </>
    );
};



export default Loader;
