import React from "react";
import { StyleSheet, View, Modal, Dimensions } from "react-native";

export default ({ children, visibility }) => (
  <Modal animationType="slide" transparent={true} visible={visibility}>
    <View style={styles.center}>
      <View style={styles.modalView}>{children}</View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, .3)",
  },
  modalView: {
    minWidth: Dimensions.get("window").width - 100,
    backgroundColor: "#FFF",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
