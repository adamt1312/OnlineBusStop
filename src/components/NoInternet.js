import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { NO_INTERNET_MASSAGE } from "../constants";

export const NoInternet = () => {
  return (
    <>
      <LinearGradient
        colors={["#001C2F", "#001C2F", "#192f6a"]}
        style={styles.grd}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/no-internet.png")}
            style={{ resizeMode: "contain", height: 200, opacity: 0.9 }}
          />
          <Text
            style={{
              color: "white",
              maxWidth: 300,
              textAlign: "center",
              fontSize: 20,
              fontFamily: "Roboto",
            }}
          >
            {NO_INTERNET_MASSAGE}
          </Text>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  grd: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
