import React from "react";
import { View, Text, TextInput } from "react-native";

const Box = ({ plch }) => {
  return (
    <View
      style={{
        backgroundColor: "#6D7487",
        height: 45,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <TextInput
        placeholder={plch}
        style={{
          alignSelf: "center",
          textAlign: "center",
        }}
      ></TextInput>
    </View>
  );
};
export default Box;
