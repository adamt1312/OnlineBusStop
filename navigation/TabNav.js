import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import AllStopsScreen from "../screens/AllStopsScreen";
import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import search from "../screens/search";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const TabNav = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 10,
            color: "white",
            borderWidth: 5,
            borderColor: "red",
            // justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "row",
          },

          tabBarStyle: { backgroundColor: "#001C2F" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <AntDesign
                  name="home"
                  size={30}
                  color={focused ? "white" : "#003052"}
                />
                {/* <Text
                  style={{
                    fontSize: 15,
                    marginBottom: 3,
                    color: focused ? "white" : "#003052",
                    bottom: 0,
                  }}
                >
                  Home
                </Text> */}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="All Stops"
          component={AllStopsScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {/* <MaterialCommunityIcons
                  name="bus-stop"
                  size={30}
                  color={focused ? "white" : "#003052"}
                /> */}
                <Entypo
                  name="list"
                  size={30}
                  color={focused ? "white" : "#003052"}
                />
                {/* <Text
                  style={{
                    fontSize: 15,
                    marginBottom: 3,
                    color: focused ? "white" : "#003052",
                    bottom: 0,
                  }}
                >
                  All stops
                </Text> */}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNav;
