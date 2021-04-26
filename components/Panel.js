import React from "react";
import { Dimensions, StyleSheet, Button, View } from "react-native";

export default ({onPressLeft, textLeft}) => {
  return (
    <View style={styles.panel}>
      <Button onPressLeft={onPressLeft} title={textLeft}/>
      <Button title="Show/Hide" />
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
