export type TFilter = {
  priceRange: string;
  carType: string;
};

export type TCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  status?: "available" | "unavailable";
  pricePerHour: number;
  isDeleted?: boolean;
};
