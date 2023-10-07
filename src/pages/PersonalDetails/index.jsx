import React from "react";
import DetailsForm from "../../components/DetailsForm";
import Footer from "../../components/Footer";
import DashboardNav from "../../components/Navbar/DashboardNav";

// Define the Personnal Details component as a functional component
const PersonalDetails = () => {
  return (
    <div>
      <DashboardNav />
      <DetailsForm />
      <Footer />
    </div>
  );
};

export default PersonalDetails;
