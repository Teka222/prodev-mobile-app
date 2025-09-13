import { View, Text, StyleSheet } from "react-native";

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Screen</Text>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
