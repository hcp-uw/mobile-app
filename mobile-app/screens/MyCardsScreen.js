import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import ProfileCard from '../Components/ProfileCard';

export function MyCardsScreen() {
    // Plus button on top right creates new card
    // Single card
    // "Connect!" button under cards
    // On press "Connect!" button;
    // Generates QR code

    return (
        <View style={styles.container}>
            <View style={styles.alignHorizontal}>
                <Text>Your cards are below</Text>
                <TouchableOpacity style={{padding: 10}} onPress={createCard()}>
                    <Image source={require("../assets/plus-sign.png")}/>
                </TouchableOpacity>
            </View>
            {ShowProfileCard()}
        </View>
    );
}

const createCard = () => (
    // check if showQR is true, if so show this card. toggle
    // otherwise, show another blank card
    // because onPress doesn't expect a return
    ShowProfileCard()
)

// Shows All Cards
const ShowProfileCard = () => (
    <ProfileCard/>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
    },
    alignHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});