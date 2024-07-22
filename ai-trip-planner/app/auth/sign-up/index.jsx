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
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const CreateAccountHandler = () => {
    if (
      userDetail?.name !== "" &&
      userDetail?.email !== "" &&
      userDetail?.password !== ""
    ) {
      createUserWithEmailAndPassword(
        auth,
        userDetail?.email,
        userDetail?.password
      )
        .then((userCredential) => {
          ToastAndroid.show("Account Created", ToastAndroid.TOP);
          router.replace("/mytrip");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          ToastAndroid.show(errorMessage, ToastAndroid.CENTER);
          // ..
        });
    } else {
      return ToastAndroid.show("Please Enter All Details", ToastAndroid.TOP);
    }
  };
  return (
    <View
      style={{
        paddingTop: 50,
        padding: 25,
        height: "100%",
        backgroundColor: Colors.WHITE,
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
        Create New Account
      </Text>

      <View
        style={{
          marginTop: 80,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Full Name
        </Text>
        <TextInput
          style={Styles.input}
          placeholder="Enter Full Name"
          onChangeText={(value) =>
            setUserDetail({ ...userDetail, name: value })
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
          Email
        </Text>
        <TextInput
          // secureTextEntry={true}
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
          placeholder="Enter Password"
          onChangeText={(value) =>
            setUserDetail({ ...userDetail, password: value })
          }
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={CreateAccountHandler}
          style={{
            backgroundColor: Colors.PIRMARY,
            borderRadius: 99,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              padding: 16,
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit-medium",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("auth/sign-in")}
          style={{
            borderColor: Colors.PIRMARY,
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
            Sign in
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
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});
