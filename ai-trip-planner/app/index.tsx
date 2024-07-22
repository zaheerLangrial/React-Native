import { View } from "react-native";
import Login from "../components/Login";
import { auth } from "@/config/firebase";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;
  console.log('user', user)
  return (
    <View>
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
      <Login />
    </View>
  );
}
