import React, { Component } from 'react';
import { View, Image, Text,TextInput } from 'react-native';
import SearchScreen from '../../SearchScreen';


export const CommonHeaderWithTextInput = (props) => {
    state:{
        searchText:''
    }
    return (
        <View style={{ height: 60 }}>
            <View style={{ height: '100%', flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>

                <View style={{ height: '100%', justifyContent: 'center', flex: 0.15, alignItems: 'center' }}>
                    <Image style={{ height: 30, width: 30, resizeMode: 'contain' }}
                        source={require('../images/pinterest_logo.png')} />
                </View>
                <TextInput style={{ flex: 0.5 }} autoFocus={true} onBlur={props.action}
                onChangeText={text => props.text(text) } ></TextInput>
                <View style={{ height: '100%', justifyContent: 'center', flex: 0.15 }}>
                    <Image style={{ height: 30, width: 30, resizeMode: 'contain' }}
                        source={require('../images/search_icon.png')} />
                </View>
                <View style={{ height: '100%', justifyContent: 'center', flex: 0.15}}>
                    <Image style={{ height: 30, width: 30, resizeMode: 'contain' }}
                        source={require('../images/message_icon.png')} />
                </View>
                <View style={{ height: '100%', justifyContent: 'center', flex: 0.15}}>
                    <Image style={{ height: 30, width: 30, resizeMode: 'contain' }}
                        source={require('../images/myprofile_icon.png')} />
                </View>
            </View>
        </View>
    )
}