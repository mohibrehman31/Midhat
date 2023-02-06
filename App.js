import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import OTP from "./screens/OTP";

export default function App() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#192648", "#0A1634", "black"]}
      style={styles.container}
    >
      <Signup />
      {/* <Welcome /> */}
      {/* <OTP /> */}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
