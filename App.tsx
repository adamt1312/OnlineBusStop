import React, { useEffect } from 'react';
import { View, StatusBar, Image, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '@src/navigation/TabNavigator';
import { requestForegroundPermissionsAsync, PermissionStatus } from 'expo-location';

const App = () => {
    useEffect(() => {
        const requestLocationPermission = async () => {
            try {
                const { status } = await requestForegroundPermissionsAsync();
                if (status !== PermissionStatus.GRANTED) {
                    Alert.alert('Permission Denied', 'Location access is required for bus stops.');
                }
            } catch (error) {
                console.error('Location permission error:', error);
            }
        };
        requestLocationPermission();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('./assets/o-imhd-sk.png')} />
            </View>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
            <StatusBar hidden translucent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001C2F',
    },
    header: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        height: 100,
    },
});

export default App;
