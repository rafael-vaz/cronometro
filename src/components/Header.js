import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { header } from "../styles/index";

class Header extends Component {
  render() {
    let imageIcon = require("../images/timer-icon.svg");

    return (
      <View style={[header.background]}>
        <Image style={header.image} source={imageIcon} />
        <Text style={[header.text]}>Cronômetro</Text>
      </View>
    );
  }
}

export default Header;
