import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// import CardCarousel from '../Components/CardCarousel';
import CarouselCards from '../Components/snapCarousel';

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

            <CarouselCards />
        </View>

    );
}

const createCard = () => {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
    },
    alignHorizontal: {
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
});