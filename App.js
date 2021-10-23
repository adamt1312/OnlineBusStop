import * as React from "react";
import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AllStopsScreen from "./screens/AllStopsScreen";
import TabNavigator from "./navigation/TabNavigator";
import StackNavigator from "./navigation/StackNavigator";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "#001C2F",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ resizeMode: "contain", height: 100 }}
          source={require("./assets/o-imhd-sk.png")}
        />
      </View>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator />
        <StatusBar hidden={true} translucent={true} />
      </NavigationContainer>
    </>
  );
}

export default App;
