import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
import AllStopsScreen from "../screens/AllStopsScreen";
import TabNavigator from "../navigation/TabNavigator";
import * as React from "react";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNav" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
