import React from 'react';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

// 1. Import 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyCardsScreen } from './screens/MyCardsScreen';
import { ScanScreen } from './screens/ScanScreen';
import { HistoryScreen } from './screens/HistoryScreen';

// Actual app begins here
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={{
    top: -30,
    justifyContent: 'center',
    alignContent: 'center',
  }} onPress={onPress}>
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#57B8EE',
      ...styles.shadow
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

// need to figure out:
// How to add more space above icons (so it matches figma)
// How to make scan button 
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Scan'
      tabBarOptions={{
        showLabel: false
      }}>
      <Tab.Screen
        name="My Cards"
        component={MyCardsScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Image source={require("./assets/MyCardsIcon.png")} style={{ width: 20, height: 20 }} />
              <Text color="#646464">My Cards</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require("./assets/ScanIcon.png")}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: '#fff' }}
              />
              <Text color='#fff'>Scan</Text>
            </View>
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require("./assets/historyIcon.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text color="646464">History</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});