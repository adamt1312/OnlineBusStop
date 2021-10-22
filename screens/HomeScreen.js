import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const HomeScreen = ({ navigation }) => {
  return (
    <WebView
      source={{ uri: "https://imhd.sk/ba/online-zastavkova-tabula" }}
      style={{ marginTop: 20, borderWidth: 5, borderColor: "red" }}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
