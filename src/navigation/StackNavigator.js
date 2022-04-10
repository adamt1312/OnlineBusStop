import { createStackNavigator } from "@react-navigation/stack";
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
