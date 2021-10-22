import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import AllStopsScreen from "../screens/AllStopsScreen";
import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TabNav = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 13, color: "white" },

          tabBarStyle: { backgroundColor: "#001C2F" },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AllStops" component={AllStopsScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNav;
