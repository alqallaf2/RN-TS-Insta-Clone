import { StyleSheet, Text, View } from "react-native";
import React from "react";

type navCardProps = {
  icon: string;
  name: string;
};

const Navcard = ({ icon, name }: navCardProps) => {
  return (
    <View style={styles.navItem}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Navcard;

const styles = StyleSheet.create({
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  name: {
    fontSize: 10,
    color: "#666",
  },
});
