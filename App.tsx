import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Storylist from "./Components/Storylist";
import Header from "./Components/Header";
import Postlist from "./Components/Postlist";
import Navlist from "./Components/Navlist";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <Header />
        <Storylist />
        <Postlist />
      </ScrollView>
      <Navlist />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
});
