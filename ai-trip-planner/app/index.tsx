import { Text, View,StyleSheet } from "react-native"
import Login from '../components/Login';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Login />
    </View>
  );
}

// const styles = StyleSheet.create({
//   text:{
//     fontSize:30,
//     color:'red',
//     fontFamily: 'outfit-bold'
//   }
// })