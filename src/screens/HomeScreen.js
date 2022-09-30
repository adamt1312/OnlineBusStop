import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import { NoInternet } from "../components/NoInternet";
import { ERROR_TITLE } from "../constants";

const HomeScreen = ({ route }) => {
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
  const [connectionError, setConnectionError] = useState(false);

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
      {connectionError && <NoInternet />}
      <WebView
        useWebView2
        ref={(ref) => (webViewRef.current = ref)}
        source={{
          uri: stop_url,
        }}
        onScroll={(syntheticEvent) => {
          const { contentOffset } = syntheticEvent.nativeEvent;
          handleScroll(contentOffset);
        }}
        onError={() => setConnectionError(true)}
        onLoadEnd={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          nativeEvent.title !== ERROR_TITLE &&
            connectionError &&
            setConnectionError(false);
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
