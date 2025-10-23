import { StyleSheet, View } from "react-native";
import React from "react";
import navIcons from "../data/nav";
import Navcard from "./Navcard";

const Navlist = () => {
  return (
    <View style={styles.container}>
      {navIcons.map((navIcon, index) => (
        <Navcard key={index} icon={navIcon.icon} name={navIcon.name} />
      ))}
    </View>
  );
};

export default Navlist;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingBottom: 20,
    paddingTop: 10,
  },
});
