import React, {useState} from "react";
import axios from "axios";
import {SafeAreaView, Text, View, StyleSheet, Pressable, TouchableOpacity} from "react-native";

export const UsersScreen = () => {

    const [users, setUsers] = useState()

    const loadUsers = () => {
        axios.get('https://reqres.in/api/users/').then((res) => setUsers(res))
    }

    console.log(users)
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Это страница с пользователями</Text>
            </View>
            <TouchableOpacity style={styles.loadUsersButton} activeOpacity={0.4} onPress={loadUsers}>
                <Text style={styles.buttonText}>Загрузить пользователей</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    loadUsersButton: {
      backgroundColor: '#3198fd',
      marginTop: 20,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },

    buttonText: {
     fontSize: 15,
     fontWeight: '700',
     color: 'white',
    },
})