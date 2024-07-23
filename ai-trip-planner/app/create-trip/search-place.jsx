import { router, useNavigation, useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/myContext";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constants/Colors";

export default function SearchPlace() {
  const context = useContext(MyContext);
  const { tripData, setTripData } = context;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // headerTransparent: true
      headerTitle: "Search City",
    });
  });

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Peshawar",
    "Quetta",
    "Gujranwala",
    "Sialkot",
    "Bahawalpur",
    "Sargodha",
    "Abbottabad",
    "Sukkur",
    "Jhelum",
    "Mirpur (Azad Kashmir)",
    "Murree",
    "Muzaffarabad",
    "Gwadar",
  ];

  const handleSearch = (text) => {
    const filteredCities = cities.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    setFilteredCities(filteredCities);
  };

  const selectCity = (city) => {
    setSearchQuery(city);
    setTripData({ ...tripData, cityName: city });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          City
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Search city..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 2 && (
          <FlatList
            data={filteredCities}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectCity(item)}>
                <Text style={styles.cityItem}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            style={styles.list}
          />
        )}
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          disabled={searchQuery === tripData?.cityName ? false : true}
          onPress={() => router.push("/create-trip/select-traveler")}
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
  list: {
    marginTop: 10,
  },
  cityItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
