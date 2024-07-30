import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useEffect, useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import AsyncStorage from "@react-native-async-storage/async-storage";

type IData = { adnanPrice: number; shahzadPrice: number };

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [priceData, setPriceData] = useState<IData>({
    adnanPrice: 0,
    shahzadPrice: 0,
  });

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Adnan",
        value: "adnanMalik",
      },
      {
        id: "2",
        label: "Shahzad",
        value: "xyz",
      },
    ],
    []
  );

  const getLocaleStorageData = async () => {
    const data = await AsyncStorage.getItem("data");
    if(data !== null) {
      setPriceData(JSON.parse(data as string));
    }
  };

  useEffect(() => {
    getLocaleStorageData();
  }, [priceData]);

  const handleAddProcess = async () => {
    try {
      if (selectedId === "1") {
        console.log("Adnan Malik");

        console.log('priceINput value ===>', priceInput)
        await AsyncStorage.setItem(
          "data",
          JSON.stringify({
            ...priceData,
            adnanPrice: priceData?.adnanPrice + Number(priceInput),
          })
        );
        
      } else {
        await AsyncStorage.setItem(
          "data",
          JSON.stringify({
            ...priceData,
            shahzadPrice: priceData?.shahzadPrice + Number(priceInput),
          })
        );
      }

      setPriceInput("");
      ToastAndroid.show('Add Successfully', ToastAndroid.BOTTOM)
    } catch (error) {
      console.error("Error saving data:", error);
      ToastAndroid.show('Something wants wrong', ToastAndroid.TOP);
    }
  };

  const handleDeductProcess = async () => {
    try {
      if (selectedId === "1") {
        await AsyncStorage.setItem(
          "data",
          JSON.stringify({
            ...priceData,
            adnanPrice: priceData?.adnanPrice - Number(priceInput),
          })
        );
        
      } else {
        await AsyncStorage.setItem(
          "data",
          JSON.stringify({
            ...priceData,
            shahzadPrice: priceData?.shahzadPrice - Number(priceInput),
          })
        );
      }

      setPriceInput("");
      ToastAndroid.show('Deduct Successfully', ToastAndroid.BOTTOM)
    } catch (error) {
      console.error("Error saving data:", error);
      ToastAndroid.show('Something wants wrong', ToastAndroid.TOP);
    }
  };
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
          <Text style={Styles.personsText}>Adnan Bolach</Text>
          <Text style={Styles.rs}>{priceData?.adnanPrice ?? 0}/-</Text>
        </View>
        <View style={Styles.persons}>
          <Ionicons name="person-outline" size={34} color="black" />
          <Text style={Styles.personsText}>Shahzad Mastoi</Text>
          <Text style={Styles.rs}>{priceData?.shahzadPrice ?? 0}/-</Text>
        </View>
      </View>

      <Image
        source={{
          uri: "https://png.pngtree.com/thumb_back/fw800/background/20240707/pngtree-red-glow-banner-background-image_15990915.jpg",
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
            value={priceInput}
            onChangeText={(value) => setPriceInput(value)}
            keyboardType="numeric"
            placeholder="Amount"
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
          <TouchableOpacity style={Styles.button} onPress={handleDeductProcess}>
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
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  persons: {
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
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.orange,
  },
});
