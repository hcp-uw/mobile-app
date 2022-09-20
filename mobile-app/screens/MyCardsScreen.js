import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import ProfileCard from '../Components/ProfileCard';

export function MyCardsScreen() {
    // Plus button on top right creates new card
    // Single card
    // "Connect!" button under cards
    // On press "Connect!" button;
    // Generates QR code

    return (
        <View style={styles.container}>
            <Text>Your cards are below</Text>
            {ShowProfileCard()}
            <Button
                title="Connect!"
                onPress={ShowQR()}
            />
        </View>
    );
}

// Shows All Cards
const ShowProfileCard = () => (
    <ProfileCard/>
)

// QR Code Component
const ShowQR = () => (
    <QRCode
        value="https://en.wikipedia.org/wiki/Cat"
    />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
    },
});