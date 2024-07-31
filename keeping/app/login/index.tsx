import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../../assets/images/LoginBanner.jpg")}
        style={{
          width: "100%",
          height: 520,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Lunch & Dinner
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit",
            fontSize: 17,
            color: "gray",
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personality is a good thing
          for a person. Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={styles.button}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
              color: "white",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },

  button: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 99,
    marginTop: "20%",
  },
});
