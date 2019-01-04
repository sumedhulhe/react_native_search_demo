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

//import { DrawerNavigator } from 'react-navigation'
const numColumns = 2;
import { PininterestComponent } from "./src/Component/PininterestComponent";
import  {CommonHeader}  from "./src/Component/CommonHeader";
import { CommonHeaderWithTextInput } from "./src/Component/CommonHeaderWithTextInput";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
  
   
    this.state = {
      isSearchClicked: false,
      arrayholder: [],
      dataSource:[]
    };
  }

  componentDidMount() {
    return fetch("https://demo6231795.mockable.io")
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            dataSource: response.resource_data_cache[0].data.results,
            arrayholder: response.resource_data_cache[0].data.results
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.changeLayoutOnSearchClick(this.state.isSearchClicked)}
        <FlatList
          contentContainerStyle={{
           
            alignItems: "center",
            backgroundColor: "white",
            
          }}
          data={this.state.arrayholder}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => this.renderItem(item)}
          numColumns={numColumns}
        />
      </View>
    );
  }

  renderItem(item, item1) {
    return (
      <PininterestComponent
        data={item}
        width={item.images["170x"].width}
        height={item.images["170x"].height}
        name={item.pinner.username}
      />
    );
  }

  changeLayoutOnSearchClick(isSearchClicked) {
    if (isSearchClicked == true) {
      return (
        <CommonHeaderWithTextInput
          action={this.showCommonHeader}
          text={this.getSearchText}
        />
      );
    } else {
      return <CommonHeader action={this.handler} navigation={this.props.navigation}/>;
    }
  }
  handler=()=> {
    this.setState({ isSearchClicked: true });
  }

  showCommonHeader=()=> {
    this.setState({ isSearchClicked: false });
  }

  getSearchText = (text) => {
   
    if (text != "") {
      const filtered_data = this.state.dataSource.filter(data => {
        if ((data.pinner.full_name.toLowerCase()).includes((text.toLowerCase()))) {
          return data;
        }
      });
      
      this.setState({
        arrayholder: filtered_data
      });
    } else {
      this.setState({
        arrayholder: this.state.dataSource
      });
    }
  };
  
}

