import React from 'react'

import { createStackNavigator } from "@react-navigation/stack"

import {Main} from "../screens/MainScreen/MainStack";

const MainScreenStack = createStackNavigator()

const screensProfile = [
    {
        component: Main,
        name: 'Main',
        id: 0,
    },
]

export default function StackMainNavigation() {
    return (
        <MainScreenStack.Navigation screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
                }}>
            {screensProfile.map(screen =>
            <MainScreenStack.Screen>
                component={screen.component}
                key={screen.id}
                name={screen.name}
            </MainScreenStack.Screen>
            )}

        </MainScreenStack.Navigation>
    )
}




