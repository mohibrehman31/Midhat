import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import OTP from "./screens/OTP";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Signup /> */}
      {/* <Welcome /> */}
      <OTP />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
});
