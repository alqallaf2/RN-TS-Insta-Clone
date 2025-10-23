import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type postCardProps = {
  id: number;
  username: string;
  userAvatar: string;
  postImage: string;
  likes: number;
  caption: string;
  comments: number;
  timeAgo: string;
};

const Postcard = ({
  id,
  username,
  userAvatar,
  postImage,
  likes,
  caption,
  comments,
  timeAgo,
}: postCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: userAvatar }} style={styles.userAvatar} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: postImage }} style={styles.postImage} />
      <View style={styles.footer}>
        <View style={styles.actionButtons}>
          <Text style={styles.actionButton}>♡</Text>
          <Text style={styles.actionButton}>💬</Text>
          <Text style={styles.actionButton}>📤</Text>
          <Text style={styles.actionButton}>🔖</Text>
        </View>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.comments}>View all {comments} comments</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
    </View>
  );
};

export default Postcard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  footer: {
    padding: 10,
  },
  actionButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  actionButton: {
    fontSize: 24,
    marginRight: 15,
  },
  likes: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    marginBottom: 5,
  },
  comments: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  timeAgo: {
    fontSize: 12,
    color: "#999",
  },
});
