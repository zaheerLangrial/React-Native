import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import MyContext from "../../context/myContext";

const selectTravelerData = [
  {
    id: 1,
    travelerMember: "only me",
  },
  {
    id: 2,
    travelerMember: "a couple",
  },
  {
    id: 3,
    travelerMember: "family",
  },
  {
    id: 4,
    travelerMember: "friends",
  },
];

export default function SelectTraveler() {
  const navigation = useNavigation();
  const context = useContext(MyContext);
  const { tripData, setTripData } = context;
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Select Traveler",
    });
  }, []);

  const handleSelectOption = (travelerMember) => {
    setTripData({ ...tripData, travelerMember: travelerMember }); // Update selectedOption state
  };

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.heading}>Who's Going?</Text>
        <Text style={{ color: Colors.GRAY, fontSize: 20, paddingTop: 30 }}>
          Choose Your Travelers
        </Text>

        <FlatList
          data={selectTravelerData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectOption(item.travelerMember)} // Update onPress handler
              key={item.id}
              style={{
                padding: 20,
                marginBottom: 10,
                borderColor:
                  tripData?.travelerMember === item.travelerMember
                    ? "#00FF00"
                    : Colors.GRAY,
                borderWidth: 1,
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "outfit-medium",
                  fontSize: 23,
                  textTransform: "capitalize",
                  color: Colors.GRAY,
                }}
              >
                {item.travelerMember}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()} // Ensure keyExtractor returns a string
          style={{ paddingTop: 25 }}
        />
      </View>
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
          onPress={() => router.push("/create-trip/select-dates")}
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

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 40,
    fontFamily: "outfit-bold",
  },
});
