import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export function MyCardsScreen() {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});