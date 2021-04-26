import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default ({onLongPress}) => <MapView style={styles.map} onLongPress={onLongPress} />;

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});
