import React from "react";
import { View, Text } from "react-native";
import Box from "../components/Box";
import Battoon from "../components/Battoon";
const OTP = () => {
  return (
    <View>
      <View style={{ marginTop: 200, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 40, fontWeight: "bold" }}>
          OTP
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
          Please Enter the 6-digit OTP sent to your mobile number
        </Text>
      </View>
      <View
        style={{
          // width: 300,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 100,
          //   width: 200,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Box width={"40"} />
        <Box width={"40"} />
        <Box width={"40"} />
        <Box width={"40"} />
        <Box width={"40"} />
        <Box width={"40"} />
      </View>
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <Battoon title={"Verify"} title2={"Didn't Recieve An OTP?"} />
      </View>
    </View>
  );
};
export default OTP;
