import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { NO_INTERNET_MESSAGE } from '@src/constants';

export const NoInternet: React.FC = () => {
    return (
        <LinearGradient colors={['#001C2F', '#001C2F', '#192f6a']} style={styles.grd}>
            <View style={styles.container}>
                <Image source={require('../../assets/no-internet.png')} style={styles.image} />
                <Text style={styles.text}>{NO_INTERNET_MESSAGE}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    grd: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 200,
        opacity: 0.9,
    },
    text: {
        color: 'white',
        maxWidth: 300,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Roboto',
    },
});

export default NoInternet;
