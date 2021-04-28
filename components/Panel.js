import React from "react";
import { Dimensions, StyleSheet, Button, View } from "react-native";

export default ({ onPressLeft, textLeft, onPressRight }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button onPress={onPressRight} title="Show/Hide" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: Dimensions.get("window").width - 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
