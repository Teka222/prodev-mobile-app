import { FlatList } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
};

export default function PropertyListing({ data }: { data: Property[] }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PropertyListingCard property={item} />}
    />
  );
}
