import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function HistoryScreen() {
    const [text, setText] = useState("");

    const save = async () => {
        try {
            AsyncStorage.setItem("myName", text);
        } catch(error) {
            alert(error);
        }
    }

    const load = async () => {
        try {
            let name = await AsyncStorage.getItem("myName");
            if(name !== null) {
                setText(name);
            }
        } catch (error) {
            alert(error);
        }
    }

    const remove = async () => {
        try {
            AsyncStorage.removeItem("myName");
        } catch(error) {
            alert(error);
        } finally {
            setText("");
        }
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{height: 30}}>{text}</Text>
            <Text style={styles.name}> What's your name?</Text>

            <TextInput style={styles.input} onChangeText={text => setText(text)}/>

            <TouchableOpacity style={styles.button} onPress={() => save()}>
                <Text style={{color: "white"}}>Save my name</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => remove()}>
                <Text style={{color: "white"}}>Remove my name</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize:24,
        fontWeight: "300",
    },
    input: {
        borderWidth: 1,
        borderColor: "#575DD9",
        alignSelf: "stretch",
        margin: 32,
        height: 64,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: "300",
    },
    button: {
        backgroundColor: "#575DD9",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 6,
    }
});