import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '@src/screens/HomeScreen';
import AllStopsScreen from '@src/screens/AllStopsScreen';
import { View } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
    <View style={{ flex: 1 }}>
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#001C2F' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => renderTabIcon('home', focused),
                    swipeEnabled: false,
                }}
            />
            <Tab.Screen
                name="All Stops"
                component={AllStopsScreen}
                options={{
                    tabBarLabel: ({ focused }) => renderTabIcon('allStops', focused),
                }}
            />
        </Tab.Navigator>
    </View>
);

const renderTabIcon = (screen: 'home' | 'allStops', focused: boolean) => {
    let IconComponent;
    let iconName;

    switch (screen) {
        case 'home':
            IconComponent = AntDesign;
            iconName = 'home';
            break;
        case 'allStops':
            IconComponent = Entypo;
            iconName = 'list';
            break;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <IconComponent name={iconName} size={30} color={focused ? 'white' : '#004a80'} />
        </View>
    );
};

export default TabNavigator;
