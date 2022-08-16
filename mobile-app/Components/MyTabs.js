// 1. Import 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyCardsScreen } from '../screens/MyCardsScreen';
import { ScanScreen } from '../screens/ScanScreen';
import { HistoryScreen } from '../screens/HistoryScreen';

import {
    Image,
    View,
    Text,
  } from 'react-native';

import { CustomTabBarButton } from './CustomTabBarButton';

// Actual app begins here
const Tab = createBottomTabNavigator();

// need to figure out:
// How to add more space above icons (so it matches figma)
// How to make scan button 
export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Scan'
    // tabBarOptions={{
    //   tabStyle: {height: 0},
    //   style: {backgroundColor: 'transparent'}
    // }}>
    screenOptions={{
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
      <Tab.Screen
        name="My Cards"
        component={MyCardsScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
              <Image source={require("../assets/MyCardsIcon.png")} style={{ width: 20, height: 20 }} />
              <Text style={{color: '#646464', fontSize: 12}}>My Cards</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require("../assets/ScanIcon.png")}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: '#fff' }}
              />
              <Text style={{color: '#fff'}}>Scan</Text>
            </View>
          ),

          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
          headerTitle: ''    
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
              <Image
                source={require("../assets/historyIcon.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{color: '#646464', fontSize: 12}}>History</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}