export type TFilter = {
  priceRange: string;
  carType: string;
};
export type TUser = {
  name: string;
  _id: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address?: string;
  termsAccepted: boolean;
  isBlocked?: true;
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
