// ISSUES
// Kebob button; buttons are not showing

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

function ProfileCard ({ item, index }) {

    const[isShowingButton, setShowingButton] = React.useState(false)

    let Pfp = (props) => <Avatar.Icon {...props} icon="folder" style={{ textAlign: 'center' }} />
    
    return (
        <View style={{ padding: 20 }}>
            <Card style={styles.card}>
                <Card.Content style={{ alignItems: "flex-end" }}>
                    <View>
                        { isshowingButton ?
                        (
                        <Button title="Edit"/>
                        ) : (
                            <TouchableOpacity onPress={() => setShowingButton(true)}>
                                    <Image source={require("../assets/Kebab.png")} />
                            </TouchableOpacity>
                        )
                        }
                    </View>
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

    title: {
        textAlign: 'center',
        marginVertical: 8,
    }
});

export default ProfileCard;