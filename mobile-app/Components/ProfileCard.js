import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

class ProfileCard extends React.Component {
    render() {
        return (
            <View style={{ padding: 10 }}>
                <Card style={this.styles.card}>
                    <Card.Content style={{alignItems: "flex-end"}}>
                        <TouchableOpacity onPress={this.showOptions}>
                            <Image source={require("../assets/Kebab.png")}/>
                        </TouchableOpacity>
                    </Card.Content>
                    <Card.Content style={{alignItems: "center"}}>
                        <Paragraph style={{padding: 10}}>Card Type</Paragraph>
                        {this.Pfp(this.props)}
                        <Title style={{padding: 10}}>Your Name</Title>
                        <Paragraph>Card content</Paragraph>
                        {this.ShowQR()}
                    </Card.Content>
                </Card>
            </View>
        )
    }

    ShowQR = () => (
        <QRCode
            value="https://en.wikipedia.org/wiki/Cat"
        />
    )
    
    showOptions = () => (
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

    Pfp = (props) => <Avatar.Icon {...props} icon="folder" style={{textAlign: 'center'}}/>

    styles = StyleSheet.create({
        card: {
            elevation: 50,
            height: 400,
            width: 250,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: "#D0D0D0",
        },
    });
}

export default ProfileCard;