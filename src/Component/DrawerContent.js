import {View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground} from 'react-native';
import React,{Component} from 'react';
import {NavigationActions} from 'react-navigation';


export default class DrawerContent extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <ScrollView style={{flex:1}}>
          <ImageBackground style={{backgroundColor:'orange',justifyContent:'center',alignItems:'center',height:150}}
          source={require("../images/drawer_bg.jpeg")}>
              <Image
                source={require("../images/myprofile_icon.png")}
                style={{width:100,height:100}}
                resizeMode="contain"
              />
              <Text style={{fontSize:20,color:'white'}}>Sumedh Ulhe</Text>
              </ImageBackground>
              
             
           
            <View style={{flex:1}}>
              {/* {navigation.state.routes.map(route =>
                this.renderDrawerItem(route, route.routeName)
              )} */}
              <View style={{height:20}}></View>
               <TouchableOpacity onPress={this.navigateToScreen('SearchScreen')}>
               <View style={{flexDirection:'row',marginLeft:10,marginBottom:5,alignItems:'center'}}>
               <Image source={require('../images/search_icon.png')} style={{height:20,width:20,marginRight:5}}/>
               <Text style={{height:30,fontSize:18,marginTop:5}}>Search Screen</Text>
               </View>
               </TouchableOpacity>

             <TouchableOpacity onPress={this.navigateToScreen('DummyScreen')}>
               <View style={{flexDirection:'row',marginLeft:10,marginBottom:5,alignItems:'center'}}>
               <Image source={require('../images/message_icon.png')} style={{height:20,width:20,marginRight:5}}/>
               <Text style={{height:30,fontSize:18,marginTop:5}}>Dummy Screen</Text>
               </View>
               </TouchableOpacity>
            </View>
          </ScrollView>
        );
    }

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.closeDrawer();
        this.props.navigation.dispatch(navigateAction);
    })

    renderDrawerItem(route, routeName) {
        const { descriptors } = this.props;
        return (
          <TouchableOpacity
            style={{}}
            key={route.key}
           // onPress={() => this.onItemPress(route)}
          >
             {descriptors[routeName].options.drawerIcon("#ad2960")} 
            <Text style={{}}>
              {descriptors[routeName].options.drawerLabel}
            </Text>
          </TouchableOpacity>
        );
    }     
}