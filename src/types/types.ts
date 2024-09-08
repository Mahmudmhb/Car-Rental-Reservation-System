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
};
