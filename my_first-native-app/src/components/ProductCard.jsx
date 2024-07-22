import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const ProductCard = ({ product }) => {
    console.log('Product=====>', product)
  return (
    <View className="border">
      <Image
        source={{ uri: product.images[0] }} // Assuming your product object has an 'image' property
        resizeMode="cover"
      />
      <Text>{product.title || '--'}</Text>
      <Text>${product.price}</Text>
    </View>
  );
};
export default ProductCard;
