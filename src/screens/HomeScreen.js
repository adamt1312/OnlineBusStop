import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

const HomeScreen = ({ route, navigation }) => {
  const [stop_url, setStopUrl] = useState(
    "https://imhd.sk/ba/online-zastavkova-tabula?st="
  );
  const [refreshEnabled, setRefreshEnabled] = useState(true);
  useEffect(() => {
    if (route.params !== undefined) {
      setStopUrl(
        "https://imhd.sk/ba/online-zastavkova-tabula?st=" + route.params.stop_id
      );
    }
  });

  const handleScroll = (contentOffset) => {
    if (contentOffset.y == 0 && refreshEnabled == false)
      setRefreshEnabled(true);
    else if (contentOffset.y > 0 && refreshEnabled == true)
      setRefreshEnabled(false);
  };

  const triggerReload = () => {
    webViewRef.current.reload();
  };

  const webViewRef = useRef();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={refreshEnabled}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={triggerReload}
          enabled={refreshEnabled}
        />
      }
    >
      <WebView
        useWebView2
        ref={(ref) => (webViewRef.current = ref)}
        style={{
          backgroundColor: "pink",
          borderWidth: 5,
          borderColor: "red",
        }}
        source={{
          uri: stop_url,
        }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" />}
        onScroll={(syntheticEvent) => {
          const { contentOffset } = syntheticEvent.nativeEvent;
          handleScroll(contentOffset);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default HomeScreen;
