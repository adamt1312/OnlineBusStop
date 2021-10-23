import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import bus_stops from "../assets/bus_stops.json";
import { Input, Block } from "galio-framework";
import { AntDesign } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";

const AllStopsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState(bus_stops);
  const [data, setData] = useState(bus_stops);

  const searchFilterFunction = (text) => {
    setSearch(text);
    const newData = originalData.filter((item) => {
      const item_name = item.stop_name.toUpperCase();
      const textData = text.toUpperCase();
      // console.log(item_name);
      return item_name.indexOf(textData) > -1;
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
        underlayColor={"#001C2F"}
      >
        <Text style={styles.stop_name}>{stop_name}</Text>
      </TouchableHighlight>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#003052" }}>
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: "#003052",
    padding: 0,
    borderBottomColor: "#001C2F",
    borderBottomWidth: 5,
    height: 70,
    justifyContent: "center",
  },
  stop_name: {
    fontSize: 32,
    color: "white",
    fontFamily: "Roboto",
    paddingLeft: 20,
  },
  btn: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 5,
    justifyContent: "center",
  },
});
export default AllStopsScreen;
