import React from "react";
import { View, Text } from "react-native";
import Box from "../components/Box";
import Battoon from "../components/Battoon";
const Welcome = () => {
  return (
    <View>
      <View style={{ marginTop: 200, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 40, fontWeight: "bold" }}>
          Welcome Back !
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            width: 250,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Enter Your registered Mobile Number To Recieve OTP.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 100,
          width: 160,
          marginLeft: 90,
        }}
      >
        <Box plch={"+92"} />
        <Box plch={"3XX-XXXXXX"} />
      </View>
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <Battoon title={"Verify"} title2={"Didn't Recieve An OTP?"} />
      </View>
    </View>
  );
};
export default Welcome;
