import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [temporalPoint, setTemporalPoint] = useState([]);
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_point");
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point")
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
    setVisibilityFilter('all_points')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <>
            <Input
              title="Name"
              placeholder="Point Name"
              onChangeText={handleChangeText}
            />
            <Button title="Add Point" onPress={handleSubmit} />
          </>
          )
          : <List points={points}/>
        }
      </Modal>
      <Panel onPressLeft={handleList} textLeft='List'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
