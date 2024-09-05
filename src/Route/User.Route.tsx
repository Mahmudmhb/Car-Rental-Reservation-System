import Booking from "../Component/Dashboard/User/Booking/Booking";
import Payment from "../Component/Dashboard/User/Payment/Payment";
import UserManagement from "../Component/Dashboard/User/UserManagement/UserManagement";

export const UserRoute = [
  {
    name: "User Dashboard",
    path: "user-management",
    element: <UserManagement />,
  },

  {
    name: "Booking Management",
    path: "booking-management",
    element: <Booking />,
  },
  {
    name: "Payment Management",
    path: "payment-management",
    element: <Payment />,
  },
];
