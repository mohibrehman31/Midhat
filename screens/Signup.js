import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Battoon from "../components/Battoon";
const Signup = () => {
  return (
    <View>
      <Image
        source={require("../assets/Logo.png")}
        style={{
          width: 300,
          height: 250,
          marginTop: 10,
          resizeMode: "contain",
          marginLeft: 20,
        }}
      />
      <Image
        source={require("../assets/background.png")}
        style={{
          width: 360,
          height: 300,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Battoon
          title={"Sign up"}
          title2={"Dont Have An Account?"}
          title3={"Sign Up"}
        />
      </View>
    </View>
  );
};

export default Signup;
