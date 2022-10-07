import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import { NoInternet } from "../components/NoInternet";
import { ERROR_TITLE, WEB_URL } from "../constants";

const HomeScreen = ({ route, navigation }) => {
  const [stop_url, setStopUrl] = useState(WEB_URL);
  const [refreshEnabled, setRefreshEnabled] = useState(true);
  const [connectionError, setConnectionError] = useState(false);
  useEffect(() => {
    if (route.params !== undefined) {
      setStopUrl(WEB_URL + route.params.stop_id);
    }
  });
  const handleScrollAndRefresh = (contentOffset) => {
    if (contentOffset.y == 0 && refreshEnabled == false)
      setRefreshEnabled(true);
    else if (contentOffset.y > 0 && refreshEnabled == true)
      setRefreshEnabled(false);
  };
  const triggerReload = () => {
    webViewRef.current.reload();
  };
  const webViewRef = useRef();
  let touchX;
  const handleSwipeRight = (pageX) => {
    if (touchX - pageX > 150) navigation.navigate("All Stops");
  };
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
          handleScrollAndRefresh(contentOffset);
        }}
        onError={() => setConnectionError(true)}
        onLoadEnd={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          nativeEvent.title !== ERROR_TITLE &&
            connectionError &&
            setConnectionError(false);
        }}
        geolocationEnabled
        onTouchStart={(e) => (touchX = e.nativeEvent.pageX)}
        onTouchEnd={(e) => handleSwipeRight(e.nativeEvent.pageX)}
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
