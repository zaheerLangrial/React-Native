import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const signInHandle = () => {
    if (userDetail?.email !== "" && userDetail?.password !== "") {
      signInWithEmailAndPassword(auth, userDetail?.email, userDetail?.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await AsyncStorage.setItem("user", JSON.stringify(user));
          router.replace("/(tabs)");
          ToastAndroid.show("Login Successfully", ToastAndroid.BOTTOM);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
        });
    } else {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        paddingTop: 50,
        padding: 25,
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => router.back()}
      />
      <Text
        style={{
          marginTop: 30,
          fontFamily: "outfit-bold",
          fontSize: 40,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontFamily: "outfit",
          fontSize: 30,
          color: "gray",
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          color: "gray",
        }}
      >
        You've been missed!
      </Text>

      <View
        style={{
          marginTop: 60,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput
          style={Styles.input}
          placeholder="Enter Email"
          onChangeText={(value) =>
            setUserDetail({ ...userDetail, email: value })
          }
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={Styles.input}
          placeholder="Enter Email"
          onChangeText={(value) =>
            setUserDetail({ ...userDetail, password: value })
          }
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={signInHandle}
          style={{
            backgroundColor: "black",
            borderRadius: 99,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              padding: 16,
              color: "white",
              textAlign: "center",
              fontFamily: "outfit-medium",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/auth/sign-up")}
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 99,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              padding: 16,
              textAlign: "center",
              fontFamily: "outfit-medium",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "gray",
    fontFamily: "outfit",
  },
});
