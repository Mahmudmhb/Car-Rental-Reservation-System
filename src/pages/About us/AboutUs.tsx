import { motion } from "framer-motion";
import bg from "../../../src/assets/image/handsome-customer-checking-the-car-interior-e1631573837115.jpg";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    photo:
      "https://img.freepik.com/free-photo/business-man-using-his-mobile-phone_23-2148018588.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    photo:
      "https://img.freepik.com/premium-photo/corporate-man_1164846-22755.jpg?",
  },
  {
    name: "Michael Johnson",
    role: "Head of Marketing",
    photo:
      "https://img.freepik.com/free-photo/successful-handsome-business-man-office_1303-20918.jpg",
  },
  {
    name: "Emily Davis",
    role: "Chief Financial Officer",
    photo:
      "https://img.freepik.com/free-photo/young-smiling-businesswoman-working-laptop_329181-17308.jpg",
  },
  {
    name: "David Brown",
    role: "Head of Technology",
    photo:
      "https://img.freepik.com/free-photo/handsome-businessman-working-office-desk_329181-19407.jpg",
  },
  {
    name: "Sophia Wilson",
    role: "Customer Relations Manager",
    photo:
      "https://img.freepik.com/free-photo/happy-customer-support-girl-headset-working-office_58466-11287.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-slate-50">
      <Helmet>
        <title>About Us - Car Rental Reservation System</title>
      </Helmet>
      {/* Header Section */}
      <div className="pt-20 mb-10 w-11/12 mx-auto p-3 rounded-2xl">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-[#234896]">Welcome to Our Company</h3>
          <h1 className="text-[#050a15] text-5xl font-extrabold">
            Learn About <span className="text-[#234896]">Our Journey</span>
          </h1>
          <p>
            Discover our mission, meet our incredible team, and explore the
            values that drive us to deliver exceptional service every day.
          </p>
        </motion.div>

        {/* Image and History Section */}
        <div className="md:grid md:grid-cols-2 gap-8 md:min-h-[90vh] my-10">
          <div>
            <motion.div
              className="hero h-full md:min-h-[80vh] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="hero-overlay bg-opacity-90"></div>
              <div className="hero-content">
                <div className="max-w-md space-y-10">
                  <p className="text-[#ffd046]">About Our Beginnings</p>
                  <h1 className="mb-5 text-5xl text-white font-bold">
                    From Humble Beginnings to Industry Leaders
                  </h1>
                  <p className="mb-5 text-white">
                    Founded in 2005, our company has grown from a small
                    operation to a trusted name in the car rental industry. We
                    are committed to providing top-notch service, sustainability
                    practices, and unmatched customer experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values and Commitment Section */}
          <div>
            <motion.div
              className="space-y-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-[#234896]">
                Our Core Values
              </h2>
              <p>
                Integrity, innovation, and customer satisfaction are at the
                heart of everything we do. We strive to create a positive impact
                by offering eco-friendly options and maintaining ethical
                practices.
              </p>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p>
                To redefine car rental services with unparalleled convenience
                and quality. Our goal is to ensure every customer feels valued
                and supported throughout their journey.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          className="my-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#234896] mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white text-gray-800 shadow-md rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
