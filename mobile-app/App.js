// This is the mini project;
// basic "scan" and "generate" screens
// bottom tabs
// (useful in QR code page)

// NOTES
// need to check that inputValue is always a String
// need declare var inputValue??
// make sure it can loop eg multiple inputs generate multiple QR
// how to save URI to variable on press????

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import - Bottom Tabs / Layout
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {View, Text, TextInput} from 'react-native';

// Import - QR Code (https://github.com/gevgasparyan/rn-qr-generator)
import RNQRGenerator from 'rn-qr-generator';

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
    <Text>
      {'Type anything, and we\'ll convert it to a QR code!'}
    </Text>
    <TextInput
      onChangeText={text => setInputValue(text)}
    />
    <Button
      title='Generate QR Code'
      onPress={codeURI => generateQR(inputValue)} // change input value to textbox value, save code
    />
    <Text>
      {'Code will show here when you press "Generate QR Code"' // show code
      }
    </Text>
    <Image source={{uri: codeURI}}
       style={{width: 100, height: 100}} />
    

  </View>
);

const setInputValue = (text) => (
  inputValue = text
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

// QR Code
const generateQR = (inputValue) => (
  RNQRGenerator.generate({
    value: inputValue, // 'https://github.com/gevgasparyan/rn-qr-generator', // Text value to be converted into QR
    height: 100,
    width: 100,
  })
    .then(response => {
      const { uri, width, height, base64 } = response;
      this.setState({ imageUri: uri });
    })
    .catch(error => console.log('Cannot create QR code', error))
);

// Detect QR code in image
RNQRGenerator.detect({
  uri: PATH_TO_IMAGE
})
  .then(response => {
    const { values } = response; // Array of detected QR code values. Empty if nothing found.
  })
  .catch(error => console.log('Cannot detect QR code in image', error));