import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import SearchScreen from '../../SearchScreen';

export const CommonHeader = (props) => {
    state: {
        isSearchClicked: false
    }

    return (
        <View style={{ height: 60 }}>
            <View style={{ height: '100%', flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>



                <View style={{ height: '100%', justifyContent: 'center', flex: 0.15, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={props.action}>
                        <Image style={{ height: 30, width: 30, resizeMode: 'contain' }}
                            source={require('../images/search_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: '100%', justifyContent: 'center', flex: 0.7, alignItems: 'center' }}>
                    <Image style={{ height: 30, width: 150, resizeMode: 'contain' }}
                        source={require('../images/pinterest_text_logo.png')} />
                </View>
                <View style={{ height: '100%', justifyContent: 'center', flex: 0.15 }}>
                    <Image style={{ height: 40, width: 40, resizeMode: 'stretch' }}
                        source={require('../images/myprofile_icon.png')} />
                </View>
            </View>
        </View>


    )
}