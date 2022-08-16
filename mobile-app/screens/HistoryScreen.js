import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function HistoryScreen() {
    const [value, setText] = useState("no data");

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@input_text', value);
            console.log("data stored");
        } catch (e) {
            console.log("something broke");
        }
    }

    const getData = async () => {

        AsyncStorage.getItem('@input_text').then((input) => {
            console.log(input);
            setText(input);
            console.log("data read");
        }).catch(error => console.log(error));
    }

    const handleChange = (text) => {
        storeData(text);
        getData();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{value}</Text>
            <TextInput style={styles.input} onChangeText={(text) => handleChange(text)} value={value}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});