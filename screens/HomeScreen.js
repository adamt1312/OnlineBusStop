import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const HomeScreen = ({ route, navigation }) => {
  const [stop_url, setStopUrl] = useState(
    "https://imhd.sk/ba/online-zastavkova-tabula?st="
  );

  useEffect(() => {
    if (route.params !== undefined) {
      setStopUrl(
        "https://imhd.sk/ba/online-zastavkova-tabula?st=" + route.params.stop_id
      );
    }
  });

  return (
    <WebView
      ref={(ref) => {
        webview = ref;
      }}
      source={{
        uri: stop_url,
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
