import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {UserIconSVG} from "../assets/userIcon";

const UserList = ({array}) => {
    console.log(array)
    return (
     <ScrollView style={styles.container}>
         {UserIconSVG}
         {array?.map(user => (
             <View key={user?.id} style={styles.userContainer}>
                 <Text style={styles.userNameTitle}>{user?.name}</Text>
                 <Text style={styles.userOtherInfo}>{user?.email}</Text>
                 <Text style={styles.userOtherInfo}>{user?.phone}</Text>
             </View>
         ))}
     </ScrollView>
    );
};

export default UserList;

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
    },

    userContainer: {
        padding: 5,
        backgroundColor: '#e5e5e5',
        marginBottom: 10,
        borderRadius: 5,
    },

    userNameTitle: {
        fontSize: 15,
        fontWeight: '700',
    },

    userOtherInfo: {
        fontSize: 15,

    },
})