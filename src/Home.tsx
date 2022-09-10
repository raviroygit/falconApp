import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import AnimTab1 from './bottomTab/AnimTab1';
import Colors from './constants/Colors';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Fab from './screens/fab/Fab';
import { useSelector } from 'react-redux';
import SignIn from './components/AuthScreen/SignIn';
import { Amplify } from 'aws-amplify';
import 'react-native-gesture-handler';
import awsconfig from './aws-exports';

Amplify.configure({
  Auth: {
    region:awsconfig.aws_cognito_region,
    userPoolId: awsconfig.aws_user_pools_id,
    userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
  },
  authenticationFlowType: 'CUSTOM_AUTH'
});
const App = () => {
  const login = useSelector((state) => state.login);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white} />

      {!login ? <SignIn /> :
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      }

    </SafeAreaView>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Fab" component={Fab} />
    </Stack.Navigator>
  )
}

export default App;
