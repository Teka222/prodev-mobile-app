import { View, StyleSheet, FlatList } from "react-native";
import PropertyListingCard from "@/components/common/PropertyListingCard";

const mockData = [
  { id: "1", title: "Modern Apartment", location: "Cape Town", price: "R1,200,000" },
  { id: "2", title: "Cozy Cottage", location: "Durban", price: "R850,000" },
  { id: "3", title: "Luxury Villa", location: "Sandton", price: "R4,500,000" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyListingCard property={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});
