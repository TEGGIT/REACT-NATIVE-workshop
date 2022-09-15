import React from 'react';
import {View, Text, StyleSheet} from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackMainNavigation from "../navigation/ScreenNavigationMain";

const Tab = createBottomTabNavigator();

const tabs = [
    {
        name: 'Main',
        component: StackMainNavigation,
        title: 'Main',
        id: 0,
    },
]

export default function TabNavigate() {

    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
        }}>
            {tabs.map(tab =>
                <Tab.Screen
                    key={tab.id}
                    name={`${tab.name}`}
                    component={tab.component}
                    options={{
                        title: tab.title,
                    }}
                />
            )}
        </Tab.Navigator>
    )
}


