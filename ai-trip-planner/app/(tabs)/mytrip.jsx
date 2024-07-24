import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import Trips from "../../components/MyTrips/Trips";
// import { collection, doc, getDoc, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { auth, fireDB } from "../../config/firebase";
import { collection, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";

export default function MyTrip() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState();
 


  useEffect(() => {
    fetchTrips();
},[])

  const fetchTrips = async () => {
    try {
      const q = query(collection(fireDB, "trips"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        console.log('queryShoot', QuerySnapshot)
        let tripArray = [];
        QuerySnapshot.forEach((doc) =>
          tripArray.push({
            ...doc?.data(),
            id: doc?.id,
          })
        );
        setUserTrips(tripArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  console.log('usertrips ==> ', userTrips)
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
