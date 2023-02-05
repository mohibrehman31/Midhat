import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Battoon from "../components/Battoon";
const Signup = () => {
  return (
    <View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2, backgroundColor: "#1E1E1E" }}>
        <Image
          source={require("../assets/background.png")}
          style={{ width: 350, height: 300 }}
        />
      </View>
      <View style={styles.button}>
        <Battoon title={"Sign up"} title2={"Dont Have An Account?"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  button: {
    flex: 2,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Signup;
