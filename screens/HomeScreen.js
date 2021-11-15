import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
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
      source={{
        uri: stop_url,
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
