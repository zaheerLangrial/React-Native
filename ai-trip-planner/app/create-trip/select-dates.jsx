import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import MyContext from "../../context/myContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const context = useContext(MyContext);
  const { tripData, setTripData } = context;
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Select Dates",
    });
  });

  useEffect(() => {
    if (tripData?.startDate && tripData.endDate) {
      setTripData({
        ...tripData,
        totalDays: (tripData?.endDate.diff(tripData?.startDate, "days")) + 1,
      });
    } else {
        setTripData({...tripData, totalDays: ''})
    }
  }, [tripData.startDate,tripData.endDate]);

  const handleDate = (date, type) => {
    if (type === "START_DATE") {
       setTripData({ ...tripData, startDate: moment(date) });
    } else {
      setTripData({ ...tripData, endDate: moment(date) });
    }
  };
  return (
    <View
      style={{
        marginTop: 30,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginBottom: 20,
          color: Colors.GRAY,
        }}
      >
        Travel Dates
      </Text>

      <CalendarPicker
        onDateChange={handleDate}
        allowRangeSelection={true}
        minDate={new Date()}
      />

<View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          // disabled={tripData?.travelerMember === '' ? false : true}
          onPress={() => router.push("/create-trip/select-budget")}
          style={{
            padding: 15,
            backgroundColor: Colors.PIRMARY,
            borderRadius: 15,
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit-medium",
              fontSize: 17,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
