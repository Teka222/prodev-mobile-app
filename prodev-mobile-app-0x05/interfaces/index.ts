export interface PropertyLocationProps {
  street: string;
  city: string;
  country: string;
}

export interface PropertyListingProps {
  propertyName: string;
  rate: number;
  currency: string;
  amount: number;
  location: PropertyLocationProps;
  favorite: boolean;
  image?: string; // optional image path
}

export interface PropertListing {
  listings: PropertyListingProps[];
}
