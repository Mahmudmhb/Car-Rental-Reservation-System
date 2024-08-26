import React from "react";

// Sample team data
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    photo: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    photo: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Michael Johnson",
    role: "Head of Marketing",
    photo: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

// Sample fleet data
const fleetInfo = [
  {
    category: "Economy",
    description:
      "Affordable and fuel-efficient cars for budget-conscious travelers.",
  },
  {
    category: "Luxury",
    description: "High-end vehicles for those seeking comfort and style.",
  },
  {
    category: "SUVs",
    description:
      "Spacious and versatile SUVs for family trips and outdoor adventures.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          About Us
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Learn more about our company's history, team, fleet, and our
          commitment to customer service.
        </p>
      </header>

      {/* Company History */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Company History</h2>
        <p className="text-gray-700 mb-6">
          Our company was founded in 2005 with the mission to provide reliable
          and affordable car rental services. Over the years, we have expanded
          our fleet and services to meet the diverse needs of our customers. Our
          vision is to be the leading car rental company known for exceptional
          customer service and sustainability.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Fleet */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
        <div className="space-y-4">
          {fleetInfo.map((fleet, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{fleet.category}</h3>
              <p className="text-gray-700">{fleet.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
        <p className="text-gray-700 mb-6">
          We are committed to providing the best possible service to our
          customers. Our core values include integrity, customer satisfaction,
          and sustainability. We strive to maintain a fleet of eco-friendly
          vehicles and implement practices that reduce our environmental impact.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Email:</strong> info@carrentalcompany.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> 123 Main Street, Anytown, USA
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
