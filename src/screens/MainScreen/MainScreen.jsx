import React from "react";
import {SafeAreaView, Text, View, StyleSheet} from "react-native";

export const Main = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
             <Text>Это главная страница</Text>
            </View>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

