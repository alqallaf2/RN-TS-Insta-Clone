import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import stories from "../data/stories";
import StoryCard from "./StoryCard";

export default function Storylist() {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      {stories.map((story) => (
        <StoryCard
          id={story.id}
          username={story.username}
          avatar={story.avatar}
          hasStory={story.hasStory}
          isYourStory={story.isYourStory}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
