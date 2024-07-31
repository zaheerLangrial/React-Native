import { View } from "react-native";
import Login from "./login";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [user, setUser] = useState();

  const checkUser = async () => {
    const isUser = await AsyncStorage.getItem("user");
    console.log('User ======>' , JSON.parse(isUser as string))
    setUser(JSON.parse(isUser as string));
  };
  useEffect(() => {
    checkUser();
  }, []);
  return <View>{user ? <Redirect href={"/(tabs)"} /> : <Login />}</View>;
}
