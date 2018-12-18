import React, { Component } from "react";
import { View, Image, Text } from "react-native";

export const PininterestComponent = props => {
  return (
    <View style={{ margin:5,backgroundColor:'white',elevation: 8,shadowColor:'black',shadowOpacity:6,borderRadius:20}}>
    <View style={{}} >
      <Image
        style={{ width: props.width, height: props.height,borderTopRightRadius:7,borderTopLeftRadius:7 }}
        source={{
          uri: props.data.images["170x"].url
        }}
      />
      <View style={{ backgroundColor: "white", alignItems: "center" }}>
        <Text style={{ width: 150,marginBottom:5 }}>{props.data.grid_title}</Text>

        <View style={{ flexDirection: "row", alignItems: "center",marginBottom:5 }}>
          <Image
            style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              marginRight: 5
            }}
            source={{
              uri: props.data.pinner.image_small_url
            }}
          />
          <Text style={{ width: 100, fontSize: 10, color: "grey" }}>
            {props.data.pinner.full_name}
          </Text>
        </View>

<View style={{ flexDirection: "row", alignItems: "center" }}>
<Image
            style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              resizeMode:'contain',
              marginRight: 5
            }}
            source={
              require('../images/pin_gray_icon.png')
            }
          />
 <Text style={{ width: 40, fontSize: 10, color: "grey" }}>
            {props.width}
          </Text>

          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode:'contain',
              marginRight: 5
            }}
            source={require('../images/like_icon.png')}
          />
 <Text style={{ width: 40, fontSize: 10, color: "grey" }}>
            {props.height}
          </Text>
</View>

<View style={{height:0.5,width:"100%",backgroundColor:'grey',marginTop:5}}/>
      
        <View style={{ flexDirection: "row", alignItems: "center",marginTop:10,marginBottom:10 }}>
          <Image
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              marginRight: 5
            }}
            source={{
              uri: props.data.pinner.image_medium_url
            }}
          />
          <View style={{flexDirection:'column'}}>
          <Text style={{ width: 120, fontSize: 13, fontWeight: "bold" }}>
            {props.data.pinner.full_name}
          </Text>
          <Text style={{ width: 100, fontSize: 13,color:'grey' }}>
            {props.name}
          </Text>
          </View>
        </View>
      </View>
    </View>
    </View>
  );
};
