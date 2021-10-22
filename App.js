import * as React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AllStopsScreen from "./screens/AllStopsScreen";
import TabNav from "./navigation/TabNav";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <TabNav />
      <StatusBar hidden={true} translucent={true} />
    </NavigationContainer>
  );
}

export default App;
