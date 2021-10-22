import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const search = ({ navigation }) => {
  return (
    <WebView source={{ uri: "https://imhd.sk/ba/online-zastavkova-tabula" }} />
  );
};

const styles = StyleSheet.create({});

export default search;
