import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import AllStopsScreen from "../screens/AllStopsScreen";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 10,
            color: "white",
            borderWidth: 5,
            borderColor: "red",
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
                  color={focused ? "white" : "#004a80"}
                />
              </View>
            ),
            swipeEnabled: false,
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
                <Entypo
                  name="list"
                  size={30}
                  color={focused ? "white" : "#004a80"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
