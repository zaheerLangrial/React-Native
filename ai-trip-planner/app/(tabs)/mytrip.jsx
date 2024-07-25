import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import Trips from "../../components/MyTrips/Trips";
import { auth, fireDB } from "../../config/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export default function MyTrip() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    user && fetchTrips();
  }, [user]);

  const fetchTrips = async () => {
    try {
      const q = query(
        collection(fireDB, "trips"),
        // orderBy("timestamp", "desc"),
        // orderBy('time','desc'),
        where("userId", "==", user?.uid)
      );
      const querySnapShot = await getDocs(q);
      let tripsArr = [];
      querySnapShot.forEach((doc) => {
        tripsArr.push({
          ...doc.data(),
        });
      });
      console.log("arr", tripsArr);
      setUserTrips(tripsArr);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {userTrips?.length === 0 ? <StartNewTripCard /> : <Trips />}
    </View>
  );
}
