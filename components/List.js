import React from "react";
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

export default ({ points }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
      <View><Button title="Close" /></View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 300,
  }
})