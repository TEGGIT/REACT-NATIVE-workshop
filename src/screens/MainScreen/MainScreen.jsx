import React, {useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import PostsList from "../../components/PostsList";

export const Main = () => {

    const [postsList, setPostsList] = useState([])

    const loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => setPostsList(json))
    }

    const removePosts = () => {
        setPostsList([])
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
             <Text>Это главная страница</Text>
            </View>
            <TouchableOpacity activeOpacity={0.4} style={styles.loadPostsButton} onPress={loadPosts}>
                <Text style={styles.buttonText}>Загрузить посты</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.removePostsButton} onPress={removePosts}>
                <Text style={styles.buttonText}>Удалить посты</Text>
            </TouchableOpacity>
                <Text style={styles.postsTitle}>Список постов:</Text>
            {!postsList.length && <Text style={styles.emptyMessage}>Список пуст</Text>}
            <PostsList posts={postsList}/>
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
    loadPostsButton: {
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
    removePostsButton: {
        backgroundColor: '#fd3138',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    postsTitle: {
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

