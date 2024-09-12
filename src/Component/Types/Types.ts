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
  _id?: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  status?: "available" | "unavailable";
  pricePerHour: number;
  isDeleted?: boolean;
  AdditionalFeatures: string[];
  carType: ["SUV" | "Sedan" | "Hatchback" | "Convertible"];
  image?: string;
};

export type IBookingForm = {
  nidOrPassport: string;
  drivingLicense: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  gps: boolean;
  childSeat: boolean;
  startTime: string;
};

export type TBooked = {
  _id: string;
  date: string;
  user?: string;
  carId: string;
  startTime: string;
  endTime?: string;
  totalCost?: number;
  isBooked?: "unconfirmed" | "confirmed";
  isDeleted?: boolean;
};

export interface Filters {
  carType: string;
  priceRange: [number, number];
  color: string;
  features: string[];
}

export interface CarState {
  car: TCar[];
  updateCar: TCar[];
  filteredCars: TCar[];
  filters: Filters;
}
