import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Battoon from "./components/Battoon";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("C://Users//Mohib//Desktop//Midhat//my//assets//background.png")}
        style={{ height: 750, width: 360 }}
        resizeMode="contain"
      />
      <Battoon title="Sign In" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
});
