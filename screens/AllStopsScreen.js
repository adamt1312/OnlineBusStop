import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import bus_stops from "../assets/bus_stops.json";

const Item = ({ stop_name }) => (
  <View style={styles.item}>
    <Text style={styles.stop_name}>{stop_name}</Text>
  </View>
);

const AllStopsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <Item stop_name={item.stop_name} />;
  return (
    <FlatList
      data={bus_stops}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      initialNumToRender={15}
      onEndReachedThreshold={0.5}
      onEndReached={() => console.log("YEP")}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#003052",
    padding: 15,
    borderBottomColor: "#001C2F",
    borderBottomWidth: 5,
  },
  stop_name: {
    fontSize: 32,
    color: "white",
    fontFamily: "Roboto",
  },
});
export default AllStopsScreen;
