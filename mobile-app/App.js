// This is the mini project;
// basic "scan" and "generate" screens
// bottom tabs
// (useful in QR code page)

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// main???? - Default
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mini Project</Text>
      <StatusBar style="auto" />
    </View> 
  );
}

// Style - Default
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Screens - Generate
const GenerateScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Generate</Text>
  </View>
);

const GenerateNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Generate" component={GenerateScreen} />
  </Stack.Navigator>
);

// Screens - Scan
const ScanScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Scan</Text>
  </View>
);

const ScanNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Scan" component={ScanScreen} />
  </Stack.Navigator>
);

// Bottom Tabs
const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Scan" component={ScanScreen} />
    <Tab.Screen name="Generate" component={GenerateNavigator} />
  </Tab.Navigator>
);
