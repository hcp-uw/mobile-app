// ISSUES
// "Connect" button; TypeError: onPress is not a function. (In 'onPress(event)', 'onPress' is an instance of Object)

// TODO
// Work on spacing and layout
// Use textInput for making a new card
// Manage multiple cards
// Create new card

// need help on improving readability;
// want to be able to do something like import { SingleCard } from './screens/Card';
// but can only import other files from the biggest src directory in react native.
// how to work around this?

// I ended up breaking up the QR and Single Card in separate functions, but in this same file.


import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Used for Single Card Component
// import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

export function MyCardsScreen() {
    // Plus button on top right creates new card
    // Single card
    // "Connect!" button under cards
    // On press "Connect!" button;
    // Generates QR code

    return (
        <View style={styles.container}>
            <Text>One of your cards are below</Text>
            {SingleCard()}
            <Button
                title="Connect!"
                onPress= {ShowQR()}
            />
        </View>
    );
}

// Picture for Single Card
const Pfp = props => <Avatar.Icon {...props} icon="folder" />

// Single Card Component
const SingleCard = () => (
    <View style={{padding: 20}}>
        <Card style={{elevation: 50, height: 400, width: 250}}>
            <Card.Content>
                {Pfp()}
                <Title>Your Name</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
        </Card>
    </View>
);

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