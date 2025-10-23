import { ImageProps, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
type storyCardProps = {
  id: number;
  username: string;
  avatar: string;
  hasStory: boolean;
  isYourStory?: boolean;
};

const StoryCard = ({
  id,
  username,
  avatar,
  hasStory,
  isYourStory,
}: storyCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.storyCard} />
      <Text style={styles.username}>{username}</Text>
      {/* <View style={styles.storyCard}>
        {hasStory && (
          <Text style={styles.storyCard}>has story: {hasStory.toString()}</Text>
        )}
        <Text style={styles.storyCard}>
          {" "}
          your story: {isYourStory ? "Yes" : "No"}{" "}
        </Text>
      </View> */}
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  storyCard: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "red",
    padding: 2,
    // margin: 30,
    marginHorizontal: 10,
  },

  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  username: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    padding: 0,
  },
});
