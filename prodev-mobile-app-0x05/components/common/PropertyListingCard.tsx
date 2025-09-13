import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
};

export default function PropertyListingCard({ property }: { property: Property }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.location}>{property.location}</Text>
      <Text style={styles.price}>{property.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "600" },
  location: { fontSize: 14, color: "#555", marginVertical: 4 },
  price: { fontSize: 16, fontWeight: "bold", color: "#2E86AB" },
});
