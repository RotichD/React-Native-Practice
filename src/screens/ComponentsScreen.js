import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const Subtitle = <Text style={styles.subHeaderStyle}>My name is Dylan</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      {Subtitle}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
