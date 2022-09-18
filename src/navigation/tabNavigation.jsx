import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackMainNavigation from "./ScreenNavigationMain";
import StackUsersNavigation from "./ScreenNavigationUsers";

const Tab = createBottomTabNavigator();

const tabs = [
    {
        name: 'Main',
        component: StackMainNavigation,
        title: 'Главная',
        id: 0,
    },
    {
        name: 'Users',
        component: StackUsersNavigation,
        title: 'Пользователи',
        id: 1,
    }
]

export default function TabNavigate() {

    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: true,
        }}>
            {tabs.map(tab =>
                <Tab.Screen
                    key={tab.id}
                    name={`${tab.name}`}
                    component={tab.component}
                    options={{
                        tabBarStyle: {
                            alignItems: "center",
                            flexDirection: "row",
                        },
                        tabBarLabelStyle: {
                            fontSize: 14
                        },
                        tabBarIcon: () => <></>,
                        title: tab.title,
                    }}
                />
            )}
        </Tab.Navigator>
    )
}


