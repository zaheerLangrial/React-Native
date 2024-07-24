import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { router, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import MyContext from "../../context/myContext";
import { auth, fireDB } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function TripReview() {
  const navigation = useNavigation();
  const context = useContext(MyContext);
  const { tripData } = context;
  const user = auth.currentUser;

  const tripViewStructure = [
    {
      id: 1,
      icon: "location-sharp",
      title: "Destination",
      value: tripData?.cityName || "-",
    },
    {
      id: 2,
      icon: "people-outline",
      title: "Travelers",
      value: tripData?.travelerMember || "-",
    },
    {
      id: 3,
      icon: "calendar-sharp",
      title: "Selected Dates",
      value: `${tripData?.startDate || "-"} to  ${tripData?.endDate || "-"}`,
    },
    {
      id: 4,
      icon: "cash-sharp",
      title: "Selected Budget",
      value: tripData?.budget || "-",
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Review Trip",
    });
  });

  const addTripHandler = async () => {
    if (user) {
      try {
        await addDoc(collection(fireDB, "trips"), {
          userId: user.uid,
          startDate: tripData.startDate,
          endDate: tripData.endDate,
          budget: tripData.budget,
          travelerMember: tripData.travelerMember,
          cityName: tripData.cityName,
        });
        ToastAndroid.show("Trip Build Successfully", ToastAndroid.BOTTOM);
        router.replace("/mytrip");
      } catch (error) {
        ToastAndroid.show(error, ToastAndroid.BOTTOM);
        console.log("error", error);
      }
    } else {
      router.push("/");
    }
  };

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Review Your Trip
      </Text>

      <FlatList
        data={tripViewStructure}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingVertical: 20,
              paddingHorizontal: 16,
              backgroundColor: Colors.WHITE,
              borderRadius: 24,
              marginTop: 20,
            }}
          >
            <View>
              <Ionicons name={item?.icon} size={35} color="black" />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 22,
                }}
              >
                {item?.title}
              </Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                {item?.value}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View
        style={{
          marginTop: 20,
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          // disabled={tripData?.travelerMember === '' ? false : true}
          onPress={addTripHandler}
          style={{
            padding: 15,
            backgroundColor: Colors.PIRMARY,
            borderRadius: 15,

            // paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit-medium",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Build My Trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
