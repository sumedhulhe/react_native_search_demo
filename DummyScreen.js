
import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Alert
} from "react-native";

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Dummy Screen</Text>
            </View>
        );
    }
}