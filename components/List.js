import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default ({ points, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={closeModal} title="Close" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 15,
  },
  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 40,
    justifyContent: "center",
    padding: 20,
  },
});
