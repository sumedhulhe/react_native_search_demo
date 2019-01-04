//import { createDrawerNavigator,createAppContainer } from "react-navigation";
import {createDrawerNavigator,createAppContainer,DrawerItems,SafeAreaView,DrawerView} from 'react-navigation';
import SearchScreen from "../../SearchScreen";
import DummyScreen from "../../DummyScreen";
import { CommonHeader } from "./CommonHeader";
import DrawerContent from "./DrawerContent";
import React, { Component,Header,Body,Container,Image,ScrollView } from 'react';
const Drawer = createDrawerNavigator(
    
    {
     
        SearchScreen: {screen:SearchScreen,
      },
        DummyScreen:{screen:DummyScreen,
          }
      
    },
     {
      contentComponent:props =><DrawerContent {...props}/>,
       drawerWidth: 300,
       drawerPosition: "left",
       initialRouteName: "SearchScreen",
       drawerOpenRoute:'DrawerOpen',
       drawerCloseRoute:'DrowerClose',
       drawerToggleRoute:'DraweToggle'
       
     }
    
  );
 
  const CustomDrawerContentComponent = (props) => (
<ScrollView style={{backgroundColor:'red'}}>
<SafeAreaView style={{flex:1}} >
 <View style={{backgroundColor:'red',height:200}}>
 <Image style={{width:50,height:100}} source={require('../images/pinterest_logo.png')}/>
</View>
  <DrawerView.Items {...props} />
</SafeAreaView>
</ScrollView>
);


  export default Drawer;