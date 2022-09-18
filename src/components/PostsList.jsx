import React from 'react';
import {View, Text, ScrollView, StyleSheet} from "react-native";

const PostsList = ({posts}) => {
    return (
        <ScrollView style={styles.container}>
            {posts?.map(post => (
                <View style={styles.postsWrapper} key={post?.id}>
                    <Text style={styles.postsTitle}>{post?.title.toUpperCase()}</Text>
                    <Text style={styles.postsBody}>{post?.body}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default PostsList;

const styles = StyleSheet.create({
    postsWrapper: {
        backgroundColor: '#eeeeee',
        padding: 10,
        borderWidth: 1,
        borderColor: '#b7b7b7',
        borderRadius: 10,
        marginBottom: 15,
    },
    container: {
      marginTop: 20,
    },
    postsTitle: {
      fontSize: 16,
        fontWeight: '700',
        color: '#00b8f5'
    },
    postsBody: {
      fontSize: 15,
        color: '#000000',
        fontWeight: '500',
    },
})