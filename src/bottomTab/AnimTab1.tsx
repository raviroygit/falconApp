import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons/Icons';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import HomeScreen from '../components/HomeScreen/HomeTab';
import AccountTab from '../components/User/Account';
import RedeemTab from '../components/User/Redeem';
import MerchantTab from '../components/Merchant/Merchant';


const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.FontAwesome, activeIcon: 'home', inActiveIcon: 'home', component: HomeScreen, },
  { route: 'Redeem', label: 'Redeem', type: Icons.MaterialIcons, activeIcon: 'redeem', inActiveIcon: 'redeem', component:RedeemTab  },
  { route: 'Merchant', label: 'Merchant', type: Icons.FontAwesome, activeIcon: 'diamond', inActiveIcon: 'diamond', component: MerchantTab },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component:AccountTab  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState, route } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.black : Colors.darkGray} style={undefined} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab1() {
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 75,
          position: 'absolute',
          // bottom: 16,
          // right: 16,
          // left: 16,
          borderRadius: 16,
          borderColor:Colors.black,
          borderTopWidth:2,
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} onPress={item.onPress} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  }
})