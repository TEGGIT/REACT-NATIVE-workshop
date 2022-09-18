import React, {useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import UserList from "../../components/UserList";
import {userIconSVG} from "../../assets/userIcon";

export const UsersScreen = () => {

    const [users, setUsers] = useState([])

    const loadUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    const removeUsers = () => {
        setUsers([])
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Это экран с пользователями</Text>
            </View>
            <TouchableOpacity style={styles.loadUsersButton} activeOpacity={0.4} onPress={loadUsers}>
                <Text style={styles.buttonText}>Загрузить пользователей c api</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeUsersButton} activeOpacity={0.4} onPress={removeUsers}>
                <Text style={styles.buttonText}>Удалить пользователей</Text>
            </TouchableOpacity>
            <Text style={styles.userTitle}>Список пользователей:</Text>
            {!users.length && <Text style={styles.emptyMessage}>Список пуст</Text>}
            <UserList array={users}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    loadUsersButton: {
      backgroundColor: '#3198fd',
      marginTop: 20,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },

    removeUsersButton: {
        backgroundColor: '#fd3138',
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

    userTitle: {
        fontSize: 15,
        fontWeight: '700',
        paddingTop: 15,
        textAlign: 'left',
        width: '100%',
    },

    emptyMessage: {
        paddingTop: 20,
        color: '#c5c5c5',
        fontSize: 15,
    },

})