// ISSUES
// Kebob button; buttons are not showing

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

function ProfileCard({ item, index }) {

    let showOptions = () => (
        <View>
            <Button
                title="Edit"
                onPress=""
            />
            <Button
                title="Delete"
                onPress=""
            />
        </View>
    )

    let Pfp = (props) => <Avatar.Icon {...props} icon="folder" style={{ textAlign: 'center' }} />

    return (
        <View style={{ padding: 20 }}>
            <Card style={styles.card}>
                <Card.Content style={{ alignItems: "flex-end" }}>
                    <TouchableOpacity onPress={showOptions}>
                        <Image source={require("../assets/Kebab.png")} />
                    </TouchableOpacity>
                </Card.Content>
                <Card.Content style={{ alignItems: "center" }}>
                    <Paragraph style={{ padding: 10 }}>Card Type</Paragraph>
                    {Pfp(this.props)}
                    <Title style={{ padding: 10 }}>Your Name</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        elevation: 50,
        height: 400,
        // width: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#D0D0D0",
    },
});

export default ProfileCard;