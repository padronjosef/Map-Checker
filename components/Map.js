import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default ({ onLongPress, points, pointsFilter }) => (
  <MapView style={styles.map} onLongPress={onLongPress}>
    {pointsFilter
      ? points.map((x) => (
          <Marker
            title={x.name}
            key={x.name}
            coordinate={x.coordinate}
            title={x.name}
          />
        ))
      : null}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 50,
    width: Dimensions.get("window").width,
  },
});
