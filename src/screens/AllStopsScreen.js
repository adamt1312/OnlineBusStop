import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import bus_stops from "../../assets/bus_stops.json";
import { SearchBar } from "react-native-elements";

const AllStopsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState(bus_stops);
  const [data, setData] = useState(bus_stops);

  const searchFilterFunction = (text) => {
    setSearch(text);
    const newData = originalData.filter((busStop) => {
      const busStopName = busStop.stop_name
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const searchedText = text
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return busStopName.indexOf(searchedText) > -1;
    });
    setData(newData);
  };

  const Item = ({ stop_name, id }) => (
    <View style={styles.item}>
      <TouchableHighlight
        underlayColor="#DDDDDD"
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Home", {
            stop_id: id,
          })
        }
        activeOpacity={0.3}
      >
        <Text style={styles.stop_name}>{stop_name}</Text>
      </TouchableHighlight>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item stop_name={item.stop_name} id={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={15}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <SearchBar
            placeholder="Search a bus stop..."
            value={search}
            onChangeText={(search) => searchFilterFunction(search)}
          />
        }
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003052",
  },
  item: {
    padding: 0,
    borderBottomColor: "#001C2F",
    borderBottomWidth: 5,
    height: 55,
    justifyContent: "center",
  },
  stop_name: {
    fontSize: 25,
    color: "white",
    fontFamily: "Roboto",
    paddingLeft: 20,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
  },
});
export default AllStopsScreen;
