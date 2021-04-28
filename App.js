import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [temporalPoint, setTemporalPoint] = useState([]);
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_point");
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setTemporalPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: temporalPoint, name: name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  const closeModal = () => {
    setVisibility(false);
  };

  const togglePointsFilter = () => {
    setPointsFilter(!pointsFilter);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        pointsFilter={pointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Name"
              placeholder="Point Name"
              onChangeText={handleChangeText}
            />
            <View style={styles.row}>
              <Button title="Add Point" onPress={handleSubmit} />
              <Button title="Cancel" style="cancel" onPress={closeModal} />
            </View>
          </View>
        ) : (
          <List points={points} closeModal={closeModal} />
        )}
      </Modal>
      <Panel
        onPressLeft={handleList}
        textLeft="List"
        onPressRight={togglePointsFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
