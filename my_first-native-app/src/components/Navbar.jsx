import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ArrowLeft from "react-native-vector-icons/AntDesign";
import Menu from "react-native-vector-icons/Feather";

const Navbar = ({ title, onLeftButtonPress, onRightButtonPress }) => {
  return (
    <View className="flex-row justify-between pb-4 px-5 pt-12 bg-orange-500 items-center">
      <TouchableOpacity className="" onPress={onLeftButtonPress}>
        <ArrowLeft name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Text className="text-white text-lg font-bold">{title}</Text>
      <TouchableOpacity onPress={onRightButtonPress}>
        <Menu name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
