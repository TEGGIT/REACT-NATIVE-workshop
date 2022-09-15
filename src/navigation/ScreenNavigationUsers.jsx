import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"

import {UsersScreen} from "../screens/UsersScreen/UsersScreen";

const UsersScreenStack = createStackNavigator()

const screens = [
    {
        component: UsersScreen,
        name: 'Пользователи',
        id: 0,
    },
]

export default function StackUsersNavigation() {
    return (
        <UsersScreenStack.Navigator screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
        }}>
            {screens.map(screen =>
                <UsersScreenStack.Screen component={screen.component}
                                        key={screen.id}
                                        name={screen.name}/>
            )}

        </UsersScreenStack.Navigator>
    )
}
