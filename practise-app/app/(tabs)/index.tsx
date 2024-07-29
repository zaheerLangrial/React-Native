import {
  StyleSheet,
  Text,
  Platform,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState("");
  const [priceData, setPriceData] = useState({
    adnanPrice: "300",
    shahzadPrice: "100",
  });
  console.log("SelectedId --->", selectedId);

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Malik Adnan",
        value: "adnanMalik",
      },
      {
        id: "2",
        label: "Xyz",
        value: "xyz",
      },
    ],
    []
  );

  const handleAddProcess = () => {
    
  }
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <Text
        style={{
          marginTop: 60,
          fontSize: 35,
          // fontWeight: 'bold',
          fontFamily: "outfit-bold",
          color: Colors.orange,
        }}
      >
        Well come Back
      </Text>

      <View style={Styles.personsContainer}>
        <View style={Styles.persons}>
          <Ionicons name="person-outline" size={34} color="black" />
          <Text style={Styles.personsText}>Malik Adnan</Text>
          <Text style={Styles.rs}>{priceData.adnanPrice}/-</Text>
        </View>
        <View style={Styles.persons}>
          <Ionicons name="person-outline" size={34} color="black" />
          <Text style={Styles.personsText}>xyz</Text>
          <Text style={Styles.rs}>{priceData.shahzadPrice}/-</Text>
        </View>
      </View>

      <Image
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fw800/background/20240707/pngtree-red-glow-banner-background-image_15990915.jpg',
        }}
        style={{
          width: "100%",
          height: 100,
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 35,
            // fontWeight: 'bold',
            fontFamily: "outfit-bold",
            color: Colors.orange,
          }}
        >
          Plus and Divide
        </Text>
        <View style={Styles.enterAmountContainer}>
          <Text
            style={{
              color: Colors.orange,
              fontFamily: "outfit-medium",
              fontSize: 16,
            }}
          >
            Enter Amount
          </Text>
          <TextInput
            style={{
              width: "30%",
              borderWidth: 1,
              borderColor: Colors.orange,
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 16,
            }}
          />
        </View>
        <RadioGroup
          layout="row"
          containerStyle={{
            display: "flex",
          }}
          labelStyle={{
            color: Colors.orange,
            fontFamily: "outfit-medium",
          }}
          radioButtons={radioButtons}
          onPress={(value: string) => setSelectedId(value)}
          selectedId={selectedId}
        />
        <View style={Styles.buttonContainers}>
          <TouchableOpacity style={Styles.button} onPress={handleAddProcess}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "outfit-bold",
                fontSize: 20,
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "outfit-bold",
                fontSize: 20,
              }}
            >
              Deduct
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  personsContainer: {
    // borderWidth: 1,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  persons: {
    // borderWidth: 1,
    borderRadius: 16,
    gap: 4,
    width: 170,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orangeNormal,
  },
  personsText: {
    fontFamily: "outfit-medium",
    fontSize: 18,
  },
  rs: {
    backgroundColor: Colors.orange,
    borderRadius: 99,
    color: "white",
    paddingHorizontal: 8,
    fontSize: 14,
  },
  enterAmountContainer: {
    display: "flex",
    gap: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainers: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
    // borderWidth: 1,
    padding: 16,
    // textAlign: 'center',
    borderRadius: 8,
    backgroundColor: Colors.orange,
  },
});
