import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import posts from "../data/posts";
import Postcard from "./Postcard";
const Postlist = () => {
  return (
    <View>
      {posts.map((post) => (
        <Postcard
          key={post.id}
          id={post.id}
          username={post.username}
          userAvatar={post.userAvatar}
          postImage={post.postImage}
          likes={post.likes}
          caption={post.caption}
          comments={post.comments}
          timeAgo={post.timeAgo}
        />
      ))}
    </View>
  );
};

export default Postlist;

const styles = StyleSheet.create({});
