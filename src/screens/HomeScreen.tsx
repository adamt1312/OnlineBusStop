import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, RefreshControl, ScrollView, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import NoInternet from '@src/components/NoInternet';
import { ERROR_TITLE, WEB_URL } from '@src/constants';

type HomeScreenProps = {
    route: { params?: { stop_id?: string } };
    navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ route, navigation }) => {
    const [stopUrl, setStopUrl] = useState(WEB_URL);
    const [refreshEnabled, setRefreshEnabled] = useState(true);
    const [connectionError, setConnectionError] = useState(false);
    const webViewRef = useRef<WebView>(null);
    let touchX: number = 0;

    useEffect(() => {
        if (route.params?.stop_id) {
            setStopUrl(`${WEB_URL}${route.params.stop_id}`);
        }
    }, [route.params]);

    const handleScrollAndRefresh = useCallback((contentOffset: { y: number }) => {
        setRefreshEnabled(contentOffset.y === 0);
    }, []);

    const triggerReload = useCallback(() => {
        webViewRef.current?.reload();
    }, []);

    const handleSwipeRight = useCallback(
        (pageX: number) => {
            if (touchX - pageX > 150) navigation.navigate('All Stops');
        },
        [navigation],
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            scrollEnabled={refreshEnabled}
            refreshControl={<RefreshControl refreshing={false} onRefresh={triggerReload} enabled={refreshEnabled} />}
        >
            {connectionError && <NoInternet />}
            <WebView
                ref={webViewRef}
                source={{ uri: stopUrl }}
                onScroll={syntheticEvent => handleScrollAndRefresh(syntheticEvent.nativeEvent.contentOffset)}
                onError={() => setConnectionError(true)}
                onLoadEnd={syntheticEvent => {
                    const { nativeEvent } = syntheticEvent;
                    if (nativeEvent.title !== ERROR_TITLE && connectionError) {
                        setConnectionError(false);
                    }
                }}
                geolocationEnabled
                onTouchStart={e => (touchX = e.nativeEvent.pageX)}
                onTouchEnd={e => handleSwipeRight(e.nativeEvent.pageX)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default HomeScreen;
