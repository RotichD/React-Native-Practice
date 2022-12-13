import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const WarningMessage = () => {
  return <Text>Text needs to be at least 5 characters</Text>;
};

const TextScreen = () => {
  const [name, setName] = useState("");
  console.log(name.length);

  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newValue) => setName(newValue)}
        style={styles.input}
        value={name}
      />
      <Text>My name is {name}</Text>
      {name.length < 5 ? WarningMessage() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
