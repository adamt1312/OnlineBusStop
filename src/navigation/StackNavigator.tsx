import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@src/navigation/TabNavigator';

export type RootStackParamList = {
    TabNav: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNav" component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
