import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from '../../SearchScreen';
import Drawer from '../Component/Drawer'
import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { CommonHeader } from "../Component/CommonHeader";
import { DrawerActions } from 'react-navigation';
import DummyScreen from "../../DummyScreen"



const Navigation = createStackNavigator(
  {
    Drawer: Drawer
    ,
    SearchScreen: SearchScreen
    ,
    Drawer: Drawer,

    DummyScreen: DummyScreen



  },


  {
    initialRouteName: "Drawer",
    headerMode: "none",
  }


)
const Appc = createAppContainer(Navigation);

export default Appc;