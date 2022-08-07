import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from 'react-native';

// 1. Import 
import QRCode from 'react-native-qrcode-svg';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// bottom tab demonstration
function ScanScreen() {
  // QR code scanner
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  // useEffect runs after each render
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    // Note: using StyleSheet.absoluteFillObj breaks scanner
    <View style={styles.container}>
      {/* Work around for letting the scanner scan upon returning to */}
      {isFocused && <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill} />}
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

function MyCardsScreen() {
  // QR code generator
  return (
    <View style={styles.container}>
      <Text>QR code should be below</Text>
      <QRCode
        value="https://en.wikipedia.org/wiki/Cat"
      />
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History Page</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// need to figure out:
// How to add more space above icons (so it matches figma)
// How to make scan button 
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Scan'>
      <Tab.Screen
        name="My Cards"
        component={MyCardsScreen}
        options={{
          tabBarIcon: () => (<Image source={require("./assets/MyCardsIcon.png")} style={{ width: 20, height: 20 }} />)
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: () => (<Image source={require("./assets/ScanIcon.png")} style={{ width: 20, height: 20 }} />)
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: () => (<Image source={require("./assets/historyIcon.png")} style={{ width: 20, height: 20 }} />)
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
});