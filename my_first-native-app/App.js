import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import Navbar from "./src/components/Navbar";
import Products from "./src/components/Products";

const App = () => {
  const handleLeftButtonPress = () => {
    console.log("Left button pressed");
  };

  const handleRightButtonPress = () => {
    console.log("Right button pressed");
  };

  return (
    <SafeAreaView className="">
      <Navbar
        title="Store by Hamama"
        onLeftButtonPress={handleLeftButtonPress}
        onRightButtonPress={handleRightButtonPress}
      />
      <View className="h-[150px]">
        <Image
          source={{
            uri: "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
          }}
          className="w-full h-full"
        />
      </View>
      <View>
        <Text className="text-xl font-bold p-3">Popular Products</Text>
        <Products />
      </View>
    </SafeAreaView>
  );
};

export default App;
