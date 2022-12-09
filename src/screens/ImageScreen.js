import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Image Screen</Text>
      <ImageDetail
        title='Forest'
        imageSource={require("../../assets/forest.jpg")}
        imageScore='3'
      />
      <ImageDetail
        title='Beach'
        imageSource={require("../../assets/beach.jpg")}
        imageScore='4'
      />
      <ImageDetail
        title='Mountain'
        imageSource={require("../../assets/mountain.jpg")}
        imageScore='5'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default ImageScreen;
